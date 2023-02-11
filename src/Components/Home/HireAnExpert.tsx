import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React from "react";
import ExpertIcon from "../../../public/images/expertIcon.svg";
import ColumnTitleAndDesc from "../ColumnTitleAndDesc/ColumnTitleAndDesc";

const HireAnExpert = () => {
  return (
    <article className="py-[10vh] bg-surface">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-3 md:5 xl:gap-16 2xl:gap-32 max-w-screen-2xl mx-auto px-3 md:px-5">
        <div className="flex flex-col justify-start items-center ">
          <div className="w-full">
            <ExpertIcon className="w-full h-fit fill-primary" />
          </div>
          {/* <BackgroundSurfacePrimary className="w-5/12 h-72 fill-primary stroke-primary absolute left-0" /> */}
        </div>
        <div className="flex flex-col justify-center items-start space-y-12 group">
          <ColumnTitleAndDesc title="Hire an Expert" subTitle="a hassle-free solution">
            <p className="text-text lg:text-xl lg:leading-9">
              We have in-house experts in WordPress, Laravel, and React and have extensive experience in developing top-notch websites, web applications, and custom solutions. Our team is dedicated to delivering high-quality, reliable, and scalable solutions to meet our client's needs.{" "}
            </p>
            <ul className="text-text text-xl list-disc leading-10 pl-5">
              <li>Dedicated Support</li>
              <li>Professional WordPress Website Design</li>
              <li>Custom web development</li>
              <li>SEO and marketing</li>
            </ul>
          </ColumnTitleAndDesc>

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
