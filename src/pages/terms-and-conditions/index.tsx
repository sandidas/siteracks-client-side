import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import Head from "next/head";
import React from "react";

const TOC = () => {
  return (
    <>
      <Head>
        <title>About us | SiteRacks</title>
        <meta name="description" content="SiteRacks" />
      </Head>
      <main>
      <section className="bg-surface pb-[8vh] md:pt-[12vh]">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
             <SectionTitle title="SiteRacks LLC TERMS AND CONDITIONS" />
          </div>
        </section>
      </main>
    </>
  );
};

export default TOC;
