import ProductCard from "@/Components/Card/ProductCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { Loader } from "@mantine/core";

import React, { FC } from "react";

interface IProps {
  products: {
    data: IProduct[];
  };
  isLoading: boolean;
  isError: boolean;
}

const BusinessHostingPricing: FC<IProps> = ({ products, isLoading, isError }) => {
  if (isLoading) {
    // return a loading indicator or skeleton
    return <Loader color="green" />;
  }

  if (isError) {
    // handle the error state
    return <p>Sorry, something went wrong. Please refresh the page.</p>;
  }
  // const getPackage = products?.data;
  // To avoid a possible runtime error when trying to access the packages property of an undefined value, the || {} operator is used to provide a fallback value in case find() returns undefined. In this case, the fallback value is an empty object.
  const { packages = [] } = products?.data.find((p: IProduct) => p?.nameSlug.includes("businessHosting")) || {};
  // const { packages } = products?.data.find((p: IProduct) => p?.nameSlug.includes("businessHosting")) || { packages: [] };

  return (
    <div>
      <SectionTitle bottomSpace title="Choose Your Business Hosting Plan" />
      <div id="pricingPlan" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-5">
        {packages.map((product: IProductPackage, index: number) => (
          // type for show items component by filter
          <ProductCard className="" key={index} type="businessHosting" product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BusinessHostingPricing;
