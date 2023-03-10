import ProductCard from "@/Components/Card/ProductCard";
import { resellerHostingData } from "@/Components/Data/ProductDataResellerHosting";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";

const ResellerHostingPricing = () => {
  return (
    <div>
      <SectionTitle bottomSpace title="Choose Your Reseller Hosting Plan" />
      <div id="pricingPlan" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-5">
        {resellerHostingData.map((product, key) => (
          // type for show items component by filter
          <ProductCard className="" key={key} type="resellerHosting" product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ResellerHostingPricing;
