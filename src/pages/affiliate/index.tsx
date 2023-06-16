import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import AffiliateBanner from "@/Components/Pages/Affiliate/AffiliateBanner";
import AffiliateFaq from "@/Components/Pages/Affiliate/AffiliateFaq";
import AffiliateHowItWorks from "@/Components/Pages/Affiliate/AffiliateHowItWorks";
import AffiliateLucrative from "@/Components/Pages/Affiliate/AffiliateLucrative";
import AffiliateNothingToLose from "@/Components/Pages/Affiliate/AffiliateNothingToLose";
import AffiliateWhy from "@/Components/Pages/Affiliate/AffiliateWhy";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import jwt from "jsonwebtoken";
import React, { FC } from "react";
interface IProps {
  metaData: IHeadData;
}

const Affiliate: FC<IProps> = ({ metaData }) => {
  return (
    <>
      {metaData && <MetaDataComponent metaData={metaData} />}
      <main>
        <section className="bg-surface pb-[8vh] md:pt-[12vh]">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <AffiliateBanner />
          </div>
        </section>

        <section className="py-[8vh]">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <AffiliateNothingToLose />
          </div>
        </section>

        <section className="py-[8vh] bg-surface">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <AffiliateWhy />
          </div>
        </section>

        <section className="py-[8vh]">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <AffiliateHowItWorks />
          </div>
        </section>

        <section className="py-[8vh] bg-surface">
          <div className="max-w-5xl mx-auto px-3 md:px-5">
            <AffiliateLucrative />
          </div>
        </section>

        <section className="py-[8vh]">
          <div className="max-w-5xl mx-auto px-3 md:px-5">
            <AffiliateFaq />
          </div>
        </section>
      </main>
    </>
  );
};
export default Affiliate;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);

  try {
    const seoPageSlug = "affiliate";
    const response = await UseAxiosAdmin({
      axiosInstance: axios,
      method: "get",
      url: `/api/pages/seo?seoPageSlug=${seoPageSlug}`,
      header: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    // console.log("metaData", response);
    if (response?.data) {
      const metaData = response?.data;
      return {
        props: {
          metaData,
        },
       
      };
    }
    return { props: { isError: true } };
  } catch (error) {
    // console.error(error);
    return { props: { isError: true } };
  }
}

// export async function getStaticProps(context: GetStaticPropsContext) {
//   const slug = "affiliate";
//   const metaData = await getMetaData(slug);

//   if (!metaData) {
//     // Return a default value if metaData is undefined
//     return {
//       props: {
//         metaData: {
//           // title: "Default Title",
//           // description: "Default description",
//           // // ...other default values
//         },
//       },
//      
//     };
//   }

//   return {
//     props: {
//       metaData,
//     },
//    
//   };
// }
