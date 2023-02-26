import MoneyBackGuarantee from "@/Components/Home/MoneyBackGuarantee";
import LiveChat from "@/Components/LiveChat/LiveChat";
import BusinessHostingApp from "@/Components/Pages/BusinessHosting/BusinessHostingApp";
import FCFeatureForAllPackage from "@/Components/Pages/FeatureCard/FCFeatureForAllPackage";
import ManagedVpsHostingArticle from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingArticle";
import ManagedVpsHostingBanner from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingBanner";
import ManagedVpsHostingCompare from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingCompare";
import ManagedVpsHostingFaq from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingFaq";
import ManagedVpsHostingMoreBenefits from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingMoreBenefits";
import ManagedVpsHostingPricing from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingPricing";
import ManagedVpsHostingReadyApps from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingReadyApps";
import Head from "next/head";
import React from "react";

const VpsLight = () => {
  return (
    <>
      <Head>
        <title>Pre-Managed VPS Hosting Light | SiteRacks</title>
        <meta name="description" content="SiteRacks" />
      </Head>
      <main>
        <section className="bg-surface">
          <ManagedVpsHostingBanner />{" "}
        </section>
        <section id="orderNow" className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <ManagedVpsHostingPricing />
        </section>
        <ManagedVpsHostingCompare />
        <ManagedVpsHostingReadyApps />
        <ManagedVpsHostingArticle />
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <ManagedVpsHostingMoreBenefits />
        </section>       

        <MoneyBackGuarantee />
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">{/* <ManagedVpsHostingManagedVpsTools /> */}</section>
        <LiveChat />

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <FCFeatureForAllPackage />
        </section>

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]"><ManagedVpsHostingFaq /> 
        </section>
      </main>
    </>
  );
};

export default VpsLight;
