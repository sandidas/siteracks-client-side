import jwt from "jsonwebtoken";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import { GetStaticProps } from "next";
import React, { FC, useState } from "react";
import dynamic from "next/dynamic";
import ManagedVpsHostingBanner from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingBanner";

const LiveChat = dynamic(() => import("@/Components/LiveChat/LiveChat"));
const MoneyBackGuarantee = dynamic(() => import("@/Components/Home/MoneyBackGuarantee"));
const MetaDataComponent = dynamic(() => import("@/Components/Meta/MetaDataComponent"));
const FCFeatureForAllPackage = dynamic(() => import("@/Components/Pages/FeatureCard/FCFeatureForAllPackage"));

const ManagedVpsHostingArticle = dynamic(() => import("@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingArticle"));
const ManagedVpsHostingCompare = dynamic(() => import("@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingCompare"));
const ManagedVpsHostingFaq = dynamic(() => import("@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingFaq"));
const ManagedVpsHostingMoreBenefits = dynamic(() => import("@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingMoreBenefits"));
const ManagedVpsHostingPricing = dynamic(() => import("@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingPricing"));
const ManagedVpsHostingReadyApps = dynamic(() => import("@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingReadyApps"));

interface IProps {
  response: {
    metaData: IHeadData;
    data: IProduct;
  };
  isError: boolean;
}

const VpsLight: FC<IProps> = ({ response, isError }) => {
  const metaData = response?.metaData;
  const product = response?.data;
  const [isLoading, setIsLoading] = useState<boolean>(!product ? true : false);

  return (
    <>
      {metaData && <MetaDataComponent metaData={metaData} />}
      <main>
        <section className="bg-surface">
          <ManagedVpsHostingBanner product={product} isLoading={isLoading} isError={isError} />
        </section>
        <section id="orderNow" className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <ManagedVpsHostingPricing product={product} isLoading={isLoading} isError={isError} />
        </section>
        <ManagedVpsHostingCompare />
        <ManagedVpsHostingReadyApps />
        <ManagedVpsHostingArticle />
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <ManagedVpsHostingMoreBenefits />
        </section>

        <section className="bg-surface">
          <div className="py-[10vh] mx-auto px-5 max-w-screen-2xl">
            <MoneyBackGuarantee />
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">{/* <ManagedVpsHostingManagedVpsTools /> */}</section>
        <LiveChat />

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <FCFeatureForAllPackage />
        </section>

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <ManagedVpsHostingFaq />
        </section>
      </main>
    </>
  );
};

export default VpsLight;

export const getStaticProps: GetStaticProps = async () => {
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);
  const nameSlug = "managedVpsHosting";
  const seoPageSlug = "preManagedVpsHostingLight";

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
      };
    }
    return { props: { isError: true } };
  } catch (error) {
    // console.error(error);
    return { props: { isError: true } };
  }
};
