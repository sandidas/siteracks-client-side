import Image from "next/image";
import React from "react";
import HomeBannerImage from "../../../public/images/homeBanner.svg"

const HomeBanner = () => {


  return (
    <section
     className="max-w-screen-2xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 py-[8vh] gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="font-poppins text-5xl md:text-6xl md:leading-tight text-title">
        <small className="text-2xl text-primary">Blazing Fast </small>
        <br />
        <span className="text-primary">Web Hosting</span> for Tomorrow's Business
        </h1>
        <p className="text-text text-xl">Whether you are just starting, growing fast, or running a high-traffic website, your secure and reliable web hosting services allow you to choose what works best for your brand.</p>
      </div>

      <div className="flex flex-col justify-start items-center">
        <HomeBannerImage className="w-3/4 h-96" /> 
      </div>
    </section>
  );
};

export default HomeBanner;
