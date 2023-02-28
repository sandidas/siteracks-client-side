import React from "react";
import IconSiteRacks from "../Header/IconSiteRacks";

const Loader = () => {
  return (
    <section className="w-full fixed top-0 bottom-0 left-0 h-full dark:bg-black/50 z-[999999] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-6">
        <div className="animate-pulse hover:animate-bounce">
          <IconSiteRacks logoHeight="200px" logoWidth="200px" />
        </div>
        <h2>Welcome to the SiteRacks | Loading ....</h2>
      </div>
    </section>
  );
};

export default Loader;
