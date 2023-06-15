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
import { GetStaticPropsContext } from "next";
import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import HomeProducts from "@/Components/Pages/Home/HomeProducts";
import axios from "axios";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import jwt from "jsonwebtoken";

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
  const loadingStatus = Array.isArray(products) ? (products.length === 0 ? true : false) : true;
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
      <MetaDataComponent metaData={metaData} />
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

export async function getStaticProps(context: GetStaticPropsContext) {
  let error;
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);

  try {
    const response = await UseAxiosAdmin({
      axiosInstance: axios,
      method: "get",
      url: `/api/pages/sr`,
      header: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (response) {
      const productAndHomeSeo = response; // seo data found
      return {
        props: {
          productAndHomeSeo,
        },
        revalidate: 86400, // 3600 = 1 hour
      };
    }

    error = error ? error : "Failed to load data";
    return { props: { error: error } };
  } catch (error) {
    // console.error(error);
    error = error ? error : "Failed to load data";
    return { props: { error: error } };
  }
}
