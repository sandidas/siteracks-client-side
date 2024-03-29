import { getPriceForBanner } from "@/Components/Hooks/ApiCall";
import { Loader } from "@mantine/core";
import React, { FC } from "react";
interface IProps {
  product?: IProduct;
  isLoading: boolean;
}

const WebHostingBannerPrice: FC<IProps> = ({ product, isLoading }) => {
  if (isLoading || !product) {
    // return a loading indicator or skeleton
    return <Loader color="green" />;
  }
  // select all services
  const services = product;
  // select single service
  // const getService = services && services.find((p: IProduct) => p?.nameSlug?.includes("sharedWebHosting"));
  // select single package from service
  const getPackage = services?.packages?.find((p) => p?.typeSlug?.includes("standardWebHosting"));
  // get calculated price
  const getCalculatedPackagePrice = getPriceForBanner(getPackage as IProductPackage);

  return <>${getCalculatedPackagePrice.toFixed(2)}</>;
};

export default WebHostingBannerPrice;
