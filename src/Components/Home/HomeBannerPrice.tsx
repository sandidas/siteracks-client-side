import { Loader } from "@mantine/core";
import React, { FC } from "react";
import { getPriceForBanner } from "../Hooks/ApiCall";
interface IProps {
  products: IProduct[];
  isLoading?: boolean;
  isError?: boolean;
}
const HomeBannerPrice: FC<IProps> = ({ products }) => {
  if (!products) {
    // return a loading indicator or skeleton
    return <Loader color="green" />;
  }

  // select all services
  const services = products;
  // select single service

  const getService = services && services.find((p: IProduct) => p?.nameSlug?.includes("wordPressHosting"));
  // select single package from service
  const getPackage = getService && getService?.packages?.find((p) => p?.typeSlug?.includes("standardWpHosting"));

  // get calculated price
  const getCalculatedPackagePrice = getPriceForBanner(getPackage as IProductPackage);
  return <>${getCalculatedPackagePrice.toFixed(2)}</>;
};

export default HomeBannerPrice;
