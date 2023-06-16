import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import axios from "axios";
import { GetStaticPropsContext } from "next";
import React, { FC } from "react";
import jwt from "jsonwebtoken";
import MetaDataComponent from "@/Components/Meta/MetaDataComponent";

interface IProps {
  response: {
    data: IPage[];
    metaData: IHeadData;
  };
  error?: string;
}

const TosIndexPage: FC<IProps> = ({ response, error }) => {
  const { data: pages, metaData } = response;

  return (
    <>
      {metaData && <MetaDataComponent metaData={metaData} />}

      <div className="max-w-screen-2xl mx-auto px-3 md:px-5 pt-[8vh] md:pt-[12vh] pb-[8vh]">
        {/* left column  */}
        <div className="flex flex-col justify-center items-start space-y-8 group">
          <SectionTitle bottomSpace title="SiteRacks Terms, Policies and Notices">
            This page contains the Policies, Terms, and Notice(s) relevant to your use and purchase of any services, content, or website(s) provided by SiteRacks. These documents also reflect our legal responsibilities as a hosting provider. Click on the corresponding name to access any Policies,
            Terms, or Notice(s).
          </SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
          {pages &&
            pages.map((item: IPage, index: number) => (
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

export async function getStaticProps(context: GetStaticPropsContext) {
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);
  const seoPageSlug = "terms";
  try {
    const response = await UseAxiosAdmin({
      axiosInstance: axios,
      method: "get",
      url: `/api/pages/pages?seoPageSlug=${seoPageSlug}`,
      header: {
        Authorization: `Bearer ${apiKey}`,
      },
      // requestConfig: {},
    });

    if (response) {
      // console.log("Index Response", data);
      return {
        props: {
          response,
        },
        revalidate: 86400, // 3600 = 1 hour
      };
    } else {
      return { props: { error: true } };
    }
  } catch (error) {
    // console.error(error);

    return { props: { error: true } };
  }
}
