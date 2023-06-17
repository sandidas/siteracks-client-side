import MoneyBackGuarantee from "@/Components/Home/MoneyBackGuarantee";
import LiveChat from "@/Components/LiveChat/LiveChat";
import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import WebHostingArticle from "@/Components/Pages/WebHosting/WebHostingArticle";
import WebHostingBanner from "@/Components/Pages/WebHosting/WebHostingBanner";
import WebHostingEssentials from "@/Components/Pages/WebHosting/WebHostingEssentials";
import WebHostingFaq from "@/Components/Pages/WebHosting/WebHostingFaq";
import WebHostingPremiumAdvantage from "@/Components/Pages/WebHosting/WebHostingPremiumAdvantage";
import WebHostingPricing from "@/Components/Pages/WebHosting/WebHostingPricing";
import generateToken from "@/Helpers/generateToken";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import React, { FC, useState, useEffect } from "react";


interface IProps {
  response: {
    metaData: IHeadData;
    data: IProduct;
    
  };
  fetchData: any;
  isError: boolean;
}

export const WebHosting: FC<IProps> = ({ response, fetchData, isError }) => {
  console.log("fetchData", fetchData);
  useEffect(() => {
    const nameSlug = "sharedWebHosting";
    const seoPageSlug = "webHosting";

    const fetchData = async () => {
      try {
        const response = await UseAxiosAdmin({
          axiosInstance: axios,
          method: "get",
          url: `/api/pages/package?nameSlug=${nameSlug}&seoPageSlug=${seoPageSlug}`,
        });
        // console.log("Response", response);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  const metaData = response?.metaData;
  const product = response?.data;
  const [isLoading, setIsLoading] = useState<boolean>(!product ? true : false);
  // console.log("metaData", metaData);
  // console.log("product", product);

  // const { products, isLoading, isError } = useProducts();
  return (
    <>
      {/* {useDynamicHead({ slug: "webHosting" })} */}

      {metaData && <MetaDataComponent metaData={metaData} />}

      <main>
        <section className="bg-surface">
          <WebHostingBanner product={product} isLoading={isLoading} />
        </section>
        <section id="orderNow" className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WebHostingPricing product={product} isLoading={isLoading} isError={isError} />
        </section>
        <WebHostingArticle />
        <LiveChat />
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WebHostingEssentials />
        </section>
        <MoneyBackGuarantee />
        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WebHostingPremiumAdvantage />
        </section>

        <section className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
          <WebHostingFaq />
        </section>
      </main>
    </>
  );
};

export default WebHosting;

const getApiData = async () => {
  const nameSlug = "sharedWebHosting";
  const seoPageSlug = "webHosting";

  const response = await UseAxiosAdmin({
    axiosInstance: axios,
    method: "get",
    url: `/api/pages/package?nameSlug=${nameSlug}&seoPageSlug=${seoPageSlug}`,
  });

  return response;
};


export async function getServerSideProps() {
  try {


    

    const response = await getApiData();
    
    const nameSlug = "sharedWebHosting";
    const seoPageSlug = "webHosting";
    // const data = await axios.get(`https://siteracks.com/api/pages/package?nameSlug=managedVpsHosting&seoPageSlug=preManagedVpsHostingLight`)

    const res = await fetch("https://siteracks.com/api/pages/package?nameSlug=managedVpsHosting&seoPageSlug=preManagedVpsHostingLight")
    const fetchData = await res.json();

// 

 


    if (response) {
      return {
        props: {
          response, fetchData
        },
      };
    }
    return { props: { isError: true } };
  } catch (error) {
    // console.error(error);
    return { props: { isError: true } };
  }
}

// /**
//  * OLD VERSION OF REQUEST
//  *
//  export async function getStaticProps(context: GetStaticPropsContext) {
//   const slug = "web-hosting";
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
//
//     };
//   }

//   return {
//     props: {
//       metaData,
//     },
//
//   };
// }
//  *
//  *
//  *
//  */
