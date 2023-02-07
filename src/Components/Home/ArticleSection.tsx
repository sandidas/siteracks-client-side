import { Button } from "@mantine/core";
import React from "react";
import OptimalPerformanceImage from "../../../public/images/competitionIcon.svg";
import OutperformTheCompetition from "../../../public/images/50xSpeedMan.svg";
import WelcomeIcon from "../../../public/images/welcomeIcon.svg";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const FeatureOne = () => {
  return (
    <section>
      <article className="grid grid-cols-1 gap-[4vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-[2vh] gap-10 md:gap-32">
          <div className="flex flex-col justify-start items-center bg-surface">
            <div className="md:p-20 p-5 rounded-lg">
              <OutperformTheCompetition className="h-96 w-96 md:w-full md:h-[450px] fill-primary" />
            </div>
            {/* <BackgroundSurfacePrimary className="w-5/12 h-72 fill-primary stroke-primary absolute left-0" /> */}
          </div>
          <div className="flex flex-col justify-center gap-5 items-start space-y-6 group overflow-hidden">
            <div className="space-y-5">
              <h2 className="font-poppins flex flex-col font-bold">
                <span className="text-4xl md:text-4xl text-title md:leading-tight">Outperform the Competition</span> <span className="text-2xl text-slate-500 font-light">with Exclusive Web Hosting</span>
              </h2>
              <p className="text-text text-xl">We’re here to help you find the right hosting for your business website. With years of experience supporting the online success of local and international businesses, our exclusive web hosting solutions are the best in the market.</p>

              <p className="text-text text-xl">No matter your business’s stage, Our hosting is supported with high uptime, enterprise-grade security, performance, and 24/7 expert support.</p>
            </div>

            <Button size="xl" className="bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
              Get Started
              <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32">
          <div className="flex flex-col gap-5 items-start space-y-6 order-2 md:order-1 group justify-center">
            <div className="space-y-5">
              <h2 className="font-poppins flex flex-col font-bold">
                <span className="text-4xl md:text-4xl text-title md:leading-tight">200X  Optimal performance</span> <span className="text-2xl text-slate-500 font-light">for your website or web app</span>
              </h2>
              <p className="text-text text-xl">When you choose SiteRacks, stay relaxed, knowing that your data is stored in our highly reliable data centers. This means you get optimal performance for your website or web app, equipping it to deliver superior customer experiences.</p>
            </div>

            <Button size="xl" className="bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
              Get Started
              <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
            </Button>
          </div>
          <div className="flex flex-col justify-start items-center order-1 md:order-2 bg-surface">
            <div className="p-5 md:p-20 rounded-lg">
              <OptimalPerformanceImage className="h-[400px] w-[530px] md:w-full md:h-[450px] fill-primary" />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 pb-[8vh] gap-10 md:gap-32">
          <div className="flex flex-col justify-start items-center bg-surface">
            <div className="p-5 md:p-20 rounded-lg">
              <WelcomeIcon className="h-[450px] w-[450px] md:w-full md:h-[450px] fill-primary" />
            </div>
            {/* <BackgroundSurfacePrimary className="w-5/12 h-72 fill-primary stroke-primary absolute left-0" /> */}
          </div>
          <div className="flex flex-col justify-center gap-5 items-start space-y-6 group overflow-hidden">
            <div className="space-y-5">
              <h2 className="font-poppins flex flex-col font-bold">
                <span className="text-4xl md:text-4xl text-title md:leading-tight">Free Migration</span> <span className="text-2xl text-slate-500 font-light">a hassle-free solution</span>
              </h2>
              <p className="text-text text-xl">Our website migration service offers a hassle-free solution for transferring your website to our blazing-fast hosting service platform. Our team of experts will handle the entire process, including backup and restoring DNS updates, and website configuration. </p>
              <p className="text-text text-xl">
              Whether you need to move a simple blog or a complex e-commerce site, we guarantee a smooth and seamless transition with no downtime. We aim to ensure your website is up and running on the new platform with all the necessary features, functionalities, and configurations. With our free website migration service, you can focus on growing your business while we handle the technical details.
              </p>
            </div>

            <Button size="xl" className="bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
              Get Started
              <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default FeatureOne;
