import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import BannerSiteLock from "@/Components/Pages/SiteLock/BannerSiteLock";
import FaqSiteLock from "@/Components/Pages/SiteLock/FaqSiteLock";
import FeaturesSiteLock from "@/Components/Pages/SiteLock/FeaturesSiteLock";
import jwt from "jsonwebtoken";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import React, { FC } from "react";
interface IProps {
  metaData: IHeadData;
}
const SiteLockPage: FC<IProps> = ({ metaData }) => {
  return (
    <>
      {metaData && <MetaDataComponent metaData={metaData} />}

      <main>
        <BannerSiteLock />
        <FeaturesSiteLock />
        <FaqSiteLock />
      </main>
    </>
  );
};

export default SiteLockPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);

  try {
    const seoPageSlug = "websiteSecurity";

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
//   const slug = "sitelock";
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
