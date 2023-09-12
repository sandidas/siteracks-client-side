import { Button } from "@mantine/core";
import React, { FC } from "react";
import PremiumWebsiteBuilder from "../../../../public/images/webHosting/web-hosting-banner.svg";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import WebHostingBannerPrice from "./WebHostingBannerPrice";
import BannerPrice from "../CommonComponents/BannerPrice";

interface IProps {
  product?: IProduct;
  isLoading: boolean;
  isError?: boolean;
}

const WebHostingBanner: FC<IProps> = ({ product, isLoading, isError }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 grid grid-cols-1 xl:grid-cols-12 gap-5">
      {/* left column  */}
      <div className="xl:col-span-7 flex flex-col items-center xl:items-start group max-w-4xl gap-8 xl:gap-3 py-[5vh] xl:py-[7vh] mx-auto min-h-screen justify-center">

        <h1 className="flex flex-col text-4xl lg:text-6xl md:leading-tight lg:leading-tight text-title font-bold">
          <span>Blazing Fast & Secure</span>
          <span className="text-primary"> Cloud Web Hosting</span>
          {/*  */}
        </h1>

        <p className="text-text lg:text-base  text-center xl:text-left">Enjoy the lightning-fast speed and unparalleled security for your website. The best web hosting packages for startups and small business.</p>

        <ul className="text-text gap-2 flex flex-wrap flex-col items-center xl:items-start text-center xl:text-left">
          <li className="bg-background px-2 text-title">Latest technologies with advanced security.</li>
          <li className="bg-background px-2 text-title">Install Wordpress in 1-Click</li>
          <li className="bg-background px-2 text-title">User friendly dashboard</li>
        </ul>

        <div className="text-center flex flex-col items-center xl:items-start xl:text-left">
          <div className="text-text">Starting at</div>
          <div className="flex">
            <div className="text-primary font-bold text-5xl group-hover:text-text">
              <BannerPrice product={product} isLoading={isLoading} typeSlugName="standardWebHosting" />
            </div>
            <div className="text-text pt-3">/mo</div>
          </div>
          <p className="text-sm font-medium text-primary">Free Wordpress Website Migration</p>
        </div>

        <Button component="a" href="#orderNow" size="xl" className="shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary w-full xl:w-4/12">
          View Plans
          <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
        </Button>
      </div>

      {/* right column  */}
      <div className="items-center justify-center w-full hidden xl:col-span-5 xl:flex flex-col">
        <PremiumWebsiteBuilder className="w-full h-fit" />
      </div>
    </div>
  );
};

export default WebHostingBanner;
