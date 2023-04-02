import ProductCard from "@/Components/Card/ProductCard";
import { businessHostingData } from "@/Components/Data/ProductDataBusinessHosting";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React, { FC } from "react";
interface IProps {
  data: any;
}

const BusinessHostingPricing: FC<IProps> = ({ data }) => {
  const packagesPricing = data?.child;
  // console.log("Data from Server: ", data);
  // console.log("Data from Local: ", businessHostingData);

  return (
    <div>
      <SectionTitle bottomSpace title="Choose Your Business Hosting Plan" />
      <div id="pricingPlan" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-5">
        {packagesPricing.map((product, index) => (
          // type for show items component by filter
          <ProductCard className="" key={index} type="businessHosting" product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BusinessHostingPricing;
