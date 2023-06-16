import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import BannerSslCertificates from "@/Components/Pages/SslCertificates/BannerSslCertificates";
import FeaturesOfSSLCertificate from "@/Components/Pages/SslCertificates/FeaturesOfSSLCertificate";
import SSLBrand from "@/Components/Pages/SslCertificates/SSLBrand";
import SSLTypes from "@/Components/Pages/SslCertificates/SSLTypes";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import { GetStaticPropsContext } from "next";
import React, { FC } from "react";
import jwt from "jsonwebtoken";
interface IProps {
  metaData: IHeadData;
}

const SslCertificates: FC<IProps> = ({ metaData }) => {
  return (
    <>
      {metaData && <MetaDataComponent metaData={metaData} />}
      <main>
        <BannerSslCertificates />
        <FeaturesOfSSLCertificate />
        <SSLBrand />
        <SSLTypes />
      </main>
    </>
  );
};

export default SslCertificates;

export async function getStaticProps(context: GetStaticPropsContext) {
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);

  try {
    const seoPageSlug = "sslCertificates";

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
//   const slug = "ssl-certificates";
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
