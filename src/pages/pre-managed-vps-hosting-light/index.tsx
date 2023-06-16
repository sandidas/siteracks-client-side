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


import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import { GetStaticPropsContext } from "next";
import React, { FC, useState } from "react";
interface IProps {
  response: {
    metaData: IHeadData;
    data: IProduct;
  };
  isError: boolean;
}

const VpsLight: FC<IProps> = ({ response, isError }) => {
  const metaData = response?.metaData;
  const product = response?.data;
  const [isLoading, setIsLoading] = useState<boolean>(!product ? true : false);

  return (
    <>
      {metaData && <MetaDataComponent metaData={metaData} />}
      <main>
        <section className="bg-surface">
          <ManagedVpsHostingBanner product={product} isLoading={isLoading} isError={isError} />
        </section>
        <section id="orderNow" className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <ManagedVpsHostingPricing product={product} isLoading={isLoading} isError={isError} />
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

  const nameSlug = "managedVpsHosting";
  const seoPageSlug = "preManagedVpsHostingLight";

  try {
    const response = await UseAxiosAdmin({
      axiosInstance: axios,
      method: "get",
      url: `/api/pages/package?nameSlug=${nameSlug}&seoPageSlug=${seoPageSlug}`,
      
    });

    if (response?.data) {
      return {
        props: {
          response,
        },
        revalidate: 86400, // 3600 = 1 hour
      };
    }
    return { props: { isError: true } };
  } catch (error) {
    // console.error(error);
    return { props: { isError: true } };
  }
}

// export async function getStaticProps(context: GetStaticPropsContext) {
//   const slug = "pre-managed-vps-hosting-light"; // CHANGE THIS SLUG
//   const metaData = await getMetaData(slug);
//   if (!metaData) {
//     // Return a default value if metaData is undefined
//     return {
//       props: {
//         metaData: {
//           // title: "Default Title",
//           // description: "Default description",
//           // // ...other default values
//         },
//       },
//       revalidate: 86400, // 3600 = 1 hour
//     };
//   }
//   return {
//     props: {
//       metaData,
//     },
//     revalidate: 86400, // 3600 = 1 hour
//   };
// }
