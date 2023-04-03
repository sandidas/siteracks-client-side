import Head from "next/head";
import { Inter } from "@next/font/google";
import HomeBanner from "@/Components/Home/HomeBanner";
import HomeCard from "@/Components/Home/HomeCard";
import WebsiteUpSection from "@/Components/Home/WebsiteUpSection";
import SiteRacksParkSection from "@/Components/Home/SiteRacksParkSection";
import HomeReview from "@/Components/Home/HomeReview";
import HomeFaq from "@/Components/Home/HomeFaq";
import HireAnExpert from "@/Components/Home/HireAnExpert";
import LiveChat from "@/Components/LiveChat/LiveChat";
import MoneyBackGuarantee from "@/Components/Home/MoneyBackGuarantee";
import HomeArticle from "@/Components/Home/HomeArticle";
import { productPricingData } from "@/Components/Data/ProductPricing";
import ProductCardHome from "@/Components/Card/ProductCardHome";
import useDynamicHead from "@/Components/Hooks/useDynamicHead";
import { fetchProducts, useReactQueryContext } from "@/Context/ReactQueryProvider";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export function Home({ menuItems }: any) {
  const { queryClient } = useReactQueryContext();

  const { data: products, isLoading } = useQuery(["products"], fetchProducts, {
    initialData: queryClient.getQueryData(["products"]),
  });

  console.log("QC.Products", products);

  const services = productPricingData.filter((p, index) => p.nameSlug !== "resellerHosting");

  return (
    <>
      <Head>
        <title>SiteRacks</title>
        <meta name="description" content="SiteRacks" />
      </Head>

      {useDynamicHead({ slug: "home" })}
      <main>
   

        {/* {{backgroundImage:`url('../../public/images/Sandipan_das.jgeg')`, backgroundSize:'cover', backgroundPosition:'center center'}} */}
        {/* // it's using on css. and css by defult catch public folder path. */}
        <div style={{ backgroundImage: `url('/images/homeBannerBgSurface.svg')`, backgroundSize: "contain", backgroundPosition: "top center" }}>
          <HomeBanner />
        </div>

        <div className="max-w-screen-2xl mx-auto px-3 md:px-5" id="orderNow">
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-[10vh]">
            {
            isLoading ? <Loader /> :
            services.map((product, index) => (
              <ProductCardHome key={index} product={product} />
            ))}
          </div>
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
