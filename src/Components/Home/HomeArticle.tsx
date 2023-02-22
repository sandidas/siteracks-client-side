import React from "react";
import FCDedicatedSupport from "../Pages/FeatureCard/FCDedicatedSupport";
import FCFreeDomain from "../Pages/FeatureCard/FCFreeDomain";
import FCFreeWebsiteMigration from "../Pages/FeatureCard/FCFreeWebsiteMigration";
import FCPremiumCloudServers from "../Pages/FeatureCard/FCPremiumCloudServers";
import FCPremiumWebsiteBuilder from "../Pages/FeatureCard/FCPremiumWebsiteBuilder";
import SectionTitle from "../SectionTitle/SectionTitle";

const HomeArticle = () => {
  return (
    <section className="py-[10vh]">
      <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
        <SectionTitle title="a High-Performance Hosting Platform" subTitle="Dedicated to eCommerce Stores of Every Size" bottomSpace={true} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-16 2xl:gap-32">
          <FCFreeWebsiteMigration />
          <FCPremiumCloudServers />
          <FCPremiumWebsiteBuilder />
          {/* <FCDedicatedSupport /> */}
          <FCFreeDomain />
        </div>
      </div>
    </section>
  );
};

export default HomeArticle;
