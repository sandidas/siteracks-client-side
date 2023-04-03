import ProductCard from "@/Components/Card/ProductCard";
import { businessHostingData } from "@/Components/Data/ProductDataBusinessHosting";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { fetchProducts, useReactQueryContext } from "@/Context/ReactQueryProvider";
import { Loader } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { get } from "http";
import React, { FC } from "react";
// interface IProps {
//   data: IProduct;
// }

const BusinessHostingPricing = () => {
  // const packagesPricing = data?.packages;
  // console.log("Data from Server: ", data);
  // console.log("Data from Local: ", businessHostingData);

  // useQuery hook: This is a hook provided by react-query library that is used to fetch data using a QueryClient. It takes three arguments:
  const { queryClient } = useReactQueryContext();
  //     { data: products, isLoading }: This is object destructuring that extracts two properties from the useQuery hook's result:
 
  const { data: products, isLoading, isError } = useQuery(['products'], fetchProducts, {
    initialData: queryClient.getQueryData(['products']),
  })

  // const {
  //   data: products,
  //   isLoading,
  //   isError,
  // } = useQuery(["products"], {
  //   initialData: queryClient.getQueryData(["products"]),
  // });


  if (isLoading) {
    // return a loading indicator or skeleton
    return <p>Loading...</p>;
  }

  if (isError) {
    // handle the error state
    return <p>Sorry, something went wrong.</p>;
  }

  const getpackages = products?.data;

  const { packages } = getpackages.find((p) => p?.nameSlug.includes("businessHosting"));
  console.log(packages);
  // console.log(packages);

  return (
    <div>
      <SectionTitle bottomSpace title="Choose Your Business Hosting Plan" />
      <div id="pricingPlan" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-5">
        {packages.map((product, index) => (
          // type for show items component by filter
          <ProductCard className="" key={index} type="businessHosting" product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BusinessHostingPricing;
