import ProductCard from "@/Components/Card/ProductCard";
import { businessHostingData } from "@/Components/Data/ProductDataBusinessHosting";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";

const BusinessHostingPricing = () => {
  return (
    <div>
      <SectionTitle bottomSpace title="Choose Your Business Hosting Plan" />
      <div id="pricingPlan" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-5">
        {businessHostingData.map((product, key) => (
          // type for show items component by filter
          <ProductCard className="" key={key} type="businessHosting" product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BusinessHostingPricing;
