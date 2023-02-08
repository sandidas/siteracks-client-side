import { Button } from "@mantine/core";
import React from "react";
import OptimalPerformanceImage from "../../../public/images/50xSpeedMan.svg";
import OutperformTheCompetition from "../../../public/images/competitionIcon.svg";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const FeatureOne = () => {
  return (
    <section>
      <article className="pb-[10vh]">
        {/* Article First  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          {/* image container  */}
          <div className="flex flex-col justify-center items-center relative">
            <div className="w-full overflow-hidden">
              {/* image  */}
              <OutperformTheCompetition className="w-full h-fit" />
            </div>
          </div>

          {/* Text Container  */}
          <div className="flex flex-col justify-center space-y-12 group items-start">
            <div className="space-y-8">
              <h2 className="font-poppins flex flex-col font-bold">
                <span className="text-4xl md:text-4xl text-title md:leading-tight">Outperform the Competition</span> <span className="text-2xl text-slate-500 font-light">with Exclusive Web Hosting</span>
              </h2>
              <p className="text-text text-xl leading-9">We’re here to help you find the right hosting for your business website. With years of experience supporting the online success of local and international businesses, our exclusive web hosting solutions are the best in the market.</p>

              <p className="text-text text-xl leading-9">No matter your business’s stage, Our hosting is supported with high uptime, enterprise-grade security, performance, and 24/7 expert support.</p>
            </div>

            <Button size="xl" className="bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
              Get Started
              <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
            </Button>
          </div>
        </div>
        {/* Article Second  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          <div className="flex flex-col space-y-12 items-start order-2 md:order-1 group justify-center">
            
            <div className="space-y-8">
              <h2 className="font-poppins flex flex-col font-bold">
                <span className="text-4xl md:text-4xl text-title md:leading-tight">200X Optimal performance</span> <span className="text-2xl text-slate-500 font-light">for your website or web app</span>
              </h2>
              <p className="text-text text-xl leading-9">When you choose SiteRacks, stay relaxed, knowing that your data is stored in our highly reliable data centers. This means you get optimal performance for your website or web app, equipping it to deliver superior customer experiences.</p>
            </div>

            <Button size="xl" className="bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
              Get Started
              <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
            </Button>
          </div>

          {/* image container  */}
          <div className="flex flex-col justify-center items-center order-1 md:order-2">
            <div className="w-full overflow-hidden">
              {/* image  */}
              <OptimalPerformanceImage className="w-full h-fit fill-surface" />
            </div>
            {/* <BackgroundSurfacePrimary className="w-5/12 h-72 fill-primary stroke-primary absolute left-0" /> */}
          </div>
        </div>
      </article>
    </section>
  );
};

export default FeatureOne;
