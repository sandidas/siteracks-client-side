import { Button } from "@mantine/core";
import React from "react";
import PremiumWebsiteBuilder from "../../../../public/images/webDesign/premiumWebsiteBuilder.svg";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
const WebHostingBanner = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-3 md:px-5 grid grid-cols-1 md:grid-cols-12 pt-[10vh] pb-[4vh]  gap-3 md:5 xl:gap-16 2xl:gap-32">
      <div className="flex flex-col items-start space-y-8 justify-center md:col-span-7 group">
        <h1 className="flex flex-col text-5xl lg:text-6xl md:leading-tight text-title font-bold">
          <span>Blazing Fast & Secure</span>
          <span className="text-primary"> Web Hosting</span>
          {/*  */}
        </h1>
        <p className="text-text text-xl leading-9">Enjoy the lightning-fast speed and unparalleled security for your website. The best web hosting packages for startups and small business.</p>
        <ul className="text-text text-xl space-y-3 list-disc pl-8">
          <li>Latest technologies with advanced security.</li>
          <li>Install Wordpress in 1-Click</li>
          <li>User friendly dashboard</li>
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

      <div className="flex flex-col justify-start items-center w-full md:col-span-5">
        <PremiumWebsiteBuilder className="w-full h-fit hidden md:block" />
      </div>
    </section>
  );
};

export default WebHostingBanner;
