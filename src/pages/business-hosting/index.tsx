import { GetServerSidePropsContext, GetStaticProps } from "next";
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

export const getStaticProps: GetStaticProps = async () => {
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
};
