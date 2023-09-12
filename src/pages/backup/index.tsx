import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import BannerBackup from "@/Components/Pages/Backup/BannerBackup";
import FaqBackup from "@/Components/Pages/Backup/FaqBackup";
import FeaturesOfCodeGuardBackup from "@/Components/Pages/Backup/FeaturesOfCodeGuardBackup";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import {  GetStaticProps } from "next";
import React, { FC } from "react";
import jwt from "jsonwebtoken";
interface IProps {
  metaData: IHeadData;
}
const BackupPage: FC<IProps> = ({ metaData }) => {
  return (
    <>
      {metaData && <MetaDataComponent metaData={metaData} />}
      <main>
        <BannerBackup />
        <FeaturesOfCodeGuardBackup />
        <FaqBackup />
      </main>
    </>
  );
};

export default BackupPage;

export const getStaticProps: GetStaticProps = async () => {
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);

  try {
    const seoPageSlug = "backup";

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
