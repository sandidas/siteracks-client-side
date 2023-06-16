import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import AboutBanner from "@/Components/Pages/AboutUs/AboutBanner";
import BehindOurLogo from "@/Components/Pages/AboutUs/BehindOurLogo";
import BoostProductivity from "@/Components/Pages/AboutUs/BoostProductivity";
import OurCoreValues from "@/Components/Pages/AboutUs/OurCoreValues";
import WhoWeAre from "@/Components/Pages/AboutUs/WhoWeAre";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import jwt from "jsonwebtoken";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import React, { FC } from "react";
interface IProps {
  metaData: IHeadData;
}

const About: FC<IProps> = ({ metaData }) => {
  return (
    <>
      {metaData && <MetaDataComponent metaData={metaData} />}
      <main>
        <section className="bg-surface">
          <AboutBanner />
        </section>
        <WhoWeAre />
        <OurCoreValues />
        <BehindOurLogo />
        <BoostProductivity />
        <section className="py-[8vh] max-w-screen-2xl mx-auto">
          <SectionTitle supTitle="Your search for" title="lightning-fast hosting" subTitle="with excellent support ends here" />
        </section>
      </main>
    </>
  );
};
export default About;


export async function getServerSideProps(context: GetServerSidePropsContext) {
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);

  try {
    const seoPageSlug = "about";

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
//   const slug = "about";
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

// 
