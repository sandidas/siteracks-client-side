import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button, Loader } from "@mantine/core";
import { useRouter } from "next/router";
import React, { FC } from "react";
import HomeBannerImage from "../../../public/images/webHosting/home-page-banner.svg";
import HomeBannerPrice from "./HomeBannerPrice";

interface IProps {
  products: IProduct[];
  isLoading?: boolean;
  isError?: boolean;
}

const HomeBanner: FC<IProps> = ({ products, isLoading }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/wordpress-hosting/#orderNow");
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 pt-[8vh] md:pt-[12vh] pb-[8vh] gap-16 md:5 xl:gap-16 2xl:gap-32">
      {/* left column  */}
      <div className="flex flex-col justify-center items-start space-y-8 group">
        <h1 className="flex flex-col md:leading-normal space-y-3">
          <span className="uppercase text-xl font-bold tracking-wider">Easy To Use, WordPress Optimized</span>
          <span className="text-4xl lg:text-6xl text-title font-bold lg:leading-tight">Blazing Fast Web Hosting</span>
          <span className="uppercase text-xl">
            With <span className="uppercase text-xl font-bold text-primary tracking-wider">Dedicated WordPress Expert</span>{" "}
          </span>
        </h1>

        <p className="text-text lg:text-xl lg:leading-9">
          Whether you are just starting, growing fast, or running a high-traffic website, your <span className="text-primary font-bold">SITERACKS</span> web hosting services allow you to choose what works best for your brand.
        </p>
        <ul className="text-text space-y-3 flex flex-wrap flex-col items-start">
          <li className="bg-lime-500/10 dark:bg-lime-500/20 px-2 py-1 lg:px-5 lg:font-bold rounded shadow hover:translate-x-2 duration-200">Free & Easy Website Migration</li>
          <li className="bg-green-500/10 dark:bg-green-500/20 px-2 py-1 lg:px-5 lg:font-bold rounded shadow hover:translate-x-2 duration-200">24/7 priority support</li>
          <li className="bg-violet-500/10 dark:bg-violet-500/20 px-2 py-1 lg:px-5 lg:font-bold rounded shadow hover:translate-x-2 duration-200">Free-.com domain, SSL, Email, and Backups</li>
          {/* <li className="bg-purple-500/10 dark:bg-purple-500/10 px-2 py-1 lg:px-5 lg:font-bold rounded shadow hover:translate-x-2 duration-200">Dedicated WordPress expert</li> */}
          <li className="bg-blue-500/10 dark:bg-blue-500/20 px-2 py-1 lg:px-5 lg:font-bold rounded shadow hover:translate-x-2 duration-200">30-day of money back guarantee</li>
        </ul>

        <Button component="button" onClick={handleClick} size="xl" className="shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
          View Plans
          <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
        </Button>
        <div className="space-y-3">
          <div className="flex space-x-1">
            <div className="text-text pt-3">Starting at </div>

            <div className="text-primary font-bold text-4xl group-hover:text-text">
              <HomeBannerPrice products={products} />
            </div>

            <div className="text-text pt-3">/mo*</div>
          </div>
          <p className="text-sm">
            Powered by <span className="text-primary font-medium">AWS and Digital Ocean</span> Premium servers
          </p>
        </div>
      </div>
      {/* right column  */}
      <div className="flex flex-col justify-start items-center w-full">
        <div className="grow"></div>
        <HomeBannerImage className="w-full h-fit" />
      </div>
    </div>
  );
};

export default HomeBanner;
