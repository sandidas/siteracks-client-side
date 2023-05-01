import TermSinglePage from "@/Components/Pages/Terms/TermSinglePage";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Button, UnstyledButton } from "@mantine/core";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import React, { FC } from "react";

interface IProps {
  data: IPage[];
  error?: string;
}

const TosIndexPage: FC<IProps> = ({ data, error }) => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-3 md:px-5 pt-[8vh] md:pt-[12vh] pb-[8vh]">
        {/* left column  */}
        <div className="flex flex-col justify-center items-start space-y-8 group">
          <SectionTitle bottomSpace title="SiteRacks Terms, Policies and Notices">
            This page contains the Policies, Terms, and Notice(s) relevant to your use and purchase of any services, content, or website(s) provided by SiteRacks. These documents also reflect our legal responsibilities as a hosting provider. Click on the corresponding name to access any Policies,
            Terms, or Notice(s).
          </SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
          {data && data.map((item: IPage, index: number) => (
            <Button size="md" className="" leftIcon={<ArrowRightIcon className="h-5 w-5 fill-primary" />} variant="default" key={index} component="a" href={`terms/${item?.pageSlug}`}>
              {item.pageTitle}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default TosIndexPage;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  // SEND COOKIES TO API SERVER
  // ===========================
  // since we are using "getServerSideProps", we need to send cookies manually to the server side. getServerSideProps runs on the server-side so it won't have access to the browser's cookies, we need to retrieve and send them explicitly.
  // to do this, 1: we have to call "context"
  // 2: we need to request cookies
  // 3: we need to send cookies by using axios headers.

  // step 1:
  const { req } = context;

  let data;
  let error;
  try {
    const response = await UseAxiosAdmin({
      axiosInstance: axios,
      method: "get",
      url: "/api/page/get-pages",
      // header: {
      //   Authorization: `Bearer ${sAccessToken}`,
      //   Cookie: allCookies,
      // },
      // requestConfig: {},
    });
    // const response = await axios.get('https://example.com/api/data');
    // console.log("response index", response);

    if (response && response?.data && response?.data?.data) {
      data = response?.data?.data;
      // console.log("Index Response", data);
      return {
        props: {
          data,
        },
      };
    } else {
      error = response?.error ? response?.error : "Failed to load data";
      return { props: { error: error } };
    }
  } catch (error) {
    // console.error(error);
    error = error ? error : "Failed to load data";
    return { props: { error: error } };
  }
};
