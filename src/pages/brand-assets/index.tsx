import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import BehindOurLogo from "@/Components/Pages/AboutUs/BehindOurLogo";
import BrandAssetsBanner from "@/Components/Pages/BrandAssets/BrandAssetsBanner";
import BrandAssetsColor from "@/Components/Pages/BrandAssets/BrandAssetsColor";
import BrandAssetsDoDont from "@/Components/Pages/BrandAssets/BrandAssetsDoDont";
import BrandAssetsGuideLine from "@/Components/Pages/BrandAssets/BrandAssetsGuideLine";
import BrandAssetsLogo from "@/Components/Pages/BrandAssets/BrandAssetsLogo";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import React, { FC } from "react";
import jwt from "jsonwebtoken";
interface IProps {
  metaData: IHeadData;
}

const BrandAssets: FC<IProps> = ({ metaData }) => {
  return (
    <>
      {metaData && <MetaDataComponent metaData={metaData} />}
      <main>
        <BrandAssetsBanner />

        <section className="bg-surface bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 py-[10vh]">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <BrandAssetsDoDont />
          </div>
        </section>

        <BehindOurLogo />

        <section className="py-[10vh] bg-surface">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <BrandAssetsLogo />
          </div>
        </section>

        <section className="py-[10vh]">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <BrandAssetsColor />
          </div>
        </section>

        <section className="bg-surface bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 py-[10vh]">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <BrandAssetsGuideLine />
          </div>
        </section>
      </main>
    </>
  );
};

export default BrandAssets;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);

  try {
    const seoPageSlug = "brandAssets";

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
        revalidate: 86400, // 3600 = 1 hour
      };
    }
    return { props: { isError: true } };
  } catch (error) {
    // console.error(error);
    return { props: { isError: true } };
  }
}

// export async function getStaticProps(context: GetStaticPropsContext) {
//   const slug = "brand-assets"; // CHANGE THIS SLUG
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
//       revalidate: 86400, // 3600 = 1 hour
//     };
//   }
//   return {
//     props: {
//       metaData,
//     },
//     revalidate: 86400, // 3600 = 1 hour
//   };
// }
