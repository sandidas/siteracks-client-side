import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import CareerBanner from "@/Components/Pages/Careers/CareerBanner";

import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import { GetStaticProps } from "next";
import React, { FC } from "react";
import jwt from "jsonwebtoken";

import dynamic from "next/dynamic";
const CareerOpenPositions = dynamic(() => import("@/Components/Pages/Careers/CareerOpenPositions"));
const CareerPerksAndBenefits = dynamic(() => import("@/Components/Pages/Careers/CareerPerksAndBenefits"));

interface IProps {
  metaData: IHeadData;
}

const Careers: FC<IProps> = ({ metaData }) => {
  return (
    <>
      {metaData && <MetaDataComponent metaData={metaData} />}
      <main>
        <section className="bg-surface pb-[8vh] md:pt-[12vh]">
          <CareerBanner />
        </section>

        <section className="py-[8vh]">
          <CareerPerksAndBenefits />
        </section>

        <section className="py-[8vh] bg-surface">
          <CareerOpenPositions />
        </section>
      </main>
    </>
  );
};

export default Careers;

export const getStaticProps: GetStaticProps = async () => {
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);

  try {
    const seoPageSlug = "careers";

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
