import AffiliateBanner from "@/Components/Pages/Affiliate/AffiliateBanner";
import AffiliateNothingToLose from "@/Components/Pages/Affiliate/AffiliateNothingToLose";
import AffiliateWhy from "@/Components/Pages/Affiliate/AffiliateWhy";
import Head from "next/head";
import React from "react";

const Affiliate = () => {
  return (
    <>
      <Head>
        <title>About us | SiteRacks</title>
        <meta name="description" content="SiteRacks" />
      </Head>
      <main>
        <section className="bg-surface pb-[8vh] md:pt-[12vh]">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <AffiliateBanner />
          </div>
        </section>

        <section className="py-[8vh]">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <AffiliateNothingToLose />
          </div>
        </section>


        <section className="py-[8vh] bg-surface">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <AffiliateWhy />
          </div>
        </section>



        <section className="py-[8vh]"></section>
      </main>
    </>
  );
};

export default Affiliate;
