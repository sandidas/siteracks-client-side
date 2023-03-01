import LiveChat from "@/Components/LiveChat/LiveChat";
import CareerBanner from "@/Components/Pages/Careers/CareerBanner";
import CareerOpenPositions from "@/Components/Pages/Careers/CareerOpenPositions";
import CareerPerksAndBenefits from "@/Components/Pages/Careers/CareerPerksAndBenefits";
import Head from "next/head";
import React from "react";

const Careers = () => {
  return (
    <>
      <Head>
        <title>About us | SiteRacks</title>
        <meta name="description" content="SiteRacks" />
      </Head>
      <main>
        <section className="bg-surface pb-[8vh] md:pt-[12vh]">
          <CareerBanner />
        </section>

        <section className="py-[8vh]">
          <CareerPerksAndBenefits />
        </section>

        <section className="py-[8vh] bg-surface">
          <CareerOpenPositions />
        </section>

        <LiveChat />
      </main>
    </>
  );
};

export default Careers;
