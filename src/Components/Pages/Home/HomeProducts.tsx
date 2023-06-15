import ProductCardHome from "@/Components/Card/ProductCardHome";
import { useProducts } from "@/Context/ReactQueryProvider";
import { Loader } from "@mantine/core";
import React, { FC } from "react";

interface IProps {
  products?: IProduct[];
  isLoading?: boolean;
  isError?: boolean;
}

const HomeProducts: FC<IProps> = ({ products, isLoading }) => {
  // const { products, isLoading, isError } = useProducts();
  // console.log("isLoading", isLoading);
  if (isLoading) {
    // return a loading indicator or skeleton
    return <Loader color="green" />;
  }

  // if (isError) {
  //   // handle the error state
  //   return <p>Sorry, something went wrong. Please refresh the page.</p>;
  // }
  // console.log("products", products);
  // console.log(products.length);
  const getPackages = products && products.length > 0 ? products : null;
  const packages = getPackages && getPackages.filter((p: IProduct) => p.nameSlug !== "resellerHosting");

  return <div className="grid gap-4 md:gap-6 xl:gap-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-[10vh]">{!packages ? <Loader color="green" /> : packages.map((product: IProduct, index: number) => <ProductCardHome key={index} product={product} />)}</div>;
};

export default HomeProducts;
