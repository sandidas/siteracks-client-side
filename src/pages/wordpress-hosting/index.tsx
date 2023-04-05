import MoneyBackGuarantee from "@/Components/Home/MoneyBackGuarantee";
import LiveChat from "@/Components/LiveChat/LiveChat";
import WordPressHostingArticle from "@/Components/Pages/WordPressHosting/WordPressHostingArticle";
import WordPressHostingBanner from "@/Components/Pages/WordPressHosting/WordPressHostingBanner";
import WordPressHostingFaq from "@/Components/Pages/WordPressHosting/WordPressHostingFaq";
import WordPressHostingMoreBenefits from "@/Components/Pages/WordPressHosting/WordPressHostingMoreBenefits";
import WordPressHostingPricing from "@/Components/Pages/WordPressHosting/WordPressHostingPricing";

import Head from "next/head";
import React from "react";
import WordPressBusinessTools from "@/Components/Pages/WordPressHosting/WordPressBusinessTools";
import FCFeatureForAllPackage from "@/Components/Pages/FeatureCard/FCFeatureForAllPackage";
import useDynamicHead from "@/Components/Hooks/useDynamicHead";
import { useProducts } from "@/Context/ReactQueryProvider";


const WordPressHosting = () => {
  const { products, isLoading, isError } = useProducts();


  return (
    <>
      {useDynamicHead({ slug: "wordPressHosting" })}
      <main>
        <section className="bg-surface">
          <WordPressHostingBanner products={products} isLoading={isLoading} isError={isError} />
        </section>
        <section id="orderNow" className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WordPressHostingPricing products={products} isLoading={isLoading} isError={isError} />
        </section>
    
        <WordPressHostingArticle />

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WordPressHostingMoreBenefits />
        </section>
        <MoneyBackGuarantee />
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WordPressBusinessTools />
        </section>
        <LiveChat />


        <section className="py-[10vh] bg-surface dark:bg-black">
          <FCFeatureForAllPackage />
        </section>

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WordPressHostingFaq />
        </section>
      </main>
    </>
  );
};

export default WordPressHosting;
