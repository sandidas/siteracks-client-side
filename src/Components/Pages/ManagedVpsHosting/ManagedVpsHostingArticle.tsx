import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";
import FCDedicatedSupport from "../FeatureCard/FCDedicatedSupport";
import FCFreeDomain from "../FeatureCard/FCFreeDomain";
import FCHighPerformanceResources from "../FeatureCard/FCHighPerformanceResources";
import FCManageVpsLightCoreFeature from "../FeatureCard/FCManageVpsLightCoreFeature";
import FCPremiumCloudServers from "../FeatureCard/FCPremiumCloudServers";

const ManagedVpsHostingArticle = () => {
  return (
    <section className="py-[10vh] bg-surface">
      <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
        <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
          <SectionTitle title="a High-Performance Hosting Platform" subTitle="Dedicated to eCommerce Stores of Every Size" bottomSpace={true} />
        </div>
        {/* article container  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-16 2xl:gap-32">
          <FCManageVpsLightCoreFeature />  
          <FCPremiumCloudServers /> 
          <FCDedicatedSupport />
          <FCFreeDomain /> 
        </div>
      </div>
    </section>
  );
};

export default ManagedVpsHostingArticle;
