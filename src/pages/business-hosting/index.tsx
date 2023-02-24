import MoneyBackGuarantee from "@/Components/Home/MoneyBackGuarantee";
import LiveChat from "@/Components/LiveChat/LiveChat";
import Head from "next/head";
import React from "react";

import BusinessHostingBanner from "@/Components/Pages/BusinessHosting/BusinessHostingBanner";
import BusinessHostingPricing from "@/Components/Pages/BusinessHosting/BusinessHostingPricing";
import BusinessHostingArticle from "@/Components/Pages/BusinessHosting/BusinessHostingArticle";
import BusinessHostingMoreBenefits from "@/Components/Pages/BusinessHosting/BusinessHostingMoreBenefits";
import BusinessHostingBusinessTools from "@/Components/Pages/BusinessHosting/BusinessHostingBusinessTools";
import BusinessHostingFaq from "@/Components/Pages/BusinessHosting/BusinessHostingFaq";
import BusinessHostingCompare from "@/Components/Pages/BusinessHosting/BusinessHostingCompare";
import BusinessHostingApp from "@/Components/Pages/BusinessHosting/BusinessHostingApp";
import FCFeatureForAllPackage from "@/Components/Pages/FeatureCard/FCFeatureForAllPackage";

const BusinessHosting = () => {
  return (
    <>
      <Head>
        <title>Business Hosting | SiteRacks</title>
        <meta name="description" content="SiteRacks" />
      </Head>
      <main>
        <section className="bg-surface bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10">
          <BusinessHostingBanner />
        </section>
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
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
