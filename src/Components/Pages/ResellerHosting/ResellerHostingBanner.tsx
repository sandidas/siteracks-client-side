import { getPriceForBanner } from "@/Components/Hooks/ApiCall";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React, { FC } from "react";
import BannerImage from "../../../../public/images/webHosting/reseller-hosting-banner.svg";
import BannerPrice from "../CommonComponents/BannerPrice";
import ResellerHostingBannerPrice from "./ResellerHostingBannerPrice";

interface IProps {
  product?: IProduct;
  isLoading: boolean;
  isError?: boolean;
}

const ResellerHostingBanner: FC<IProps> = ({ product, isLoading, isError }) => {
  // const packagePrice = getPriceForBanner("resellerHosting", "startUpResellerHosting");
  return (
    <div className="max-w-screen-2xl mx-auto px-5 grid grid-cols-1 xl:grid-cols-12 gap-5">
      {/* left column  */}
      <div className="xl:col-span-7 flex flex-col items-center xl:items-start group max-w-4xl gap-8 xl:gap-3 py-[5vh] xl:py-[7vh] mx-auto min-h-screen justify-center">
        <h1 className="flex flex-col text-center xl:text-left gap-2">
          <span className="uppercase text-xl font-bold tracking-wider">Effortlessly available and ready-to-run</span>

          <span className="text-4xl lg:text-6xl lg:leading-tight text-title font-bold">Industry leader reseller hosting</span>

          <span className="uppercase text-xl">Made for you to manage multiple sites easily</span>
          <span className="uppercase text-xl font-bold text-primary tracking-wider">and allows you to earn money by hosting your clients</span>
        </h1>
        <ul className="text-text gap-2 flex flex-wrap flex-col items-center xl:items-start text-center xl:text-left">
          <li className="bg-background px-2 text-title">Host Unlimited Websites with Free SSL Certificate</li>
          <li className="bg-background px-2 text-title">Built For Your Success</li>
          <li className="bg-background px-2 text-title">Dedicated one-to-one support.</li>
          <li className="bg-background px-2 text-title">Scale your business when needed</li>
          <li className="bg-background px-2 text-title">White Labeled</li>
        </ul>

        <div className="text-center flex flex-col items-center xl:items-start xl:text-left">
          <div className="text-text">Starting at</div>
          <div className="flex">
            <div className="text-primary font-bold text-5xl group-hover:text-text">
              <BannerPrice product={product} isLoading={isLoading} typeSlugName="startUpResellerHosting" />
            </div>
            <div className="text-text pt-3">/mo</div>
          </div>
        </div>

        <Button component="a" href="#orderNow" size="xl" className="shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary w-full xl:w-4/12">
          View Plans
          <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
        </Button>
      </div>

      {/* right column  */}
      <div className="flex flex-col justify-start items-center w-full pt-[10vh]">
        <BannerImage className="w-full h-fit" />
      </div>
    </div>
  );
};

export default ResellerHostingBanner;
