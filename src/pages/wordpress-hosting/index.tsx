import { GetServerSidePropsContext } from "next";
import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import React, { FC, useState } from "react";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import jwt from "jsonwebtoken";
import dynamic from "next/dynamic";
import WordPressHostingBanner from "@/Components/Pages/WordPressHosting/WordPressHostingBanner";

const LiveChat = dynamic(() => import("@/Components/LiveChat/LiveChat"));
const MoneyBackGuarantee = dynamic(() => import("@/Components/Home/MoneyBackGuarantee"));
const WordPressHostingArticle = dynamic(() => import("@/Components/Pages/WordPressHosting/WordPressHostingArticle"));
const WordPressHostingFaq = dynamic(() => import("@/Components/Pages/WordPressHosting/WordPressHostingFaq"));
const WordPressHostingMoreBenefits = dynamic(() => import("@/Components/Pages/WordPressHosting/WordPressHostingMoreBenefits"));
const WordPressHostingPricing = dynamic(() => import("@/Components/Pages/WordPressHosting/WordPressHostingPricing"));
const WordPressBusinessTools = dynamic(() => import("@/Components/Pages/WordPressHosting/WordPressBusinessTools"));
const FCFeatureForAllPackage = dynamic(() => import("@/Components/Pages/FeatureCard/FCFeatureForAllPackage"));



// import MoneyBackGuarantee from "@/Components/Home/MoneyBackGuarantee";
// import LiveChat from "@/Components/LiveChat/LiveChat";
// import WordPressHostingArticle from "@/Components/Pages/WordPressHosting/WordPressHostingArticle";
// import WordPressHostingFaq from "@/Components/Pages/WordPressHosting/WordPressHostingFaq";
// import WordPressHostingMoreBenefits from "@/Components/Pages/WordPressHosting/WordPressHostingMoreBenefits";
// import WordPressHostingPricing from "@/Components/Pages/WordPressHosting/WordPressHostingPricing";
// import WordPressBusinessTools from "@/Components/Pages/WordPressHosting/WordPressBusinessTools";
// import FCFeatureForAllPackage from "@/Components/Pages/FeatureCard/FCFeatureForAllPackage";

interface IProps {
  response: {
    metaData: IHeadData;
    data: IProduct;
  };
  isError?: boolean;
}

const WordPressHosting: FC<IProps> = ({ response, isError }) => {
  const metaData = response?.metaData;
  const product = response?.data;
  const [isLoading, setIsLoading] = useState<boolean>(!product ? true : false);

  return (
    <>
      {metaData && <MetaDataComponent metaData={metaData} />}
      <main>
        <section className="bg-surface">
          <WordPressHostingBanner product={product} isLoading={isLoading} isError={isError} />
        </section>
        <section id="orderNow" className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WordPressHostingPricing product={product} isLoading={isLoading} isError={isError} />
        </section>

        <WordPressHostingArticle />

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WordPressHostingMoreBenefits />
        </section>

        <section className="bg-surface">
          <div className="py-[10vh] mx-auto px-5 max-w-screen-2xl">
            <MoneyBackGuarantee />
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WordPressBusinessTools />
        </section>
        <LiveChat />

        <section className="py-[10vh] bg-surface dark:bg-black">
          <FCFeatureForAllPackage />
        </section>

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WordPressHostingFaq />
        </section>
      </main>
    </>
  );
};
export default WordPressHosting;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);

  try {
    const nameSlug = "wordPressHosting";
    const seoPageSlug = "wordpressHosting";

    const response = await UseAxiosAdmin({
      axiosInstance: axios,
      method: "get",
      url: `/api/pages/package?nameSlug=${nameSlug}&seoPageSlug=${seoPageSlug}`,
      header: {
        Authorization: `Bearer ${apiKey}`,
      },
      // requestConfig: {},
    });
    // check response
    // console.log("response: ", JSON.stringify(response));

    if (response?.data) {
      return {
        props: {
          response,
        },
      };
    }

    return { props: { isError: true } };
  } catch (error) {
    // console.error(error);
    return { props: { isError: true } };
  }
}

/*

 * OLD VERSION OF REQUEST


export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = "wordpress-hosting"; // CHANGE THIS SLUG
  // const metaData = await getMetaData(slug);
  if (!metaData) {
    // Return a default value if metaData is undefined
    return {
      props: {
        metaData: {
          // title: "Default Title",
          // description: "Default description",
          // // ...other default values
        },
      },
     
    };
  }
  return {
    props: {
      metaData,
    },
   
  };
}


*/
