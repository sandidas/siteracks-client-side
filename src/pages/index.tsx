import Head from "next/head";
import { Inter } from "@next/font/google";
import HomeBanner from "@/Components/Home/HomeBanner";
import HomeCard from "@/Components/Home/HomeCard";
import ArticleSection from "@/Components/Home/ArticleSection";
import WebsiteUpSection from "@/Components/Home/WebsiteUpSection";
import SiteRacksParkSection from "@/Components/Home/SiteRacksParkSection";
import HomeReview from "@/Components/Home/HomeReview";
import HomeFaq from "@/Components/Home/HomeFaq";
import HireAnExpert from "@/Components/Home/HireAnExpert";
import LiveChat from "@/Components/LiveChat/LiveChat";
import FreeMigration from "@/Components/Home/FreeMigration";
import MoneyBackGuarantee from "@/Components/Home/MoneyBackGuarantee";
import HomeArticle from "@/Components/Home/HomeArticle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>SiteRacks</title>
        <meta name="description" content="SiteRacks" />
      </Head>
      <main>
        {/* {{backgroundImage:`url('../../public/images/Sandipan_das.jgeg')`, backgroundSize:'cover', backgroundPosition:'center center'}} */}
        {/* // it's using on css. and css by defult catch public folder path. */}
        <div style={{ backgroundImage: `url('/images/homeBannerBgSurface.svg')`, backgroundSize: "contain", backgroundAttachment: "fixed", backgroundPosition: "top center" }}>
          <HomeBanner />
        </div>

        <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
          <HomeCard />
          {/* <ArticleSection /> */}
          <HomeArticle />
        </div>
        {/* <FreeMigration /> */}
        <MoneyBackGuarantee />
        <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
          <WebsiteUpSection />
        </div>
        <HireAnExpert />
        <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
          <SiteRacksParkSection />
        </div>

       
        <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
          <HomeReview />
        </div>
        <LiveChat />
        <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
          <HomeFaq />
        </div>
      </main>
    </>
  );
}

// Home.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page} </Layout>;
// };
