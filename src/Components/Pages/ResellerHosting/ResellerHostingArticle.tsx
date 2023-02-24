import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";
import FCDedicatedSupport from "../FeatureCard/FCDedicatedSupport";
import FCFreeWebsiteMigration from "../FeatureCard/FCFreeWebsiteMigration";
import FCPremiumCloudServers from "../FeatureCard/FCPremiumCloudServers";
import FCResellerScaleBusiness from "../FeatureCard/FCResellerScaleBusiness";
import FCResellerWhiteLabel from "../FeatureCard/FCResellerWhiteLabel";
import FCResellerYourSuccess from "../FeatureCard/FCResellerYourSuccess";

const ResellerHostingArticle = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
      <SectionTitle supTitle="Easily Manage Your Business With" title=" Fast And Easy Reseller Hosting " subTitle="And Make More Money By Hosting Your Clients" bottomSpace={true} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-16 2xl:gap-32">
        <FCResellerWhiteLabel />
        <FCResellerScaleBusiness />
        <FCResellerYourSuccess />
        <FCFreeWebsiteMigration />
        <FCDedicatedSupport />
        <FCPremiumCloudServers />
      </div>
    </div>
  );
};

export default ResellerHostingArticle;
