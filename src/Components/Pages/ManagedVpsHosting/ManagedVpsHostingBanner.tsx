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
    <div className="max-w-screen-2xl mx-auto px-3 md:px-5 grid grid-cols-1 md:grid-cols-2 pt-[8vh] md:pt-[12vh] pb-[8vh] gap-16 md:5 xl:gap-16 2xl:gap-32">
      {/* left column  */}
      <div className="flex flex-col justify-center items-start space-y-8 group">
        <h1 className="flex flex-col space-y-3">
          <span className="uppercase text-xl font-bold tracking-wider">No Complexity, No Hassle</span>
          <span className="text-5xl lg:text-6xl text-title font-bold lg:leading-tight"> A 100% Fully Managed VPS Hosting.</span>
          <span className="uppercase text-xl">We manages all your server needs</span>
          <span className="uppercase text-xl font-bold text-primary tracking-wider"> so that you can focus on your business.</span> {/*  */}
        </h1>
        <p className="text-text lg:text-xl lg:leading-9">
          Our cost-effective and powerful managed VPS hosting plans are perfect for hosting websites on a secure and resilient infrastructure without the burden of managing the server. Don't wait any longer; pick the plan that suits your needs and start right away.
        </p>
        <ul className="text-text lg:text-xl space-y-3 list-disc pl-8">
          <li>Dedicated one-to-one support.</li>
          <li>Latest technologies with advanced security.</li>
          <li>Ready to Use Tools</li>
        </ul>

        <Button component="a" href="#orderNow" size="xl" className="bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
          View Plans
          <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
        </Button>
        <div>
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
      </div>

      {/* right column  */}
      <div className="flex flex-col justify-start items-center w-full">
        <ManageVpsHostingBannerImage className="w-full h-fit" />
      </div>
    </div>
  );
};

export default ManagedVpsHostingBanner;
