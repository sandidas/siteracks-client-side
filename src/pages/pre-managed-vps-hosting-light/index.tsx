import MoneyBackGuarantee from "@/Components/Home/MoneyBackGuarantee";
import LiveChat from "@/Components/LiveChat/LiveChat";
import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import FCFeatureForAllPackage from "@/Components/Pages/FeatureCard/FCFeatureForAllPackage";
import ManagedVpsHostingArticle from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingArticle";
import ManagedVpsHostingBanner from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingBanner";
import ManagedVpsHostingCompare from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingCompare";
import ManagedVpsHostingFaq from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingFaq";
import ManagedVpsHostingMoreBenefits from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingMoreBenefits";
import ManagedVpsHostingPricing from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingPricing";
import ManagedVpsHostingReadyApps from "@/Components/Pages/ManagedVpsHosting/ManagedVpsHostingReadyApps";
import { useProducts } from "@/Context/ReactQueryProvider";
import { getMetaData } from "@/Helpers/AxiosMetaData";
import { GetStaticPropsContext } from "next";
import React, { FC } from "react";
interface IProps {
  metaData: IHeadData;
}

const VpsLight: FC<IProps> = ({ metaData }) => {
  const { products, isLoading, isError } = useProducts();
  return (
    <>
      <MetaDataComponent metaData={metaData} />
      <main>
        <section className="bg-surface">
          <ManagedVpsHostingBanner products={products} isLoading={isLoading} isError={isError} />
        </section>
        <section id="orderNow" className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <ManagedVpsHostingPricing products={products} isLoading={isLoading} isError={isError} />
        </section>
        <ManagedVpsHostingCompare />
        <ManagedVpsHostingReadyApps />
        <ManagedVpsHostingArticle />
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <ManagedVpsHostingMoreBenefits />
        </section>

        <MoneyBackGuarantee />
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">{/* <ManagedVpsHostingManagedVpsTools /> */}</section>
        <LiveChat />

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <FCFeatureForAllPackage />
        </section>

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <ManagedVpsHostingFaq />
        </section>
      </main>
    </>
  );
};

export default VpsLight;

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = "preManagedVpsHostingLight"; // CHANGE THIS SLUG
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
