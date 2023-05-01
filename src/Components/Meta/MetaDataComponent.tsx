import Head from "next/head";
import React, { FC } from "react";

interface IProps {
  metaData: IHeadData;
}

const MetaDataComponent = ({ metaData }: IProps) => {
  console.log("metaData C", metaData?.pageTitle);
  return !metaData?.pageTitle ? (
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
  ) : (
    <Head>
      <link rel="icon" href="/SiteRacksFavIcon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={`${metaData?.metaAuthor}`} />

      {/* <title dangerouslySetInnerHTML={{ __html: metaData?.pageTitle }} /> */}
      <title>{Array.isArray(metaData?.pageTitle) ? metaData?.pageTitle.join(' ') : metaData?.pageTitle}</title>
      
      <meta name="description" content={`${metaData?.metaDescription}`} />
      <meta name="keywords" content={`${metaData?.metaKeywords}`} />
      <link rel="canonical" href="https://siteracks.com/" />

      <meta property="og:title" content={`${metaData?.metaOgTitle}`} />
      <meta property="og:description" content={`${metaData?.metaOgDescription}`} />
      <meta property="og:site_name" content="SITE RACKS" />
      <meta property="og:url" content={`${metaData?.metaOgUrl}`} />
      <meta property="og:image" content={`${metaData?.metaOgImage}`} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@siteracks" />
      <meta name="twitter:creator" content="@siteracks" />
      {/* add more meta tags as needed */}
    </Head>
  );
};

export default MetaDataComponent;
