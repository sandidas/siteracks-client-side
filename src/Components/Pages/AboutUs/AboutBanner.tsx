import Logo from "@/Components/Header/Logo";
import React from "react";

const AboutBanner = () => {
  return (
    <div className="max-w-3xl mx-auto px-3 md:px-5 pb-[8vh] pt-[12vh]">
      {/* left column  */}
      <div className="text-center flex flex-col items-center space-y-7">
        <div>
          <h1 className="text-4xl lg:text-6xl md:leading-tight lg:leading-tight text-title font-bold">ABOUT</h1>
          <Logo logoHeight="100px" logoWidth="600px" />
        </div>
        <p className="text-text lg:text-xl lg:leading-9">Our hassle-free, exclusively managed hosting saves you time and money so you can focus on growing your business.</p>
      </div>
    </div>
  );
};

export default AboutBanner;
