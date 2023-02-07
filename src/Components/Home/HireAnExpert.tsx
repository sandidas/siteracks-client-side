import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React from "react";
import ExpertIcon from "../../../public/images/expertIcon.svg";

const HireAnExpert = () => {
  return (
    <article className="py-[4vh] bg-surface">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 max-w-screen-2xl mx-auto px-5">
        <div className="flex flex-col justify-start items-center ">
          <div className="p-5 md:p-10 rounded-lg">
            <ExpertIcon className="w-96 h-96 md:w-full md:h-[600px] fill-primary" />
          </div>
          {/* <BackgroundSurfacePrimary className="w-5/12 h-72 fill-primary stroke-primary absolute left-0" /> */}
        </div>
        <div className="flex flex-col justify-center gap-5 items-start space-y-6 group overflow-hidden">
          <div className="space-y-5">
            <h2 className="font-poppins flex flex-col font-bold">
              <span className="text-4xl md:text-5xl text-title md:leading-tight">Hire an Expert</span> <span className="text-2xl text-slate-500 font-light">a hassle-free solution</span>
            </h2>
            <p className="text-text text-xl">
            We have in-house experts in WordPress, Laravel, and React and have extensive experience in developing top-notch websites, web applications, and custom solutions. Our team is dedicated to delivering high-quality, reliable, and scalable solutions to meet our client's needs.{" "}
            </p> 
            <ul className="text-text text-xl list-disc">
                <li>Dedicated Support</li>
                <li>Professional WordPress Website Design</li>
                <li>Custom web development</li>
                <li>SEO and marketing</li>
            </ul>
          </div>

          <Button size="xl" className="bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
            Get Started
            <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default HireAnExpert;
