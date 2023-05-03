import FeatureCard from "@/Components/Card/FeatureCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { BuildingOffice2Icon, ShieldCheckIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";

const FeaturesOfSSLCertificate = () => {
  return (
    <div className="px-3 md:px-5 py-[10vh] bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        <SectionTitle title="Level of validation" bottomSpace />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <ShieldCheckIcon className="fill-primary w-14 h-14" />
              <h3 className="text-title font-bold text-3xl flex flex-col">
                <span>Domain Validation (DV)</span>
                <small className="text-primary"> Basic Security</small>
              </h3>
              <p className="text-text">This SSL certificate is perfect for blogs, social media, and personal websites as it only requires domain validation and can be issued within minutes.</p>
            </div>
            <div className="grow"></div>
          </FeatureCard>

          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <ShoppingBagIcon className="fill-primary w-14 h-14" />
              <h3 className="text-title font-bold text-3xl flex flex-col">
                <span>Organization Validation (OV)</span>
                <small className="text-primary">Strong business level SSL</small>
              </h3>
              <p className="text-text">If you're a small business website or handling sensitive information, this SSL certificate with basic identity verification is an ideal choice.</p>
            </div>
            <div className="grow"></div>
          </FeatureCard>

          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <BuildingOffice2Icon className="fill-primary w-14 h-14" />
              <h3 className="text-title font-bold text-3xl flex flex-col">
                <span>Extended Validation (EV)</span>
                <small className="text-primary"> Maximum Protection & Trust</small>
              </h3>
              <p className="text-text">For business and e-commerce websites that aim to instill maximum visitor confidence, a full identity verification SSL certificate is the ideal option.</p>
            </div>
            <div className="grow"></div>
          </FeatureCard>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOfSSLCertificate;
