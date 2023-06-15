import LiveChat from "@/Components/LiveChat/LiveChat";
import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import FCFeatureForAllPackage from "@/Components/Pages/FeatureCard/FCFeatureForAllPackage";
import ResellerHostingArticle from "@/Components/Pages/ResellerHosting/ResellerHostingArticle";
import ResellerHostingBanner from "@/Components/Pages/ResellerHosting/ResellerHostingBanner";
import ResellerHostingFaq from "@/Components/Pages/ResellerHosting/ResellerHostingFaq";
import ResellerHostingPricing from "@/Components/Pages/ResellerHosting/ResellerHostingPricing";
import ResellerHostingWhmcs from "@/Components/Pages/ResellerHosting/ResellerHostingWhmcs";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import { GetStaticPropsContext } from "next";
import React, { FC, useState } from "react";
import jwt from "jsonwebtoken";

interface IProps {
  response: {
    metaData: IHeadData;
    data: IProduct;
  };
  isError: boolean;
}

const ResellerHosting: FC<IProps> = ({ response, isError }) => {
  const { metaData, data: product } = response;
  const [isLoading, setIsLoading] = useState<boolean>(!product ? true : false);

  return (
    <>
      <MetaDataComponent metaData={metaData} />
      <main>
        <section className="bg-surface bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10">
          <ResellerHostingBanner product={product} isLoading={isLoading} isError={isError} />
        </section>
        <section id="orderNow" className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <ResellerHostingPricing product={product} isLoading={isLoading} isError={isError} />
        </section>
        <section className="bg-surface bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10">
          <ResellerHostingWhmcs />
        </section>
        <section className="py-[10vh]">
          <ResellerHostingArticle />
        </section>
        <section className="py-[10vh] bg-surface">
          <FCFeatureForAllPackage />
        </section>
        <LiveChat />
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <ResellerHostingFaq />
        </section>
      </main>
    </>
  );
};

export default ResellerHosting;

export async function getStaticProps(context: GetStaticPropsContext) {
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);
  const nameSlug = "resellerHosting";
  const seoPageSlug = "resellerHosting";

  try {
    const response = await UseAxiosAdmin({
      axiosInstance: axios,
      method: "get",
      url: `/api/pages/package?nameSlug=${nameSlug}&seoPageSlug=${seoPageSlug}`,
      header: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (response?.data) {
      return {
        props: {
          response,
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
//   const slug = "reseller-hosting"; // CHANGE THIS SLUG
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
