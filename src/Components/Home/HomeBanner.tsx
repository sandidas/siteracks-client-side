import React from "react";
import HomeBannerImage from "../../../public/images/homeBanner.svg";

const HomeBanner = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-3 md:px-5 grid grid-cols-1 md:grid-cols-12 pt-[10vh] pb-[4vh] gap-3 md:5 xl:gap-16 2xl:gap-32">
      
      {/* left column  */}
      <div className="md:col-span-8 flex flex-col space-y-8 justify-center">
        <h1 className="font-poppins text-5xl lg:text-6xl md:leading-tight text-title font-bold">
          <span className="">WordPress Optimized</span> Blazing Fast
          <span className="text-primary"> Web Hosting</span>
          {/*  */}
        </h1>
        <p className="text-text text-xl leading-9">Whether you are just starting, growing fast, or running a high-traffic website, your secure and reliable web hosting services allow you to choose what works best for your brand.</p>
      </div>
      {/* right column  */}
      <div className="md:col-span-4 flex flex-col justify-start items-center w-full ">
        <HomeBannerImage className="w-full h-fit" />
      </div>


    </section>
  );
};

export default HomeBanner;
