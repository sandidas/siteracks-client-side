import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React, { FC } from "react";
import WordPressWebsiteBanner from "../../../../public/images/webHosting/wordpress-hosting-banner.svg";
import BannerPrice from "../CommonComponents/BannerPrice";
import WordPressHostingBannerPrice from "./WordPressHostingBannerPrice";
interface IProps {
  product?: IProduct;
  isLoading: boolean;
  isError?: boolean;
}

const WordPressHostingBanner: FC<IProps> = ({ product, isLoading, isError }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 grid grid-cols-1 xl:grid-cols-12 gap-5">
      {/* left column  */}
      <div className="xl:col-span-7 flex flex-col items-center xl:items-start group max-w-4xl gap-8 xl:gap-5 py-[8vh] xl:py-[10vh] mx-auto justify-center">
        <h1 className="flex flex-col text-center xl:text-left gap-2">
          <span className="uppercase font-bold tracking-wider text-xs xl:text-xl">No hidden cost, No hassle</span>
          <span className="text-4xl lg:text-6xl text-title font-bold lg:leading-tight">Get a significant combo benefit</span>
          <span className="uppercase text-xs xl:text-xl">
            by SiteRacks <span className="uppercase font-bold text-primary tracking-wider text-xs xl:text-xl">Managed WordPress Hosting</span>{" "}
          </span>
          {/*  */}
        </h1>
        <ul className="text-text gap-2 flex flex-wrap flex-col items-center xl:items-start text-center xl:text-left">
          <li className="bg-green-500/20 rounded-sm py-1 px-2 text-title text-sm xl:text-base">Blazing fast and Light speed WordPress optimized server.</li>
          <li className="bg-green-500/20 rounded-sm py-1 px-2 text-title text-sm xl:text-base">Latest technologies with advanced security.</li>
          <li className="bg-green-500/20 rounded-sm py-1 px-2 text-title text-sm xl:text-base">User friendly dashboard</li>
        </ul>

        <div className="text-center flex flex-col items-center xl:items-start xl:text-left">
          <div className="text-text">Starting at</div>
          <div className="flex">
            <div className="text-primary font-bold text-5xl group-hover:text-text">
              <BannerPrice product={product} isLoading={isLoading} typeSlugName="standardWpHosting" />
            </div>
            <div className="text-text pt-3">/mo</div>
          </div>
          <p className="text-primary font-medium">Free Wordpress Website Migration</p>
        </div>

        <Button component="a" href="#orderNow" size="lg" className="shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary w-full xl:w-4/12">
          View Plans
          <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
        </Button>
      </div>

      {/* right column  */}
      <div className="items-center justify-center w-full hidden xl:col-span-5 xl:flex flex-col">
        <WordPressWebsiteBanner className="w-full h-fit" />
      </div>
    </div>
  );
};

export default WordPressHostingBanner;
