import MoneyBackGuarantee from "@/Components/Home/MoneyBackGuarantee";
import LiveChat from "@/Components/LiveChat/LiveChat";
import WordPressHostingArticle from "@/Components/Pages/WordPressHosting/WordPressHostingArticle";
import WordPressHostingBanner from "@/Components/Pages/WordPressHosting/WordPressHostingBanner";
import WordPressHostingFaq from "@/Components/Pages/WordPressHosting/WordPressHostingFaq";
import WordPressHostingMoreBenefits from "@/Components/Pages/WordPressHosting/WordPressHostingMoreBenefits";
import WordPressHostingPricing from "@/Components/Pages/WordPressHosting/WordPressHostingPricing";
import WordPressBusinessTools from "@/Components/Pages/WordPressHosting/WordPressBusinessTools";
import FCFeatureForAllPackage from "@/Components/Pages/FeatureCard/FCFeatureForAllPackage";
import { useProducts } from "@/Context/ReactQueryProvider";
import { getMetaData } from "@/Helpers/AxiosMetaData";
import { GetStaticPropsContext } from "next";
import MetaDataComponent from "@/Components/Meta/MetaDataComponent";

import React, { FC } from "react";
interface IProps {
  metaData: IHeadData;
}

const WordPressHosting: FC<IProps> = ({ metaData }) => {
  const { products, isLoading, isError } = useProducts();

  return (
    <>
      <MetaDataComponent metaData={metaData} />
      <main>
        <section className="bg-surface">
          <WordPressHostingBanner products={products} isLoading={isLoading} isError={isError} />
        </section>
        <section id="orderNow" className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WordPressHostingPricing products={products} isLoading={isLoading} isError={isError} />
        </section>

        <WordPressHostingArticle />

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WordPressHostingMoreBenefits />
        </section>
        <MoneyBackGuarantee />
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

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = "wordpressHosting"; // CHANGE THIS SLUG
  const metaData = await getMetaData(slug);
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
      revalidate: 86400, // 3600 = 1 hour
    };
  }
  return {
    props: {
      metaData,
    },
    revalidate: 86400, // 3600 = 1 hour
  };
}

export default WordPressHosting;
