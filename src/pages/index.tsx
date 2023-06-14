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
import React, { FC, useEffect, useState } from "react";
import { GetServerSidePropsContext } from "next";
import MetaDataComponent from "@/Components/Meta/MetaDataComponent";

import HomeProducts from "@/Components/Pages/Home/HomeProducts";
import getPackages from "@/lib/mongo/getPackages";

import Package from "@/models/Package";
import axios from "axios";
import getMetaDataByPage from "@/lib/mongo/getMetaDataByPage";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";

const inter = Inter({ subsets: ["latin"] });
interface IProps {
  productAndHomeSeo: {
    metaData: IHeadData;
    products: IProduct[];
  };
  error: any;
}

export const Home: FC<IProps> = ({ productAndHomeSeo, error }) => {
  const { metaData, products } = productAndHomeSeo;
  const loadingStatus = products && products.length > 0;
  const [isLoading, setIsLoading] = useState(loadingStatus);

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/api/packages");
  //       console.log("response", response);
  //       setProducts(response?.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      {/* <MetaDataComponent metaData={metaData} /> */}
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
  try {
    const response = await UseAxiosAdmin({
      axiosInstance: axios,
      method: "get",
      url: `/api/sr`,
      // requestConfig: {},
    });

    if (response) {
      const productAndHomeSeo = response; // seo data found
      return {
        props: {
          productAndHomeSeo,
        },
      };
    }

    error = error ? error : "Failed to load data";
    return { props: { error: error } };
  } catch (error) {
    // console.error(error);
    error = error ? error : "Failed to load data";
    return { props: { error: error } };
  }
};
