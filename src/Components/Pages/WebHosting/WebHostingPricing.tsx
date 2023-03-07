import ProductCard from "@/Components/Card/ProductCard";
import { IProductProps } from "@/pages/web-hosting";
import React, { FC } from "react";
import { webHosting } from "@/Components/Data/ProductData";
interface IProps {
  products: [];
}

const WebHostingPricing = () => {
  return (
    <div id="pricingPlan" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
      {webHosting.map((product, key) => (
        <ProductCard className="" key={key} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default WebHostingPricing;
