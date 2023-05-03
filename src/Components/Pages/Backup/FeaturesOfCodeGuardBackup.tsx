import FeatureCard from "@/Components/Card/FeatureCard";
import Image from "next/image";
import React from "react";
import fullAutomation from "../../../../public/images/codeguard/api-feature.png";

const FeaturesOfCodeGuardBackup = () => {
  return (
    <div className="px-3 md:px-5 py-[10vh] bg-surface">
      <div className="max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <FeatureCard backgroundSecond>
            <div className="space-y-5">
              
              <Image src={fullAutomation} alt="" width={100} height={100} />
              <h3 className="text-title font-bold text-3xl">
              Automatic Website Backups
              </h3>
              <p className="text-text">Protect your website with daily automatic backups. Our system backs up your site every day and stores the backups offsite. You can easily restore your site in case of emergency. Sign up now to ensure your website is always protected.</p>
            </div>
            <div className="grow"></div>
          </FeatureCard>


      </div>
      </div>
    </div>
  );
};

export default FeaturesOfCodeGuardBackup;
