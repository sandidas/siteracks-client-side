import { getPriceForBanner } from "@/Components/Hooks/ApiCall";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React from "react";
import WordPressWebsiteBanner from "../../../../public/images/webHosting/wordpress-hosting-banner.svg";

const WordPressHostingBanner = () => {
  const packagePrice = getPriceForBanner("wordPressHosting", "standardWPhosting");
  return (
    <div className="max-w-screen-2xl mx-auto px-3 md:px-5 grid grid-cols-1 md:grid-cols-2 pt-[8vh] md:pt-[12vh] pb-[8vh] gap-16 md:5 xl:gap-16 2xl:gap-32">
      {/* left column  */}
      <div className="flex flex-col justify-center items-start space-y-8 group order-2 md:order-1">
        <h1 className="flex flex-col md:leading-normal space-y-3">
          <span className="uppercase text-xl font-bold tracking-wider">No hidden cost, No hassle</span>
          <span className="text-5xl lg:text-6xl text-title font-bold lg:leading-tight">Get a significant combo benefit</span>
          <span className="uppercase text-xl">
            by SiteRacks <span className="uppercase text-xl font-bold text-primary tracking-wider">Managed WordPress Hosting</span>{" "}
          </span>
          {/*  */}
        </h1>
        <ul className="text-text lg:text-xl space-y-3 list-disc pl-8">
          <li>Blazing fast and Light speed WordPress optimized server.</li>
          <li>Latest technologies with advanced security.</li>
          <li>User friendly dashboard</li>
        </ul>
        <Button component="a" href="#orderNow" size="xl" className="bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
          View Plans
          <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
        </Button>

        <div>
          <div className="text-text">Starting at</div>
          <div className="flex">
            <div className="text-primary font-bold text-5xl group-hover:text-text">${packagePrice.toFixed(2)}</div>
            <div className="text-text pt-3">/mo</div>
          </div>
        </div>
        <p className="text-sm">
          <span className="text-primary font-medium">Free Wordpress Website Migration</span>
        </p>
      </div>

      {/* right column  */}
      <div className="flex flex-col justify-start items-center w-full order-1 md:order-2">
        <WordPressWebsiteBanner className="w-full h-fit" />
      </div>
    </div>
  );
};

export default WordPressHostingBanner;
