import React from "react";
import FeatureCard from "../Card/FeatureCard";
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
        <SectionTitle title="A High-Performance Hosting Platform" subTitle="That is Dedicated to Every Size of your website" bottomSpace={true} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <FeatureCard background={true}>
            <FCFreeWebsiteMigration />
          </FeatureCard>
          <FeatureCard background={true}><FCPremiumCloudServers /></FeatureCard>
          
          <FeatureCard background={true}><FCPremiumWebsiteBuilder /></FeatureCard>
          
          {/* <FCDedicatedSupport /> */}
          <FeatureCard background={true}><FCFreeDomain /></FeatureCard>
          
        </div>
      </div>
    </section>
  );
};

export default HomeArticle;
