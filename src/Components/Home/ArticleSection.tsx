import { Button } from "@mantine/core";
import React from "react";
import OptimalPerformanceImage from "../../../public/images/50xSpeedMan.svg";
import OutperformTheCompetition from "../../../public/images/competitionIcon.svg";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import SectionTitle from "../SectionTitle/SectionTitle";

const FeatureOne = () => {
  return (
    <section className="pb-[10vh]">
      {/* Article First  */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-3 md:5 xl:gap-16 2xl:gap-32">
        {/* image container  */}
        <div className="flex flex-col justify-center items-center relative">
          <div className="w-full">
            {/* image  */}
            <OutperformTheCompetition className="w-full h-fit" />
          </div>
        </div>

        {/* Text Container  */}
        <article className="flex flex-col justify-center space-y-8 group items-start">
          <SectionTitle title="Outperform the Competition" subTitle="with Exclusive Web Hosting" leftAlignDesktop />

          <p className="text-text lg:text-xl lg:leading-9">We’re here to help you find the right hosting for your business website. With years of experience supporting the online success of local and international businesses, our exclusive web hosting solutions are the best in the market.</p>

          <p className="text-text lg:text-xl lg:leading-9">No matter your business’s stage, Our hosting is supported with high uptime, enterprise-grade security, performance, and 24/7 expert support.</p>

          <Button size="xl" className="bg-primary shadow-md transition ease-in-out duration-500  group-hover:fill-white group-hover:bg-secondary">
            Get Started
            <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
          </Button>
        </article>
      </div>
      {/* Article Second  */}
      <article className="grid grid-cols-1 md:grid-cols-2  gap-3 md:5 xl:gap-16 2xl:gap-32 pt-32 md:pt-0">
        <div className="flex flex-col space-y-8 items-start order-2 md:order-1 group justify-center">
          <SectionTitle title="200X Optimal performance" subTitle="for your website or web app" leftAlignDesktop />

          <p className="text-text lg:text-xl lg:leading-9">When you choose SiteRacks, stay relaxed, knowing that your data is stored in our highly reliable data centers. This means you get optimal performance for your website or web app, equipping it to deliver superior customer experiences.</p>

          <Button size="xl" className="bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
            Get Started
            <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
          </Button>
        </div>

        {/* image container  */}
        <div className="flex flex-col justify-center items-center order-1 md:order-2">
          <div className="w-full">
            {/* image  */}
            <OptimalPerformanceImage className="w-full h-fit fill-surface" />
          </div>
          {/* <BackgroundSurfacePrimary className="w-5/12 h-72 fill-primary stroke-primary absolute left-0" /> */}
        </div>
      </article>
    </section>
  );
};

export default FeatureOne;
