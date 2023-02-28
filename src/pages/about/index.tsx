import AboutBanner from "@/Components/Pages/AboutUs/AboutBanner";
import BehindOurLogo from "@/Components/Pages/AboutUs/BehindOurLogo";
import BoostProductivity from "@/Components/Pages/AboutUs/BoostProductivity";
import OurCoreValues from "@/Components/Pages/AboutUs/OurCoreValues";
import WhoWeAre from "@/Components/Pages/AboutUs/WhoWeAre";
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
      </main>
    </>
  );
};

export default About;
