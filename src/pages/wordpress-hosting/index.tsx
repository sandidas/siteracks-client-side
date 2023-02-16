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
          <WordPressHostingMoreBenefits />
        </section>
        <MoneyBackGuarantee />
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WordPressBusinessTools />
        </section>
        <LiveChat />
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WordPressHostingFaq />
        </section>
      </main>
    </>
  );
};

export default WordPressHosting;
