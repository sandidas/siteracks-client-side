import FeatureCard from "@/Components/Card/FeatureCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";
import AccountIcon from "../../../../public/images/icons/account.svg";
import OptionsIcon from "../../../../public/images/icons/OptionsIcon.svg";
import AdvertiseIcon from "../../../../public/images/icons/AddvertiseIcon.svg";
import EarningIcon from "../../../../public/images/icons/EarningIcon.svg";

const AffiliateHowItWorks = () => {
  return (
    <>
      <SectionTitle title="How It Works" bottomSpace>
        Making money as a SiteRacks affiliate is a breeze.
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <AccountIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Set up your account</h3>
            <p className="text-text">Join our affiliate program and set up your account.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
        </FeatureCard>

        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <OptionsIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Choose your options</h3>
            <p className="text-text">Select your preferred ad types from our wide range of available banner and text ads.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
        </FeatureCard>

        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <AdvertiseIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Place your ad</h3>
            <p className="text-text">Place the ad anywhere on your website, email, or blog. Just copy and paste the code we have provided, and that’s it. No coding needed at all!</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
        </FeatureCard>

        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <EarningIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Start earning</h3>
            <p className="text-text">When visitors clicking through to SiteRacks from your ads make a qualified purchase, you automatically earn a commission.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
        </FeatureCard>
      </div>
    </>
  );
};

export default AffiliateHowItWorks;
