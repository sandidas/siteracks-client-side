import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import { GetStaticProps } from "next";
import BrandAssetsBanner from "@/Components/Pages/BrandAssets/BrandAssetsBanner";

import dynamic from "next/dynamic";
const BehindOurLogo = dynamic(() => import("@/Components/Pages/AboutUs/BehindOurLogo"));
const BrandAssetsColor = dynamic(() => import("@/Components/Pages/BrandAssets/BrandAssetsColor"));
const BrandAssetsDoDont = dynamic(() => import("@/Components/Pages/BrandAssets/BrandAssetsDoDont"));
const BrandAssetsGuideLine = dynamic(() => import("@/Components/Pages/BrandAssets/BrandAssetsGuideLine"));
const BrandAssetsLogo = dynamic(() => import("@/Components/Pages/BrandAssets/BrandAssetsLogo"));

import React, { FC } from "react";
import jwt from "jsonwebtoken";
interface IProps {
  metaData: IHeadData;
}

const BrandAssets: FC<IProps> = ({ metaData }) => {
  return (
    <>
      {metaData && <MetaDataComponent metaData={metaData} />}
      <main>
        <BrandAssetsBanner />

        <section className="bg-surface bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 py-[10vh]">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <BrandAssetsDoDont />
          </div>
        </section>

        <BehindOurLogo />

        <section className="py-[10vh] bg-surface">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <BrandAssetsLogo />
          </div>
        </section>

        <section className="py-[10vh]">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <BrandAssetsColor />
          </div>
        </section>

        <section className="bg-surface bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 py-[10vh]">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <BrandAssetsGuideLine />
          </div>
        </section>
      </main>
    </>
  );
};

export default BrandAssets;

export const getStaticProps: GetStaticProps = async () => {
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);

  try {
    const seoPageSlug = "brandAssets";

    const response = await UseAxiosAdmin({
      axiosInstance: axios,
      method: "get",
      url: `/api/pages/seo?seoPageSlug=${seoPageSlug}`,
      header: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    // console.log("metaData", response);
    if (response?.data) {
      const metaData = response?.data;
      return {
        props: {
          metaData,
        },
      };
    }
    return { props: { isError: true } };
  } catch (error) {
    // console.error(error);
    return { props: { isError: true } };
  }
};
