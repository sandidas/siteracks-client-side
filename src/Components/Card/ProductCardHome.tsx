import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React, { FC } from "react";
import { getPriceForBanner } from "../Hooks/ApiCall";
interface IProps {
  product: IProductPricing;
}

const ProductCardHome: FC<IProps> = ({ product }) => {
  const pNameSlug = product?.nameSlug ? product?.nameSlug : "";

  const packagePrice = getPriceForBanner(product?.nameSlug, product?.child[0]?.typeSlug);

  console.log(product?.nameSlug);
  console.log(product?.child[0]?.typeSlug);
  // console.log(packagePrice);
  //   console.log(product);
  return (
    <>
      <div className="space-y-5 shadow-md rounded-md bg-surfaceFive p-10 hover:-translate-y-3 duration-200 group">
        <div className="space-y-4 md:min-h-[280px]">
          {/* <WebHosting className="fill-white w-20 h-20" /> */}
          <h2 className="text-white font-bold text-3xl"> {product?.title}</h2>
          <p className="text-secondaryOn text-slate-100">{product?.shortDescription}</p>
        </div>
        <div>
          <div className="text-sky-600">Starting at</div>
          <div className="flex">
            <div className="text-sky-600 font-bold text-5xl group-hover:text-white">${packagePrice && packagePrice?.toFixed(2)} </div>
            <div className="text-sky-600 pt-3">/mo</div>
          </div>
        </div>
        <Button size="xl" className="bg-white shadow transition ease-in-out duration-500 text-gray-600 group-hover:text-white group-hover:bg-black">
          See Plans
          <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
        </Button>
      </div>
    </>
  );
};

export default ProductCardHome;
