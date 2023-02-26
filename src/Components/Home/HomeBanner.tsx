import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React from "react";
import HomeBannerImage from "../../../public/images/webHosting/home-page-banner.svg";

const HomeBanner = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-3 md:px-5 grid grid-cols-1 md:grid-cols-2 pt-[8vh] md:pt-[12vh] pb-[8vh] gap-16 md:5 xl:gap-16 2xl:gap-32">
      {/* left column  */}
      <div className="flex flex-col justify-center items-start space-y-8 group order-2 md:order-1">
        <h1 className="text-4xl lg:text-6xl md:leading-tight text-title font-bold flex flex-col items-start lg:leading-tight">
          <span className=""> WordPress Optimized </span>
          <span className="text-primary">Blazing Fast Web Hosting</span>
          {/*  */}
        </h1>
        <p className="text-text lg:text-xl lg:leading-9">Whether you are just starting, growing fast, or running a high-traffic website, your <span className="text-primary font-bold">SITERACKS</span> secure and reliable web hosting services allow you to choose what works best for your brand.</p>
        <ul className="text-text text-base lg:text-xl space-y-3 flex flex-wrap flex-col items-start">
          <li className="bg-green-50/50 text-black px-3 py-1 lg:px-5 font-bold rounded shadow hover:translate-x-2 duration-200">Free & Easy Website Migration</li>
          <li className="bg-green-100/50 text-black px-3 py-1 lg:px-5 font-bold rounded shadow hover:translate-x-2 duration-200">24/7 priority support</li>
          <li className="bg-violet-100/50 text-black px-3 py-1 lg:px-5 font-bold rounded shadow hover:translate-x-2 duration-200">Free-.com domain, SSL, Email, CDN, and Backups</li>
          <li className="bg-purple-100/50 text-black px-3 py-1 lg:px-5 font-bold rounded shadow hover:translate-x-2 duration-200">Dedicated WordPress expert</li>
          <li className="bg-blue-100/50 text-black px-3 py-1 lg:px-5 font-bold rounded shadow hover:translate-x-2 duration-200">30-day of money back guarantee</li>
        </ul>

        <div>
          <div className="flex space-x-1">
            <div className="text-text pt-3">Starting at </div>
            <div className="text-primary font-bold text-4xl group-hover:text-text"> $4.95 </div>
            <div className="text-text pt-3">/mo*</div>
          </div>
        </div>
        <Button size="xl" className="bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
          View Plans
          <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
        </Button>
        <p className="text-sm">
          Powered by <span className="text-primary font-medium">AWS and Digital Ocean</span> Premium servers
        </p>
      </div>
      {/* right column  */}
      <div className="flex flex-col justify-start items-center w-full order-1 md:order-2">
      <div className="grow"></div>
        <HomeBannerImage className="w-full h-fit" />
      </div>
    </section>
  );
};

export default HomeBanner;
