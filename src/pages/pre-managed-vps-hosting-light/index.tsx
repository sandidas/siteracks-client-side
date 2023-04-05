import MoneyBackGuarantee from "@/Components/Home/MoneyBackGuarantee";
import useDynamicHead from "@/Components/Hooks/useDynamicHead";
import LiveChat from "@/Components/LiveChat/LiveChat";
import FCFeatureForAllPackage from "@/Components/Pages/FeatureCard/FCFeatureForAllPackage";
import ManagedVpsHostingArticle from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingArticle";
import ManagedVpsHostingBanner from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingBanner";
import ManagedVpsHostingCompare from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingCompare";
import ManagedVpsHostingFaq from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingFaq";
import ManagedVpsHostingMoreBenefits from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingMoreBenefits";
import ManagedVpsHostingPricing from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingPricing";
import ManagedVpsHostingReadyApps from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingReadyApps";
import { useProducts } from "@/Context/ReactQueryProvider";
import Head from "next/head";
import React from "react";

const VpsLight = () => {
  const { products, isLoading, isError } = useProducts();
  return (
    <>
      {useDynamicHead({ slug: "managedVPS" })}
      <main>
        <section className="bg-surface">
          <ManagedVpsHostingBanner products={products} isLoading={isLoading} isError={isError} />
        </section>
        <section id="orderNow" className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <ManagedVpsHostingPricing products={products} isLoading={isLoading} isError={isError} />
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

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <ManagedVpsHostingFaq />
        </section>
      </main>
    </>
  );
};

export default VpsLight;
