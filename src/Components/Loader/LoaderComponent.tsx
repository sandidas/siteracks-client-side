import { useLoaderContext } from "@/Context/LoaderProvider";
import { Loader } from "@mantine/core";
import React from "react";
import IconSiteRacks from "../Header/IconSiteRacks";

const LoaderComponent = () => {
  const { loading } = useLoaderContext();
  return (
    <section className="fixed right-10 bottom-10">
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
