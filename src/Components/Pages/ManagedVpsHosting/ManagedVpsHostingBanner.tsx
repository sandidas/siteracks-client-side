import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React from "react";
import ManageVpsHostingBannerImage from "../../../../public/images/webHosting/manage-vps-hosting-banner.svg";

const ManagedVpsHostingBanner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3 md:px-5 grid grid-cols-1 md:grid-cols-12 pt-[12vh] pb-[8vh]  gap-3 md:5 xl:gap-16 2xl:gap-32">
      <div className="flex flex-col items-start space-y-8 justify-center md:col-span-6 group">
        <h1 className="flex flex-col space-y-3">
          <span className="uppercase text-xl font-bold tracking-wider">No Complexity, No Hassle</span>
          <span className="text-5xl lg:text-6xl text-title font-bold lg:leading-tight"> A 100% Fully Managed VPS Hosting.</span>
          <span className="uppercase text-xl">We manages all your server needs</span>
          <span className="uppercase text-xl font-bold text-primary tracking-wider"> so that you can focus on your business.</span> {/*  */}
        </h1>
        <p className="text-text lg:text-xl lg:leading-9">
          Our cost-effective and powerful managed VPS hosting plans are perfect for hosting websites on a secure and resilient infrastructure without the burden of managing the server. Don't wait any longer; pick the plan that suits your needs and start right away.
        </p>
        <ul className="text-text lg:text-xl space-y-3 list-disc pl-8">
          <li>Dedicated one-to-one support.</li>
          <li>Latest technologies with advanced security.</li>
          <li>Ready to Use Tools</li>
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
        <p className="text-sm">
          Powered by <span className="text-primary font-medium">AWS and Digital Ocean</span> Premium servers
        </p>
      </div>

      <div className="flex flex-col justify-start items-center w-full md:col-span-6">
        <ManageVpsHostingBannerImage className="w-full h-fit hidden md:block fill-primary" />
      </div>
    </div>
  );
};

export default ManagedVpsHostingBanner;
