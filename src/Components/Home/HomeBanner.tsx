import Image from "next/image";
import React from "react";
import HomeBannerImage from "../../../public/images/homeBanner.svg"
import HomeBannerImageSurface from "./public/images/homeBannerBgSurface.svg"

const HomeBanner = () => {


  return (
    <section
     className="max-w-screen-2xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 py-24 gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="font-poppins text-5xl md:text-6xl text-title">
        Blazing Fast Web <span className="text-primary">Hosting</span> for Tomorrow's Business
        </h1>
        <p className="text-text text-xl">Whether you are just starting, growing fast, or running a high-traffic website, your secure and reliable web hosting services allow you to choose what works best for your brand.</p>
      </div>

      <div className="flex flex-col justify-start items-center">

        <Image src={HomeBannerImage} alt="me" className="max-w-md h-96"  />
      </div>
    </section>
  );
};

export default HomeBanner;
