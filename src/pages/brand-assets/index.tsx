import BehindOurLogo from "@/Components/Pages/AboutUs/BehindOurLogo";
import BrandAssetsBanner from "@/Components/Pages/BrandAssets/BrandAssetsBanner";
import BrandAssetsColor from "@/Components/Pages/BrandAssets/BrandAssetsColor";
import BrandAssetsDoDont from "@/Components/Pages/BrandAssets/BrandAssetsDoDont";
import BrandAssetsGuideLine from "@/Components/Pages/BrandAssets/BrandAssetsGuideLine";
import BrandAssetsLogo from "@/Components/Pages/BrandAssets/BrandAssetsLogo";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Brand Assets | SiteRacks</title>
        <meta name="description" content="SiteRacks" />
      </Head>
      <main>
        <BrandAssetsBanner />

        <section className="bg-surface bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 py-[10vh]">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <BrandAssetsDoDont />
          </div>
        </section>

        <BehindOurLogo />

        <section className="py-[10vh] bg-surface">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <BrandAssetsLogo />
          </div>
        </section>

        <section className="py-[10vh]">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <BrandAssetsColor />
          </div>
        </section>

        <section className="bg-surface bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 py-[10vh]">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <BrandAssetsGuideLine />
          </div>
        </section>
      </main>
    </>
  );
};

export default index;
