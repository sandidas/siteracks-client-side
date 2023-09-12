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
    <div className="max-w-screen-2xl mx-auto px-5 grid grid-cols-1 xl:grid-cols-12 xl:gap-5">
      {/* left column  */}
      <div className="xl:col-span-7 flex flex-col items-center xl:items-start group max-w-4xl gap-8 xl:gap-5 py-[8vh] xl:py-[10vh] mx-auto xl:min-h-fit justify-center">
        <h1 className="flex flex-col md:leading-normal text-center xl:text-left">
          <span className="uppercase text-xs xl:text-xl font-bold tracking-wider">Easy To Use, WordPress Optimized</span>
          <span className="text-4xl lg:text-6xl text-title font-bold lg:leading-tight">Blazing Fast Web Hosting</span>
          <span className="uppercase  text-xs xl:text-xl">
            With <span className="uppercase  text-xs xl:text-xl font-bold text-primary tracking-wider">Dedicated WordPress Expert</span>{" "}
          </span>
        </h1>

        <p className="text-text lg:text-base hidden xl:block  text-center xl:text-left">
          Whether you are just starting, growing fast, or running a high-traffic website, your <span className="text-primary font-bold">SITERACKS</span> web hosting services allow you to choose what works best for your brand.
        </p>
        <ul className="text-text gap-2 flex flex-wrap flex-col items-center xl:items-start text-center xl:text-left ">
          <li className="bg-lime-500/20 dark:bg-lime-500/20 text-title px-2 py-1 lg:px-5 lg:font-bold rounded shadow hover:translate-x-2 duration-200 text-sm xl:text-base">Free & Easy Website Migration</li>
          <li className="bg-green-500/10 dark:bg-green-500/20  text-title px-2 py-1 lg:px-5 lg:font-bold rounded shadow hover:translate-x-2 duration-200 text-sm xl:text-base">24/7 priority support</li>
          <li className="bg-violet-500/20 dark:bg-violet-500/20  text-title px-2 py-1 lg:px-5 lg:font-bold rounded shadow hover:translate-x-2 duration-200  text-sm xl:text-base">Free-.com domain, SSL, Email, and Backups</li>
          {/* <li className="bg-purple-500/10 dark:bg-purple-500/10 px-2 py-1 lg:px-5 lg:font-bold rounded shadow hover:translate-x-2 duration-200">Dedicated WordPress expert</li> */}
          <li className="bg-blue-500/20 dark:bg-blue-500/20  text-title px-2 py-1 lg:px-5 lg:font-bold rounded shadow hover:translate-x-2 duration-200  text-sm xl:text-base">30-day of money back guarantee</li>
        </ul>

        <div className="text-center flex flex-col items-center xl:items-start xl:text-left">
          <div className="flex space-x-1">
            <div className="text-text pt-3">Starting at </div>

            <div className="text-primary font-bold text-4xl group-hover:text-text">
              <HomeBannerPrice products={products} />
            </div>

            <div className="text-text pt-3">/mo*</div>
          </div>
          <p className="text-sm m-0">
            Powered by <span className="text-primary font-medium">AWS and Digital Ocean</span> Premium servers
          </p>
        </div>

        <Button component="button" onClick={handleClick} size="lg" className="shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary w-full xl:w-4/12">
          View Plans
          <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
        </Button>
      </div>
      {/* right column  */}
      <div className="items-center justify-center w-full hidden xl:col-span-5 xl:flex flex-col">
        <HomeBannerImage className="w-full h-fit" />
      </div>
    </div>
  );
};

export default HomeBanner;
