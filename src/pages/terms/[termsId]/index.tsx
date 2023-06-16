import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { getMetaData } from "@/Helpers/AxiosMetaData";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import React, { FC } from "react";
import jwt from "jsonwebtoken";
interface IProps {
  response: {
    data: IPage;
    metaData: IHeadData;
  };
}

const TermsPageIndividualItem: FC<IProps> = ({ response }) => {
  // console.log("response", response);
  const { metaData, data: page } = response;

  return (
    <>
      {metaData && <MetaDataComponent metaData={metaData} />}

      <div className="max-w-screen-2xl mx-auto px-3 md:px-5 pt-[8vh] md:pt-[12vh] pb-[8vh]">
        <SectionTitle bottomSpace title={page?.pageTitle ? page?.pageTitle : ""} />

        {/* Print rich text editor data here  */}

        <div dangerouslySetInnerHTML={{ __html: page?.pageContent ?? "" }}></div>
      </div>
    </>
  );
};

export default TermsPageIndividualItem;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);
  const { termsId } = context.query;
  const seoPageSlug: string = typeof termsId === "string" ? termsId.replace(/-([a-z])/g, (match: string, letter: string) => letter.toUpperCase()) : "";

  try {
    const response = await UseAxiosAdmin({
      axiosInstance: axios,
      method: "get",
      url: `/api/pages/page?pageSlug=${termsId}&seoPageSlug=${seoPageSlug}`,
      header: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    if (response?.data) {
      return {
        props: {
          response,
        },
      };
    } else {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
