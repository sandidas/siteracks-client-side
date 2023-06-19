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
    <div className="max-w-screen-2xl mx-auto px-3 md:px-5 grid grid-cols-1 md:grid-cols-2 pt-[8vh] md:pt-[12vh] pb-[8vh] gap-16 md:5 xl:gap-16 2xl:gap-32">
      {/* left column  */}
      <div className="flex flex-col justify-center items-start space-y-8 group">
        <h1 className="flex flex-col text-5xl lg:text-6xl md:leading-tight lg:leading-tight text-title font-bold">
          <span>Blazing Fast & Secure</span>
          <span className="text-primary"> Cloud Web Hosting</span>
          {/*  */}
        </h1>
        <p className="text-text lg:text-xl lg:leading-9">Enjoy the lightning-fast speed and unparalleled security for your website. The best web hosting packages for startups and small business.</p>
        <ul className="text-text lg:text-xl space-y-3 list-disc pl-8">
          <li>Latest technologies with advanced security.</li>
          <li>Install Wordpress in 1-Click</li>
          <li>User friendly dashboard</li>
        </ul>

        <Button component="a" href="#orderNow" size="xl" className="bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
          View Plans
          <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
        </Button>

        <div className="pt-5">
          <div className="text-text">Starting at</div>
          <div className="flex">
            <div className="text-primary font-bold text-5xl group-hover:text-text">
              <BannerPrice product={product} isLoading={isLoading} typeSlugName="standardWebHosting" />
            </div>
            <div className="text-text pt-3">/mo</div>
          </div>
          <p className="text-sm font-medium text-primary">Free Wordpress Website Migration</p>
        </div>
      </div>

      {/* right column  */}
      <div className="flex flex-col justify-start items-center w-full">
        <PremiumWebsiteBuilder className="w-full h-fit" />
      </div>
    </div>
  );
};

export default WebHostingBanner;
