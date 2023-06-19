import { Inter } from "@next/font/google";
import dynamic from "next/dynamic";
import React, { FC, useState } from "react";
import HomeBanner from "@/Components/Home/HomeBanner";
import WebsiteUpSection from "@/Components/Home/WebsiteUpSection";
import SiteRacksParkSection from "@/Components/Home/SiteRacksParkSection";
import HomeFaq from "@/Components/Home/HomeFaq";

const LiveChat = dynamic(() => import("@/Components/LiveChat/LiveChat"));
const MoneyBackGuarantee = dynamic(() => import("@/Components/Home/MoneyBackGuarantee"));
const HireAnExpert = dynamic(() => import("@/Components/Home/HireAnExpert"));
const HomeReview = dynamic(() => import("@/Components/Home/HomeReview"));
// import HomeReview from "@/Components/Home/HomeReview";
// import MoneyBackGuarantee from "@/Components/Home/MoneyBackGuarantee";
// import HireAnExpert from "@/Components/Home/HireAnExpert";
// import HomeReview from "@/Components/Home/HomeReview";
// import LiveChat from "@/Components/LiveChat/LiveChat";
import HomeArticle from "@/Components/Home/HomeArticle";
import { GetServerSidePropsContext } from "next";
import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import HomeProducts from "@/Components/Pages/Home/HomeProducts";
import axios from "axios";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import jwt from "jsonwebtoken";
// import GetSrData from "@/models/getData/GetSrData";

const inter = Inter({ subsets: ["latin"] });
interface IProps {
  response: {
    metaData: IHeadData;
    data: IProduct[];
  };
  error: any;
}

export const Home: FC<IProps> = ({ response, error }) => {
  // const { metaData, data: products } = response;
  // console.log("response", response);
  const metaData = response?.metaData;
  const products = response?.data;

  const loadingStatus = Array.isArray(products) ? (products.length === 0 ? true : false) : true;
  const [isLoading, setIsLoading] = useState(loadingStatus);

  return (
    <>
      {metaData && <MetaDataComponent metaData={metaData} />}
      <main>
        {/* {{backgroundImage:`url('../../public/images/Sandipan_das.jgeg')`, backgroundSize:'cover', backgroundPosition:'center center'}} */}
        {/* // it's using on css. and css by defult catch public folder path. */}
        <section style={{ backgroundImage: `url('/images/homeBannerBgSurface.svg')`, backgroundSize: "contain", backgroundPosition: "top center" }}>
          <HomeBanner products={products} isLoading={isLoading} />
        </section>

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5" id="orderNow">
          <HomeProducts products={products} isLoading={isLoading} />
          {/* <ArticleSection /> */}
          <HomeArticle />
        </section>
        {/* <FreeMigration /> */}

        <section className="bg-surface">
          <div className="py-[10vh] mx-auto px-5 max-w-screen-2xl">
            <MoneyBackGuarantee />
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WebsiteUpSection />
        </section>

        <article className="bg-surface">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
            <HireAnExpert />
          </div>
        </article>

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <SiteRacksParkSection />
        </section>

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <HomeReview />
        </section>


        <LiveChat />


        
        <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
          <HomeFaq />
        </div>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { res } = context;
  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
  // let error;
  // const response = await GetSrData();
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);
  const nameSlug = "resellerHosting";
  const seoPageSlug = "resellerHosting";

  try {
    // const serializedMetaData = JSON.stringify(response.metaData);

    const response = await UseAxiosAdmin({
      axiosInstance: axios,
      method: "get",
      url: `/api/pages/sr`,
      header: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    // console.log("response", response);

    if (response?.data) {
      return {
        props: {
          response: {
            data: response?.data,
            //@ts-ignore
            metaData: response?.metaData,
          },
        },
      };
    }

    return { props: { error: true } };
  } catch (error) {
    // console.error(error);
    error = error ? error : "Failed to load data";
    return { props: { error: error } };
  }
};
