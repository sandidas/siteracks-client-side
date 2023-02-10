import React from "react";
import HomeBannerImage from "../../../public/images/homeBanner.svg";

const HomeBanner = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-3 md:px-5 grid grid-cols-1 md:grid-cols-12 pt-[10vh] pb-[4vh] gap-10 md:gap-32">
      <div className="flex flex-col gap-5 justify-center md:col-span-8">
        <h1 className="font-poppins text-5xl md:text-6xl md:leading-tight text-title font-bold">
          <span className="">WordPress Optimized</span> Blazing Fast  
          <span className="text-primary"> Web Hosting</span>  
          {/*  */}
        </h1>
        <p className="text-text text-xl leading-9">Whether you are just starting, growing fast, or running a high-traffic website, your secure and reliable web hosting services allow you to choose what works best for your brand.</p>
      </div>

      <div className="flex flex-col justify-start items-center w-full md:col-span-4">
        <HomeBannerImage className="w-full h-fit hidden md:block" />
      </div>
    </section>
  );
};

export default HomeBanner;
