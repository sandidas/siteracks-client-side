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
      try {
        const API_URL = `${process.env.API_URL}/api/package/getseodata`;
        const response = await axios.get(API_URL);
        const results = response?.data?.data;
        const result = results?.find((service: HeadData) => service.pageSlug === slug);

        if (result) {
          setHeadData(result);
        }
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [slug]);

  return isLoading ? (
    // when its loading
    <Head>
      <title>Loading...</title>
      <link rel="icon" href="/SiteRacksFavIcon.ico" />
    </Head>
  ) : headData.pageTitle ? (
    // dynamic data from database
    <Head>
      <title>{headData.pageTitle}</title>
      <meta name="description" content={headData.metaDescription} />
      <link rel="icon" href="/SiteRacksFavIcon.ico" />
      {/* add more meta tags as needed */}
    </Head>
  ) : (
    // This is common data for all pages, if data not available in database
    <Head>
      {/* ==== DEFAULT META ====  */}
      <link rel="icon" href="/SiteRacksFavIcon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="SiteRacks.com" />

      {/* ==== GOOGLE META ====  */}
      <title>SiteRacks Hosting | *</title>
      <meta
        name="description"
        content="Looking for reliable and affordable web hosting services? SiteRacks has got you covered! Our team of experts provides fast and secure hosting solutions that keep your website up and running 24/7. Choose from our range of hosting packages, including shared hosting, VPS, and dedicated servers. Get started today and experience the SiteRacks difference!"
      />
      <meta name="keywords" content="web hosting, website hosting, hosting services, shared hosting, VPS hosting, dedicated servers, reliable hosting, affordable hosting, fast hosting, secure hosting, 24/7 support, website uptime, domain names, cPanel, SSL certificates" />
      <link rel="canonical" href="https://siteracks.com/" />

      {/* ==== FACEBOOK META ====  */}

      <meta property="og:title" content="Best Web Hosting Company - SiteRacks" />
      <meta
        property="og:description"
        content="Looking for reliable and affordable web hosting services? SiteRacks has got you covered! Our team of experts provides fast and secure hosting solutions that keep your website up and running 24/7. Choose from our range of hosting packages, including shared hosting, VPS, and dedicated servers. Get started today and experience the SiteRacks difference!"
      />
      <meta property="og:site_name" content="SITE RACKS" />
      <meta property="og:url" content="https://siteracks.com/" />
      <meta property="og:image" content="https://siteracks.com/images/brandAssets/primary-logo.jpg" />

      {/* ==== TWITTER META ====  */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@siteracks" />
      <meta name="twitter:creator" content="@siteracks" />
      {/* add more meta tags as needed */}
    </Head>
  );
};

export default useDynamicHead;
