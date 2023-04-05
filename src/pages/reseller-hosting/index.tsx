import useDynamicHead from "@/Components/Hooks/useDynamicHead";
import LiveChat from "@/Components/LiveChat/LiveChat";
import FCFeatureForAllPackage from "@/Components/Pages/FeatureCard/FCFeatureForAllPackage";
import ResellerHostingArticle from "@/Components/Pages/ResellerHosting/ResellerHostingArticle";
import ResellerHostingBanner from "@/Components/Pages/ResellerHosting/ResellerHostingBanner";
import ResellerHostingFaq from "@/Components/Pages/ResellerHosting/ResellerHostingFaq";
import ResellerHostingPricing from "@/Components/Pages/ResellerHosting/ResellerHostingPricing";
import ResellerHostingWhmcs from "@/Components/Pages/ResellerHosting/ResellerHostingWhmcs";
import { useProducts } from "@/Context/ReactQueryProvider";
import Head from "next/head";

import React from "react";

const ResellerHosting = () => {
  const { products, isLoading, isError } = useProducts();
  return (
    <>
      {useDynamicHead({ slug: "resellerHosting" })}
      <main>
        <section className="bg-surface bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10">
          <ResellerHostingBanner products={products} isLoading={isLoading} isError={isError} />
        </section>
        <section id="orderNow" className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <ResellerHostingPricing products={products} isLoading={isLoading} isError={isError} />
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
