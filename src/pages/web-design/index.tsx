import Head from "next/head";
import HomeCard from "@/Components/Home/HomeCard";
import HomeFaq from "@/Components/Home/HomeFaq";
import HomeReview from "@/Components/Home/HomeReview";
import SiteRacksParkSection from "@/Components/Home/SiteRacksParkSection";
import WebsiteUpSection from "@/Components/Home/WebsiteUpSection";
import React from "react";

const Home = () => {
  return (
    <>
      <Head>
        <title>Web Design | SiteRacks</title>
        <meta name="description" content="SiteRacks" />
      </Head>
      <div className="mx-auto max-w-screen-2xl px-5">
        <HomeCard />
        <WebsiteUpSection />
        <SiteRacksParkSection />
        <HomeReview />
        <HomeFaq />
      </div>
    </>
  );
};

export default Home;

// Home.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page} </Layout>;
// };
