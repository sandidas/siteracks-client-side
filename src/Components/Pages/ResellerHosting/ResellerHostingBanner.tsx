import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React from "react";
import BusinessHostingBannerImage from "../../../../public/images/webHosting/business-hosting-banner.svg";

const ResellerHostingBanner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3 md:px-5 grid grid-cols-1 md:grid-cols-12 pt-[12vh] pb-[8vh]  gap-3 md:5 xl:gap-16 2xl:gap-32">
      <div className="flex flex-col items-start space-y-8 justify-center md:col-span-6 group">
        <h1 className="flex flex-col md:leading-normal space-y-3">
          <span className="uppercase text-xl font-bold tracking-wider">Effortlessly available and ready-to-run</span>

          <span className="text-5xl lg:text-6xl lg:leading-tight text-title font-bold">Industry leader reseller hosting</span>

          <span className="uppercase text-xl">Made for you to manage multiple sites easily</span>
          <span className="uppercase text-xl font-bold text-primary tracking-wider">and allows you to earn money by hosting your clients</span>
        </h1>
        <ul className="text-text lg:text-xl space-y-3 list-disc pl-8">
          <li>Host Unlimited Websites with Free SSL Certificate</li>
          <li>Built For Your Success</li>
          <li>Dedicated one-to-one support.</li>
          <li>Scale your business when needed</li>
          <li>White Labeled</li>
        </ul>
        <div>
          <div className="text-text">Starting at</div>
          <div className="flex">
            <div className="text-primary font-bold text-5xl group-hover:text-text">$4.95 </div>
            <div className="text-text pt-3">/mo</div>
          </div>
        </div>
        <Button size="xl" className="bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
          Get Started
          <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
        </Button>
      </div>

      <div className="flex flex-col justify-start items-center w-full md:col-span-6">
        <BusinessHostingBannerImage className="w-full h-fit hidden md:block fill-primary" />
      </div>
    </div>
  );
};

export default ResellerHostingBanner;
