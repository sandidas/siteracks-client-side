import React, { FC } from "react";
import { ArrowLongRightIcon, ArrowLongUpIcon, CheckIcon } from "@heroicons/react/24/solid";

interface IProps {
  Icon?: any;
}

const ProductCardIcon: FC<IProps> = ({ Icon }) => {
    // console.log(compIcon);
  // const Icon = compIcon;
  return <>
  <Icon className="w-5 h-5 fill-red-500" />
  </>;
};

export default ProductCardIcon;
