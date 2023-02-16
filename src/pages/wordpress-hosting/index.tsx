import LiveChat from "@/Components/LiveChat/LiveChat";
import WordPressHostingArticle from "@/Components/Pages/WordPressHosting/WordPressHostingArticle";
import WordPressHostingBanner from "@/Components/Pages/WordPressHosting/WordPressHostingBanner";
import WordPressHostingDedicatedSupport from "@/Components/Pages/WordPressHosting/WordPressHostingDedicatedSupport";
import WordPressHostingFaq from "@/Components/Pages/WordPressHosting/WordPressHostingFaq";
import WordPressHostingMoreBenefits from "@/Components/Pages/WordPressHosting/WordPressHostingMoreBenefits";
import WordPressHostingPricing from "@/Components/Pages/WordPressHosting/WordPressHostingPricing";
import WordPressHostingWhySR from "@/Components/Pages/WordPressHosting/WordPressHostingWhySR";
 

import Head from "next/head";
import React from "react";

const WordPressHosting = () => {
  return (
    <>
      <Head>
        <title>WordPress Hosting | SiteRacks</title>
        <meta name="description" content="SiteRacks" />
      </Head>
      <main>
        <section className="bg-surface">
          <WordPressHostingBanner />
        </section>
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WordPressHostingPricing />
        </section>
        <WordPressHostingArticle />
    
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WordPressHostingWhySR />
        </section>

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WordPressHostingMoreBenefits />
        </section>

        <WordPressHostingDedicatedSupport />


        <LiveChat />
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WordPressHostingFaq />
        </section>
      </main>
    </>
  );
};

export default WordPressHosting;
