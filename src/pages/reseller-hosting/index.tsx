import LiveChat from "@/Components/LiveChat/LiveChat";
import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import FCFeatureForAllPackage from "@/Components/Pages/FeatureCard/FCFeatureForAllPackage";
import ResellerHostingArticle from "@/Components/Pages/ResellerHosting/ResellerHostingArticle";
import ResellerHostingBanner from "@/Components/Pages/ResellerHosting/ResellerHostingBanner";
import ResellerHostingFaq from "@/Components/Pages/ResellerHosting/ResellerHostingFaq";
import ResellerHostingPricing from "@/Components/Pages/ResellerHosting/ResellerHostingPricing";
import ResellerHostingWhmcs from "@/Components/Pages/ResellerHosting/ResellerHostingWhmcs";
import { useProducts } from "@/Context/ReactQueryProvider";
import { getMetaData } from "@/Helpers/AxiosMetaData";
import { GetStaticPropsContext } from "next";
import React, { FC } from "react";
interface IProps {
  metaData: IHeadData;
}

const ResellerHosting: FC<IProps> = ({ metaData }) => {
  const { products, isLoading, isError } = useProducts();
  return (
    <>
      <MetaDataComponent metaData={metaData} />
      <main>
        <section className="bg-surface bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10">
          <ResellerHostingBanner products={products} isLoading={isLoading} isError={isError} />
        </section>
        <section id="orderNow" className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <ResellerHostingPricing products={products} isLoading={isLoading} isError={isError} />
        </section>
        <section className="bg-surface bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10">
          <ResellerHostingWhmcs />
        </section>
        <section className="py-[10vh]">
          <ResellerHostingArticle />
        </section>
        <section className="py-[10vh] bg-surface">
          <FCFeatureForAllPackage />
        </section>
        <LiveChat />
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <ResellerHostingFaq />
        </section>
      </main>
    </>
  );
};

export default ResellerHosting;

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = "reseller-hosting"; // CHANGE THIS SLUG
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
