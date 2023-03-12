import FeatureCard from "@/Components/Card/FeatureCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";

const BrandAssetsGuideLine = () => {
  return (
    <div>
      <SectionTitle title="Usage Guidelines" subTitle="The SiteRacks brand is exclusive and safeguarded by laws pertaining to intellectual property." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">#</h3>
            <p className="text-text">Please don't show our logo or brand name in a way that makes it seem like SiteRacks is connected to or approves of your product, service, or business.</p>
          </div>
        </FeatureCard>

        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">#</h3>
            <p className="text-text">Please don't use the SiteRacks logo or brand name with any other pictures or symbols without getting permission in writing from SiteRacks.</p>
          </div>
        </FeatureCard>

        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">#</h3>
            <p className="text-text">Please avoid using our logo or brand name in a way that may cause people to mistake SiteRacks for a different company.</p>
          </div>
        </FeatureCard>

        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">#</h3>
            <p className="text-text">Please do not modify these files in any manner. This means you should not change the SiteRacks logo's appearance, size, or color without first receiving written permission from us.</p>
          </div>
        </FeatureCard>

        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">#</h3>
            <p className="text-text">Please do not use the SiteRacks brand name as a component of your product, service, or business name.</p>
          </div>
        </FeatureCard>

        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">#</h3>
            <p className="text-text">Kindly utilize only the SiteRacks logo versions provided on this page, and solely the color variations indicated here.</p>
          </div>
        </FeatureCard>
      </div>
    </div>
  );
};

export default BrandAssetsGuideLine;
