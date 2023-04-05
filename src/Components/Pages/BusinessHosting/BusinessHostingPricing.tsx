import ProductCard from "@/Components/Card/ProductCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { useProducts } from "@/Context/ReactQueryProvider";
import { Loader } from "@mantine/core";

import React from "react";
// interface IProps {
//   data: IProduct;
// }

const BusinessHostingPricing = () => {
  const { products, isLoading, isError } = useProducts();

  // useQuery hook: This is a hook provided by react-query library that is used to fetch data using a QueryClient. It takes three arguments:
  // const { queryClient } = useReactQueryContext();
  //     { data: products, isLoading }: This is object destructuring that extracts two properties from the useQuery hook's result:

  // const { data: products, isLoading, isError } = useQuery(['products'], fetchProducts, {
  //   initialData: queryClient.getQueryData(['products']),

  // })

  if (isLoading) {
    // return a loading indicator or skeleton
    return <Loader color="green" />;
  }

  if (isError) {
    // handle the error state
    return <p>Sorry, something went wrong. Please refresh the page.</p>;
  }

  const getPackages = products?.data;
  const { packages } = getPackages.find((p: IProduct) => p?.nameSlug.includes("businessHosting"));

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
