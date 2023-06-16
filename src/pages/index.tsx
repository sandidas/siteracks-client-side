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
import React, { FC, useState } from "react";
import { GetServerSidePropsContext } from "next";
import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import HomeProducts from "@/Components/Pages/Home/HomeProducts";
import axios from "axios";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import jwt from "jsonwebtoken";
import GetSrData from "@/models/getData/GetSrData";

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
console.log("response", response);
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
        <div style={{ backgroundImage: `url('/images/homeBannerBgSurface.svg')`, backgroundSize: "contain", backgroundPosition: "top center" }}>
          <HomeBanner products={products} isLoading={isLoading} />
        </div>

        <div className="max-w-screen-2xl mx-auto px-3 md:px-5" id="orderNow">
          <HomeProducts products={products} isLoading={isLoading} />
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
};

export default Home;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  let error;
  const response = await GetSrData();

  try {
     
    const serializedMetaData = JSON.stringify(response.metaData);

    return {
      props: {
        response: {
          data: response?.data,
          metaData: serializedMetaData,
        },
      },
    };
  } catch (error) {
    // console.error(error);
    error = error ? error : "Failed to load data";
    return { props: { error: error } };
  }
};

