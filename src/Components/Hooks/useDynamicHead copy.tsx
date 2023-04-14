import { useEffect, useState } from "react";
import Head from "next/head";
import axios, { AxiosResponse } from "axios";

type Props = {
  slug: string;
};

type HeadData = {
  _id: string;
  siteName: string;
  pageSlug: string;
  pageTitle: string;
  metaDescription: string;
  metaKeywords: string;
  metaAuthor: string;
  metaOgDescription: string;
  metaOgImage: string;
  metaOgTitle: string;
  metaOgUrl: string;
  shareTitle: string;
  // add more properties as needed
};

const useDynamicHead = ({ slug }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [headData, setHeadData] = useState<HeadData>({
    _id: "",
    siteName: "",
    pageSlug: "",
    pageTitle: "",
    metaDescription: "",
    metaKeywords: "",
    metaAuthor: "",
    metaOgDescription: "",
    metaOgImage: "",
    metaOgTitle: "",
    metaOgUrl: "",
    shareTitle: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response: AxiosResponse<HeadData[]> = await axios.get("http://localhost:5000/api/package/getseodata");

      console.log("response", response);
      const results = await response?.data;
      const result = (await results.find((service) => service.pageSlug === slug)) || null;
      if (result) {
        setHeadData(result);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [slug]);

  return isLoading ? (
    <Head>
      <title>Loading...</title>
      <link rel="icon" href="/SiteRacksFavIcon.ico" />
    </Head>
  ) : (
    <Head>
      <title>{headData.pageTitle}</title>
      <meta name="description" content={headData.metaDescription} />
      <link rel="icon" href="/SiteRacksFavIcon.ico" />
      {/* add more meta tags as needed */}
    </Head>
  );
};

export default useDynamicHead;
