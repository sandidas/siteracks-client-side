import { GetServerSidePropsContext } from "next";
import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import dynamic from "next/dynamic";
import jwt from "jsonwebtoken";
import React, { FC, useState } from "react";
import BusinessHostingBanner from "@/Components/Pages/BusinessHosting/BusinessHostingBanner";
const LiveChat = dynamic(() => import("@/Components/LiveChat/LiveChat"));


const MoneyBackGuarantee = dynamic(() => import("@/Components/Home/MoneyBackGuarantee"));
const BusinessHostingPricing = dynamic(() => import("@/Components/Pages/BusinessHosting/BusinessHostingPricing"));
const BusinessHostingArticle = dynamic(() => import("@/Components/Pages/BusinessHosting/BusinessHostingArticle"));
const BusinessHostingMoreBenefits = dynamic(() => import("@/Components/Pages/BusinessHosting/BusinessHostingMoreBenefits"));
const BusinessHostingBusinessTools = dynamic(() => import("@/Components/Pages/BusinessHosting/BusinessHostingBusinessTools"));
const BusinessHostingFaq = dynamic(() => import("@/Components/Pages/BusinessHosting/BusinessHostingFaq"));
const BusinessHostingCompare = dynamic(() => import("@/Components/Pages/BusinessHosting/BusinessHostingCompare"));
const BusinessHostingApp = dynamic(() => import("@/Components/Pages/BusinessHosting/BusinessHostingApp"));
const FCFeatureForAllPackage = dynamic(() => import("@/Components/Pages/FeatureCard/FCFeatureForAllPackage"));


interface IProps {
  response: {
    metaData: IHeadData;
    data: IProduct;
  };
  isError: boolean;
}

const BusinessHosting: FC<IProps> = ({ response, isError }) => {
  const metaData = response?.metaData;
  const product = response?.data;

  const [isLoading, setIsLoading] = useState<boolean>(!product ? true : false);

  return (
    <>
      {metaData && <MetaDataComponent metaData={metaData} />}
      <main>
        <section className="bg-surface">
          <BusinessHostingBanner product={product} isLoading={isLoading} isError={isError} />
        </section>
        <section id="orderNow" className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          {}
          <BusinessHostingPricing product={product} isLoading={isLoading} isError={isError} />
        </section>
        <BusinessHostingCompare />
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <BusinessHostingApp />
        </section>

        <BusinessHostingArticle />

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <BusinessHostingMoreBenefits />
        </section>

        <section className="bg-surface">
          <div className="py-[10vh] mx-auto px-5 max-w-screen-2xl">
            <MoneyBackGuarantee />
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <BusinessHostingBusinessTools />
        </section>
        <LiveChat />

        <section className="py-[10vh]">
          <FCFeatureForAllPackage />
        </section>

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <BusinessHostingFaq />
        </section>
      </main>
    </>
  );
};

export default BusinessHosting;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);

  try {
    const nameSlug = "businessHosting";
    const seoPageSlug = "businessHosting";

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
      };
    }
    return { props: { isError: true } };
  } catch (error) {
    // console.error(error);
    return { props: { isError: true } };
  }
}

// export async function getStaticProps(context: GetStaticPropsContext) {
//   const slug = "business-hosting"; // CHANGE THIS SLUG
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

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//   // SEND COOKIES TO API SERVER
//   // ===========================
//   // since we are using "getServerSideProps", we need to send cookies manually to the server side. getServerSideProps runs on the server-side so it won't have access to the browser's cookies, we need to retrieve and send them explicitly.
//   // to do this, 1: we have to call "context"
//   // 2: we need to request cookies
//   // 3: we need to send cookies by using axios headers.

//   // step 1:
//   const { req } = context;
//   // step 2:
//   // const sessionCookie = req.cookies['at_sr']; // we can define which cookies we want to send
//   // "req.headers.cookie," // we can get all cookies
//   // console.log(sessionCookie);

//   // SEND ACCESS TOKEN TO API SERVER
//   // ================================
//   // step 1: getSession hook from context
//   // step 2: get AccessToken from getSession hook
//   // step 3: send it to by "axios" headers {Authorization}

//   let data;
//   let error;
//   try {
//     const response = await UseAxiosAdmin({
//       axiosInstance: axios,
//       method: "get",
//       url: "/api/package/getpackage/642b0e993d6a86e2cd4c2235",
//       header: {
//         // headers: {
//         //   Authorization: `Bearer ${sAccessToken}`,
//         //   Cookie: allCookies,
//         // },
//       },
//       // requestConfig: {},
//     });
//     // const response = await axios.get('https://example.com/api/data');
//     // console.log("response index", response);

//     if (response && response?.data && response?.data?.data) {
//       data = response?.data?.data;
//       // console.log("Index Response", data);
//       return {
//         props: {
//           data,
//         },
//       };
//     } else {
//       error = response?.error ? response?.error : "Failed to load data";
//       return { props: { error: error } };
//     }
//   } catch (error) {
//     // console.error(error);
//     error = error ? error : "Failed to load data";
//     return { props: { error: error } };
//   }
// };
