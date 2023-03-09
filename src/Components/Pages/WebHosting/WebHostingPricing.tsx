import ProductCard from "@/Components/Card/ProductCard";
import { IProductProps } from "@/pages/web-hosting";
import React, { FC } from "react";
import { webHostingData } from "@/Components/Data/ProductDataWebHosting";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";

const WebHostingPricing = () => {

  return (
    <div>
      <SectionTitle bottomSpace title="Choose Your Web Hosting Plan" />
      <div id="pricingPlan" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {webHostingData.map((product, key) => (
          // type for show items component by filter
          <ProductCard className="" key={key} type="sharedWebHosting" product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default WebHostingPricing;
