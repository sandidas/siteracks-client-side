import LoaderComponent from "@/Components/Loader/LoaderComponent";
import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { getMetaData } from "@/Helpers/AxiosMetaData";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import React, { FC } from "react";

interface IProps {
  ssrData: IPage;
  error?: string;
  metaData: IHeadData;
}

const TermsPageIndividualItem: FC<IProps> = ({ ssrData, error, metaData }) => {
  if (error) {
    return <LoaderComponent />;
  }
  return (
    <>
      {metaData && <MetaDataComponent metaData={metaData} />}

      <div className="max-w-screen-2xl mx-auto px-3 md:px-5 pt-[8vh] md:pt-[12vh] pb-[8vh]">
        <SectionTitle bottomSpace title={ssrData?.pageTitle ? ssrData?.pageTitle : ""} />

        {/* Print rich text editor data here  */}

        <div dangerouslySetInnerHTML={{ __html: ssrData?.pageContent ?? "" }}></div>
      </div>
    </>
  );
};

export default TermsPageIndividualItem;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  // GET PAGE ID FROM REACT QUERY
  // ================================
  const { termsId } = context.query;
  //   console.log("context.query", context.query);
  let ssrData;
  let error;
  try {
    const response = await UseAxiosAdmin({
      axiosInstance: axios,
      method: "get",
      url: `/api/page/get-page/${termsId}`,
      // requestConfig: {},
    });
    const slug = termsId as string;
    const metaData = await getMetaData(slug);
    // console.log("metaData", metaData);
    if (response && response?.data && response?.data?.data) {
      ssrData = response?.data?.data;
      // console.log("Index Response", data);
      return {
        props: {
          ssrData,
          metaData,
        },
      };
    } else {
      error = response?.error ? response?.error : "Failed to load data";

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
