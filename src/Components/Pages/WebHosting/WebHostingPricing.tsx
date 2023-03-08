import ProductCard from "@/Components/Card/ProductCard";
import { IProductProps } from "@/pages/web-hosting";
import React, { FC } from "react";
import { webHosting } from "@/Components/Data/ProductData";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { productPricingData } from "@/Components/Data/ProductPricing";

const WebHostingPricing = () => {



  return (
    <div>
      <SectionTitle bottomSpace title="Choose Your Web Hosting Plan" />
      <div id="pricingPlan" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {webHosting.map((product, key) => (
          // type for show items component by filter
          <ProductCard className="" key={key} type="sharedWebHosting" product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default WebHostingPricing;
