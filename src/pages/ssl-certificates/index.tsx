import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import BannerSslCertificates from "@/Components/Pages/SslCertificates/BannerSslCertificates";
import FeaturesOfSSLCertificate from "@/Components/Pages/SslCertificates/FeaturesOfSSLCertificate";
import SSLBrand from "@/Components/Pages/SslCertificates/SSLBrand";
import SSLTypes from "@/Components/Pages/SslCertificates/SSLTypes";
import { getMetaData } from "@/Helpers/AxiosMetaData";
import { GetStaticPropsContext } from "next";
import React, { FC } from "react";
interface IProps {
  metaData: IHeadData;
}

const SslCertificates: FC<IProps> = ({ metaData }) => {
  return (
    <>
      <MetaDataComponent metaData={metaData} />
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
  const slug = "ssl-certificates";
  const metaData = await getMetaData(slug);

  if (!metaData) {
    // Return a default value if metaData is undefined
    return {
      props: {
        metaData: {
          // title: "Default Title",
          // description: "Default description",
          // // ...other default values
        },
      },
      revalidate: 86400, // 3600 = 1 hour
    };
  }

  return {
    props: {
      metaData,
    },
    revalidate: 86400, // 3600 = 1 hour
  };
}
