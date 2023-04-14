import { useLoaderContext } from "@/Context/LoaderProvider";
import { Loader } from "@mantine/core";
import React from "react";
import IconSiteRacks from "../Header/IconSiteRacks";

const LoaderComponent = () => {
  const { loading } = useLoaderContext();
  return (
    <section className="w-full fixed top-0 bottom-0 left-0 h-full bg-white/80 dark:bg-black/90 z-[999999] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-6">
        <div className="">
          <IconSiteRacks logoHeight="100px" logoWidth="100px" />
        </div>
        <div className="w-1/4">
          {/* <div className={`bg-primary h-1 w-1 animate-spin`}></div> */}
          <Loader color="green" variant="bars" />
        </div>
      </div>
    </section>
  );
};

export default LoaderComponent;
