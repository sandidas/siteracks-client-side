import WebHostingBanner from "@/Components/Pages/WebHosting/WebHostingBanner";
import Head from "next/head";
import React from "react";

const webHosting = () => {
  return (
    <>
      <Head>
        <title>Web Hosting | SiteRacks</title>
        <meta name="description" content="SiteRacks" />
      </Head>
      <main>
        <div className="bg-surface">
        <WebHostingBanner />
        </div>
      </main>
    </>
  );
};

export default webHosting;
