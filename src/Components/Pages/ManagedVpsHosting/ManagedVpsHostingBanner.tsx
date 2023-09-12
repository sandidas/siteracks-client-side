import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React, { FC } from "react";
import ManageVpsHostingBannerImage from "../../../../public/images/webHosting/manage-vps-hosting-banner.svg";
import BannerPrice from "../CommonComponents/BannerPrice";
import ManagedVpsHostingBannerPrice from "./ManagedVpsHostingBannerPrice";
interface IProps {
  product?: IProduct;
  isLoading: boolean;
  isError?: boolean;
}

const ManagedVpsHostingBanner: FC<IProps> = ({ product, isLoading, isError }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 grid grid-cols-1 xl:grid-cols-12 gap-5">
      {/* left column  */}
      <div className="xl:col-span-7 flex flex-col items-center xl:items-start group max-w-4xl gap-8 xl:gap-5 py-[8vh] xl:py-[10vh] mx-auto">
        <h1 className="flex flex-col text-center xl:text-left gap-2">
          <span className="uppercase text-xs xl:text-xl font-bold tracking-wider">No Complexity, No Hassle</span>
          <span className="text-4xl lg:text-6xl text-title font-bold lg:leading-tight"> A 100% Fully Managed VPS Hosting.</span>
          {/* <span className="uppercase text-xl">We manages all your server needs</span> */}
          <span className="uppercase text-xs xl:text-xl font-bold text-primary tracking-wider"> so that you can focus on your business.</span>
        </h1>
        {/* <p className="text-text hidden xl:block">
          Our cost-effective and powerful managed VPS hosting plans are perfect for hosting websites on a secure and resilient infrastructure without the burden of managing the server. Don&#39;t wait any longer; pick the plan that suits your needs and start right away.
        </p> */}
        <ul className="text-text gap-2 flex flex-wrap flex-col items-center xl:items-start text-center xl:text-left">
          <li className="bg-green-500/20 rounded-sm py-1 px-2 text-title text-sm xl:text-base">Dedicated one-to-one support.</li>
          <li className="bg-green-500/20 rounded-sm py-1 px-2 text-title text-sm xl:text-base">Latest technologies with advanced security.</li>
          <li className="bg-green-500/20 rounded-sm py-1 px-2 text-title text-sm xl:text-base">Ready to Use Tools</li>
        </ul>

        <div className="text-center flex flex-col items-center xl:items-start xl:text-left">
          <div className="text-text">Starting at</div>
          <div className="flex">
            <div className="text-primary font-bold text-5xl group-hover:text-text">
              <BannerPrice product={product} isLoading={isLoading} typeSlugName="startUpManagedVPSHosting" />
            </div>
            <div className="text-text pt-3">/mo</div>
          </div>
          <p className="text-sm">
            Powered by <span className="text-primary font-medium">AWS and Digital Ocean</span> Premium servers
          </p>
        </div>

        <Button component="a" href="#orderNow" size="xl" className="shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary w-full xl:w-4/12">
          View Plans
          <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
        </Button>
      </div>

      {/* right column  */}
      <div className="items-center justify-center w-full hidden xl:col-span-5 xl:flex flex-col">
        <ManageVpsHostingBannerImage className="w-full h-fit" />
      </div>
    </div>
  );
};

export default ManagedVpsHostingBanner;
