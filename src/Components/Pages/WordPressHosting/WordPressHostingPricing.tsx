import ProductCard from "@/Components/Card/ProductCard";
import { wordpressHostingData } from "@/Components/Data/ProductDataWordPressHosting";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { useProducts } from "@/Context/ReactQueryProvider";
import { Loader } from "@mantine/core";
import React from "react";

const WordPressHostingPricing = () => {
  const { products, isLoading, isError } = useProducts();
  if (isLoading) {
    // return a loading indicator or skeleton
    return <Loader color="green" />;
  }

  if (isError) {
    // handle the error state
    return <p>Sorry, something went wrong. Please refresh the page.</p>;
  }
  const getPackages = products?.data;
  const { packages } = getPackages.find((p: IProduct) => p?.nameSlug.includes("wordPressHosting"));

  return (
    <div>
      <SectionTitle bottomSpace title="Choose Your WordPress Hosting Plan" />
      <div id="pricingPlan" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-5">
        {packages
          ? packages.map((product: IProductPackage, index: number) => (
              // type for show items component by filter
              <ProductCard className="" key={index} type="wordpressHosting" product={product}></ProductCard>
            ))
          : "Please refresh the page."}
      </div>
    </div>
  );
};

export default WordPressHostingPricing;
