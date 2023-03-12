import Logo from "@/Components/Header/Logo";
import React from "react";

const BrandAssetsBanner = () => {
  return (
    <div className="max-w-3xl mx-auto px-3 md:px-5 pb-[8vh] pt-[12vh]">
      {/* left column  */}
      <div className="text-center flex flex-col items-center space-y-7">
        <div>
          <h1 className="text-5xl lg:text-6xl md:leading-tight lg:leading-tight text-title font-bold">BRAND ASSETS</h1>
          {/* <Logo logoHeight="100px" logoWidth="600px" /> */}
        </div>
        <p className="text-text lg:text-xl lg:leading-9">For your convenience, we have provided some useful guidelines on how to utilize the SiteRacks brand and downloadable assets.</p>
      </div>
    </div>
  );
};

export default BrandAssetsBanner;
