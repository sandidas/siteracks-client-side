import ProductCard from "@/Components/Card/ProductCard";
import React, { FC } from "react";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { Loader } from "@mantine/core";

interface IProps {
  product: IProduct;
  isLoading: boolean;
  isError?: boolean;
}

const WebHostingPricing: FC<IProps> = ({ product, isLoading, isError }) => {
  if (isLoading || !product) {
    // return a loading indicator or skeleton
    return <Loader color="green" />;
  }
  if (isError) {
    // handle the error state
    return <p>Sorry, something went wrong. Please refresh the page.</p>;
  }

  // const getPackage = products?.data;
  // To avoid a possible runtime error when trying to access the packages property of an undefined value, the || {} operator is used to provide a fallback value in case find() returns undefined. In this case, the fallback value is an empty object.
  // v1.0.
  // const { packages = [] } = products?.data.find((p: IProduct) => p?.nameSlug.includes("sharedWebHosting")) || {};
  // v2..
  const { packages = [] } = product || {};

  // const { packages } = products?.data.find((p: IProduct) => p?.nameSlug.includes("sharedWebHosting")) || { packages: [] };

  return (
    <div>
      <SectionTitle bottomSpace title="Choose Your Web Hosting Plan" />

      {packages.length === 0 ? (
        <h3 className="text-3xl font-bold text-primary text-center">Please refresh the page.</h3>
      ) : (
        <div id="pricingPlan" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-5">
          {packages.map((product: IProductPackage, index: number) => (
            // type for show items component by filter
            <ProductCard className="" key={index} type="wordpressHosting" product={product}></ProductCard>
          ))}
        </div>
      )}

      
    </div>
  );
};

export default WebHostingPricing;
