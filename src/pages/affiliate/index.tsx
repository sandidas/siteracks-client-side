import useDynamicHead from "@/Components/Hooks/useDynamicHead";
import AffiliateBanner from "@/Components/Pages/Affiliate/AffiliateBanner";
import AffiliateFaq from "@/Components/Pages/Affiliate/AffiliateFaq";
import AffiliateHowItWorks from "@/Components/Pages/Affiliate/AffiliateHowItWorks";
import AffiliateLucrative from "@/Components/Pages/Affiliate/AffiliateLucrative";
import AffiliateNothingToLose from "@/Components/Pages/Affiliate/AffiliateNothingToLose";
import AffiliateWhy from "@/Components/Pages/Affiliate/AffiliateWhy";
import Head from "next/head";
import React from "react";

const Affiliate = () => {
  return (
    <>
      {useDynamicHead({ slug: "Affiliate" })}
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



        <section className="py-[8vh]">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <AffiliateHowItWorks />
          </div>
        </section>



        <section className="py-[8vh] bg-surface">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <AffiliateLucrative />
          </div>
        </section>




        <section className="py-[8vh]">
          <div className="max-w-5xl mx-auto px-3 md:px-5">
            <AffiliateFaq />
          </div>
        </section>



   
      </main>
    </>
  );
};

export default Affiliate;
