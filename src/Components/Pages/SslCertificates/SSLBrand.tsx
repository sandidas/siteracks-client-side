import FeatureCard from "@/Components/Card/FeatureCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";
import RapidsslLogo from "../../../../public/images/logos/RapidsslLogo.svg";
import DigiCertLogo from "../../../../public/images/logos/DigiCertLogo.svg";
import GeoTrustLogo from "../../../../public/images/logos/GeoTrustLogo.svg";

const SSLBrand = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-3 md:px-5 py-[10vh]">
        <SectionTitle title="We offer SSL certificates" subTitle="from highly trusted brands in online security." bottomSpace />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard noStyle customClass="items-center">
            <div className="space-y-5">
              <RapidsslLogo className="w-72 h-44" />
            </div>
            <div className="grow"></div>
          </FeatureCard>

          <FeatureCard noStyle customClass="items-center">
            <div className="space-y-5">
              <DigiCertLogo className="w-72 h-44" />
            </div>
            <div className="grow"></div>
          </FeatureCard>

          <FeatureCard noStyle customClass="items-center">
            <div className="space-y-5">
              <GeoTrustLogo className="w-72 h-44" />
            </div>
            <div className="grow"></div>
          </FeatureCard>
        </div>
      </div>
    </>
  );
};

export default SSLBrand;
