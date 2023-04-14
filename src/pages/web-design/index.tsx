import Head from "next/head";
import HomeFaq from "@/Components/Home/HomeFaq";
import HomeReview from "@/Components/Home/HomeReview";
import SiteRacksParkSection from "@/Components/Home/SiteRacksParkSection";
import WebsiteUpSection from "@/Components/Home/WebsiteUpSection";
import React from "react";
import useDynamicHead from "@/Components/Hooks/useDynamicHead";

const Home = () => {
  return (
    <>
      {useDynamicHead({ slug: "webDesign" })}

      <main>
        <div className="mx-auto max-w-screen-2xl px-5">

          <WebsiteUpSection />
          <SiteRacksParkSection />
          <HomeReview />
          <HomeFaq />
        </div>
      </main>
    </>
  );
};

export default Home;

// Home.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page} </Layout>;
// };
