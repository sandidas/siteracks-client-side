import LiveChat from "@/Components/LiveChat/LiveChat";
import WebHostingArticle from "@/Components/Pages/WebHosting/WebHostingArticle";
import WebHostingBanner from "@/Components/Pages/WebHosting/WebHostingBanner";
import WebHostingEssentials from "@/Components/Pages/WebHosting/WebHostingEssentials";
import WebHostingFaq from "@/Components/Pages/WebHosting/WebHostingFaq";
import WebHostingPremiumAdvantage from "@/Components/Pages/WebHosting/WebHostingPremiumAdvantage";
import WebHostingPricing from "@/Components/Pages/WebHosting/WebHostingPricing";

import Head from "next/head";
import React from "react";

const WordPressHosting = () => {
  return (
    <>
      <Head>
        <title>Web Hosting | SiteRacks</title>
        <meta name="description" content="SiteRacks" />
      </Head>
      <main>
        <section className="bg-surface">
          <WebHostingBanner />
        </section>
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WebHostingPricing />
        </section>
        <WebHostingArticle />
        <LiveChat />
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WebHostingEssentials />
        </section>

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WebHostingPremiumAdvantage />
        </section>

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WebHostingFaq />
        </section>
      </main>
    </>
  );
};

export default WordPressHosting;