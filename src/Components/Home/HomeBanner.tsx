import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React from "react";
import HomeBannerImage from "../../../public/images/homeBanner.svg";

const HomeBanner = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-3 md:px-5 grid grid-cols-1 md:grid-cols-12 pt-[12vh] pb-[8vh] gap-3 md:5 xl:gap-16 2xl:gap-32">
      {/* left column  */}
      <div className="md:col-span-8 flex flex-col justify-center items-start space-y-8 group">
        <h1 className="text-4xl lg:text-6xl md:leading-tight text-title font-bold flex flex-col items-start lg:leading-">
          <span className=""> WordPress Optimized </span>
          <span className="text-primary">Blazing Fast Web Hosting</span>
          {/*  */}
        </h1>
        <p className="text-text lg:text-xl lg:leading-9">Whether you are just starting, growing fast, or running a high-traffic website, your secure and reliable web hosting services allow you to choose what works best for your brand.</p>
        <ul className="text-text lg:text-xl space-y-3 flex flex-wrap flex-col items-start">
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
      </div>
      {/* right column  */}
      <div className="md:col-span-4 flex flex-col justify-start items-center w-full ">
        <HomeBannerImage className="w-full h-fit" />
      </div>
    </section>
  );
};

export default HomeBanner;
