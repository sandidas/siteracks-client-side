import LiveChat from "@/Components/LiveChat/LiveChat";
import AboutBanner from "@/Components/Pages/AboutUs/AboutBanner";
import BehindOurLogo from "@/Components/Pages/AboutUs/BehindOurLogo";
import BoostProductivity from "@/Components/Pages/AboutUs/BoostProductivity";
import OurCoreValues from "@/Components/Pages/AboutUs/OurCoreValues";
import WhoWeAre from "@/Components/Pages/AboutUs/WhoWeAre";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <>
      <Head>
        <title>About us | SiteRacks</title>
        <meta name="description" content="SiteRacks" />
      </Head>
      <main>
        <section className="bg-surface">
          <AboutBanner />
        </section>
        <WhoWeAre />
        <OurCoreValues />
        <BehindOurLogo />
        <BoostProductivity />
        <section className="py-[8vh] max-w-screen-2xl mx-auto">
          <SectionTitle supTitle="Your search for" title="lightning-fast hosting" subTitle="with excellent support ends here" />
        </section>
      </main>
    </>
  );
};

export default About;
