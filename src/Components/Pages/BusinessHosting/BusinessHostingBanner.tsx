import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React from "react";

import BusinessHostingBannerImage from "../../../../public/images/webHosting/business-hosting-banner.svg";

const BusinessHostingBanner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3 md:px-5 grid grid-cols-1 md:grid-cols-2 pt-[8vh] md:pt-[12vh] pb-[8vh] gap-16 md:5 xl:gap-16 2xl:gap-32">
      {/* left column  */}
      <div className="flex flex-col justify-center items-start space-y-8 group order-2 md:order-1">
        <h1 className="flex flex-col md:leading-normal space-y-3">
          <span className="uppercase text-xl font-bold tracking-wider">Greater Stability, Enhanced Performance</span>
          <span className="text-5xl lg:text-6xl lg:leading-tight text-title font-bold">Boost your business website, and pay less</span>
          <span className="uppercase text-xl">
            by SiteRacks <span className="uppercase text-xl font-bold text-primary tracking-wider">High Performance Business Web Hosting</span>{" "}
          </span>
          {/*  */}
        </h1>
        <p className="text-text lg:text-xl lg:leading-9">The flexibility of cloud hosting, and the power of a VPS server. A complete solution for your business websites.</p>
        <ul className="text-text lg:text-xl space-y-3 list-disc pl-8">
          <li>Dedicated one-to-one support.</li>
          <li>Latest technologies with advanced security.</li>
          <li>Unlimited Traffic</li>
          <li>24/7 Security Monitoring</li>
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
          <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
        </Button>
      </div>

      {/* right column  */}
      <div className="flex flex-col justify-start items-center w-full order-1 md:order-2">
        <BusinessHostingBannerImage className="w-full h-fit" />
      </div>
    </div>
  );
};

export default BusinessHostingBanner;
