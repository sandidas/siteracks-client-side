import MoneyBackGuarantee from "@/Components/Home/MoneyBackGuarantee";
import LiveChat from "@/Components/LiveChat/LiveChat";
import Head from "next/head";
import React, { FC } from "react";

import BusinessHostingBanner from "@/Components/Pages/BusinessHosting/BusinessHostingBanner";
import BusinessHostingPricing from "@/Components/Pages/BusinessHosting/BusinessHostingPricing";
import BusinessHostingArticle from "@/Components/Pages/BusinessHosting/BusinessHostingArticle";
import BusinessHostingMoreBenefits from "@/Components/Pages/BusinessHosting/BusinessHostingMoreBenefits";
import BusinessHostingBusinessTools from "@/Components/Pages/BusinessHosting/BusinessHostingBusinessTools";
import BusinessHostingFaq from "@/Components/Pages/BusinessHosting/BusinessHostingFaq";
import BusinessHostingCompare from "@/Components/Pages/BusinessHosting/BusinessHostingCompare";
import BusinessHostingApp from "@/Components/Pages/BusinessHosting/BusinessHostingApp";
import FCFeatureForAllPackage from "@/Components/Pages/FeatureCard/FCFeatureForAllPackage";
import useDynamicHead from "@/Components/Hooks/useDynamicHead";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { fetchProducts, useReactQueryContext } from "@/Context/ReactQueryProvider";
import { useQuery } from "@tanstack/react-query";

// interface IProps {
//   data: IProduct;
//   error?: string;
// }

const BusinessHosting = () => {
  // const businessHosting = products?.data;

  // console.log(data);
  return (
    <>
      {useDynamicHead({ slug: "businessHosting" })}
      <main>
        <section className="bg-surface">
          <BusinessHostingBanner />
        </section>
        <section id="orderNow" className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          {}
          <BusinessHostingPricing />
        </section>
        <BusinessHostingCompare />
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <BusinessHostingApp />
        </section>

        <BusinessHostingArticle />

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <BusinessHostingMoreBenefits />
        </section>
        <MoneyBackGuarantee />
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
