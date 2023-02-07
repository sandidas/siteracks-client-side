import { Button } from "@mantine/core";
import React from "react";
import OptimalPerformanceImage from "../../../public/images/optimalPerformanceImage.svg";
import OutperformTheCompetition from "../../../public/images/outperformTheCompetition.svg";
import BackgroundSurfacePrimary from "../../../public/images/bgSurfacePrimary.svg";

const FeatureOne = () => {
  return (
    <section>
      <article className="grid grid-cols-1 gap-[8vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 py-[8vh] gap-[8vw]">
          <div className="flex flex-col justify-start items-center">
            <OutperformTheCompetition className="w-3/4 h-96 fill-primary" />
            <BackgroundSurfacePrimary className="w-5/12 h-96 fill-primary stroke-primary absolute left-0" />
          </div>
          <div className="flex flex-col gap-5 items-start">
            <h2 className="font-poppins flex flex-col font-bold">
              <span className="text-4xl md:text-4xl text-title md:leading-tight">Outperform the Competition</span> <span className="text-2xl text-slate-500 font-light">with Exclusive Web Hosting</span>
            </h2>
            <p className="text-text text-xl">We’re here to help you find the right hosting for your business website. With years of experience supporting the online success of local and international businesses, our exclusive web hosting solutions are the best in the market.</p>

            <p className="text-text text-xl">No matter your business’s stage, Our hosting is supported with high uptime, enterprise-grade security, performance, and 24/7 expert support.</p>

            <Button variant="outline" size="xl">
              Get Started
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 py-[8vh] gap-[8vw]">
          <div className="flex flex-col gap-5 items-start">
            <h2 className="font-poppins flex flex-col font-bold">
              <span className="text-4xl md:text-4xl text-title md:leading-tight">Optimal performance</span> <span className="text-2xl text-slate-500 font-light">for your website or web app</span>
            </h2>
            <p className="text-text text-xl">When you choose SiteRacks, stay relaxed, knowing that your data is stored in our highly reliable data centers. This means you get optimal performance for your website or web app, equipping it to deliver superior customer experiences.</p>

            <Button variant="outline" size="xl">
              Get Started
            </Button>
          </div>
          <div className="flex flex-col justify-start items-center">
            <OptimalPerformanceImage className="w-3/4 h-96 fill-primary" />
            <BackgroundSurfacePrimary className="w-3/4 h-96 fill-primary stroke-primary absolute right-0" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default FeatureOne;
