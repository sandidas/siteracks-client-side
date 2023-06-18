import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React from "react";
import BannerImage from "../../../../public/images/webHosting/affiliate-banner.svg";

const AffiliateBanner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:5 xl:gap-16 2xl:gap-32">
      <div className="flex flex-col justify-center items-start space-y-8 order-2 md:order-1">
        <h1 className="flex flex-col text-5xl lg:text-6xl md:leading-tight lg:leading-tight text-title font-bold">
          <span>SiteRacks</span>
          <span className="text-primary">Affiliate Program</span>
          {/*  */}
        </h1>
        <p className="text-text lg:text-xl lg:leading-9"> Partner with us and enjoy competitive affiliate earnings and fast payouts.</p>
        <ul className="text-text text-base lg:text-xl space-y-3 flex flex-wrap flex-col items-start">
          <li className="bg-green-50/50 dark:bg-green-50/5 px-3 py-1 lg:px-5 font-bold rounded shadow hover:translate-x-2 duration-200">1 Sales / 5% + $10 Bonus</li>

          <li className="bg-green-100/50 dark:bg-green-100/10  px-3 py-1 lg:px-5 font-bold rounded shadow hover:translate-x-2 duration-200">2-5 Sales /5% + $50 Bonus</li>
          <li className="bg-violet-100/50 dark:bg-violet-100/10 px-3 py-1 lg:px-5 font-bold rounded shadow hover:translate-x-2 duration-200">6-10 Sales /5% + $80 Bonus</li>
          <li className="bg-purple-100/50 dark:bg-purple-100/10 px-3 py-1 lg:px-5 font-bold rounded shadow hover:translate-x-2 duration-200">11-20 Sales /5% + $120 Bonus</li>
          <li className="bg-blue-100/50 dark:bg-blue-100/10 px-3 py-1 lg:px-5 font-bold rounded shadow hover:translate-x-2 duration-200">20+ Sales /5% + Custom Bonus</li>
        </ul>

        <div className="flex gap-5">
          <Button size="xl" component="a" target={"_blank"} href={`${process.env.ASK_ME}/join-siteracks`} className="bg-primary shadow-md transition ease-in-out duration-500  hover:text-white hover:bg-secondary group">
            Join Now for FREE
            <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center w-full order-1 md:order-2">
        <BannerImage className="w-full h-fit" />
      </div>
    </div>
  );
};

export default AffiliateBanner;
