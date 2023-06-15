import { getPriceForBanner } from "@/Components/Hooks/ApiCall";
import { Loader } from "@mantine/core";
import React, { FC } from "react";
interface IProps {
  product?: IProduct;
  isLoading: boolean;
  typeSlugName: string;
}

const BannerPrice: FC<IProps> = ({ product, isLoading, typeSlugName }) => {
  if (isLoading || !product) {
    // return a loading indicator or skeleton
    return <Loader color="green" />;
  }
  // select single package from service
  const getPackage = product && product?.packages?.find((p) => p?.typeSlug?.includes(typeSlugName));
  // get calculated price
  const getCalculatedPackagePrice = getPriceForBanner(getPackage as IProductPackage);

  return <>${getCalculatedPackagePrice.toFixed(2)}</>;
};

export default BannerPrice;
