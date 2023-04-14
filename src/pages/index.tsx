import Head from "next/head";
import { Inter } from "@next/font/google";
import HomeBanner from "@/Components/Home/HomeBanner";
import WebsiteUpSection from "@/Components/Home/WebsiteUpSection";
import SiteRacksParkSection from "@/Components/Home/SiteRacksParkSection";
import HomeReview from "@/Components/Home/HomeReview";
import HomeFaq from "@/Components/Home/HomeFaq";
import HireAnExpert from "@/Components/Home/HireAnExpert";
import LiveChat from "@/Components/LiveChat/LiveChat";
import MoneyBackGuarantee from "@/Components/Home/MoneyBackGuarantee";
import HomeArticle from "@/Components/Home/HomeArticle";
import useDynamicHead from "@/Components/Hooks/useDynamicHead";
import { useProducts } from "@/Context/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export function Home({ menuItems }: any) {
  const { products, isLoading, isError } = useProducts();



  return (
    <>
      {useDynamicHead({ slug: "home" })}
      <main>

        {/* {{backgroundImage:`url('../../public/images/Sandipan_das.jgeg')`, backgroundSize:'cover', backgroundPosition:'center center'}} */}
        {/* // it's using on css. and css by defult catch public folder path. */}
        <div style={{ backgroundImage: `url('/images/homeBannerBgSurface.svg')`, backgroundSize: "contain", backgroundPosition: "top center" }}>
          <HomeBanner products={products} isLoading={isLoading} isError={isError} />
        </div>

        <div className="max-w-screen-2xl mx-auto px-3 md:px-5" id="orderNow">
          {/* <HomeProducts /> */}
          {/* <HomeCard /> */}
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

export default Home;

// export async function getServerSideProps(context:GetServerSidePropsContext) {
//   // const { slug } = context.params;
//   const slug = "home";
//   const isSEO = usePageMetadata(slug);

//   return {
//     props: {
//       isSEO,
//     },
//   };
// }
