import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import AskMeContactPage from "@/Components/Pages/Contact/AskMeContactPage";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import { GetStaticProps } from "next";
import React, { FC } from "react";
import jwt from "jsonwebtoken";

import dynamic from "next/dynamic";
const ContactBanner = dynamic(() => import("@/Components/Pages/Contact/ContactBanner"));
const ExistingClientLogin = dynamic(() => import("@/Components/Pages/Contact/ExistingClientLogin"));
const LiveChat = dynamic(() => import("@/Components/LiveChat/LiveChat"));

interface IProps {
  metaData?: IHeadData;
}

const ContactPage: FC<IProps> = ({ metaData }) => {
  return (
    <>
      {metaData && <MetaDataComponent metaData={metaData} />}
      <main>
        <ContactBanner />
        <ExistingClientLogin />
        <LiveChat />
        <AskMeContactPage />
      </main>
    </>
  );
};
export default ContactPage;

export const getStaticProps: GetStaticProps = async () => {
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);

  try {
    const seoPageSlug = "contact";

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
