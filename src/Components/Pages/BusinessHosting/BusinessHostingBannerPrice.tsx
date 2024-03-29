import { getPriceForBanner } from "@/Components/Hooks/ApiCall";
import { Loader } from "@mantine/core";
import React, { FC } from "react";

interface IProps {
  products: { data: IProduct[] };
  isLoading: boolean;
  isError: boolean;
}

const BusinessHostingBannerPrice: FC<IProps> = ({ products, isLoading, isError }) => {
  if (isLoading) {
    // return a loading indicator or skeleton
    return <Loader color="green" />;
  }

  // select all services
  const services = products?.data;
  // select single service
  const getService = services && services.find((p: IProduct) => p?.nameSlug?.includes("businessHosting"));
  // select single package from service
  const getPackage = getService && getService?.packages?.find((p) => p?.typeSlug?.includes("startUpBusinessHosting"));
  // get calculated price

  const getCalculatedPackagePrice = getPriceForBanner(getPackage as IProductPackage);

  return <>${getCalculatedPackagePrice.toFixed(2)}</>;
};

export default BusinessHostingBannerPrice;
