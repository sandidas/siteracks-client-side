import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React from "react";
import BannerImage from "../../../../public/images/webHosting/affiliate-banner.svg";

const AffiliateBanner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:5 xl:gap-16 2xl:gap-32">
      <div className="flex flex-col justify-center items-start space-y-8 group order-2 md:order-1">
        <h1 className="flex flex-col text-5xl lg:text-6xl md:leading-tight lg:leading-tight text-title font-bold">
          <span>SiteRacks</span>
          <span className="text-primary">Affiliate Program</span>
          {/*  */}
        </h1>
        <p className="text-text lg:text-xl lg:leading-9"> Partner with us and enjoy competitive affiliate earnings and fast payouts.</p>
        <ul className="text-text lg:text-xl space-y-3 list-disc pl-8 bg-red-400">
          <li>Latest technologies with advanced security.</li>
          <li>Install Wordpress in 1-Click</li>
          <li>User friendly dashboard</li>
        </ul>
        <Button size="xl" className="bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
          Join Now for FREE
          <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
        </Button>
      </div>
      <div className="flex flex-col justify-start items-center w-full order-1 md:order-2">
      <BannerImage className="w-full h-fit" />
      </div>
    </div>
  );
};

export default AffiliateBanner;
