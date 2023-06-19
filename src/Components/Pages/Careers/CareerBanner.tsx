import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";

const CareerBanner = () => {
  return (
    <div className="max-w-3xl mx-auto px-3 md:px-5">
      <div className="text-center flex flex-col items-center space-y-7">
        <div>
          <h1 className="text-4xl lg:text-6xl md:leading-tight lg:leading-tight text-title font-bold">CAREERS</h1>
          <SectionTitle smallTitleSize title="Want to become a part of the SiteRacks family?" />
        </div>
        <p className="text-text lg:text-xl lg:leading-9">We want you to have a challenging and rewarding career that grooms you for higher success.</p>
      </div>
    </div>
  );
};

export default CareerBanner;
