import ProductCard from "@/Components/Card/ProductCard";
import { wordpressHostingData } from "@/Components/Data/ProductDataWordPressHosting";


import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";

const WordPressHostingPricing = () => {


  return (
    <div>
      <SectionTitle bottomSpace title="Choose Your WordPress Hosting Plan" />
      <div id="pricingPlan" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {wordpressHostingData.map((product, key) => (
          // type for show items component by filter
          <ProductCard className="" key={key} type="wordpressHosting" product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default WordPressHostingPricing;
