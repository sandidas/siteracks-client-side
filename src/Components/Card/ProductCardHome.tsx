import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React, { FC } from "react";
import { getPriceForBanner } from "../Hooks/ApiCall";
import Icon from "../Hooks/Icon";
interface IProps {
  product: IProduct;
}

const ProductCardHome: FC<IProps> = ({ product }) => {
  // console.log("product", product);

  // To get package price, here I am sending 2 props by "getPriceBanner" props 1) product prices name slug, ex. wordPressHosting
  // props 2: child[0], that means 1st item of child, ex. "typeSlug": "standardWpHosting"
  const packagePrice = getPriceForBanner(product?.packages[0]);

  //   console.log(product?.nameSlug);
  //   console.log(product?.child[0]?.typeSlug);

  return (
    <>
      <div className={`space-y-5 shadow-md rounded-md p-10 hover:-translate-y-3 duration-200 group ${product?.customBGClassName}`}>
        <div className="space-y-4 md:min-h-[280px]">
          {/* <WebHosting className="fill-white w-20 h-20" /> */}
          <Icon iconName={product?.icon} customClass={product?.customIconClassName} />

          <h2 className={`font-bold text-3xl flex flex-col pt-1 ${product?.customTitleClassName}`}>
            {product?.preTitle && <small className="text-xs w-full">{product?.preTitle} </small>}

            <span className="-mt-2">{product?.title}</span>
          </h2>
          <p className={`${product?.customTextClassName}`}>{product?.shortDescription}</p>
        </div>
        <div>
          <div className={`${product?.customPriceCLassName}`}>Starting at</div>
          <div className="flex">
            <div className={`${product?.customPriceCLassName} font-bold text-5xl`}>${packagePrice && packagePrice?.toFixed(2)} </div>
            <div className={`${product?.customPriceCLassName} pt-3`}>/mo</div>
          </div>
        </div>
        <Button component="a" href={product?.seePlansLink} size="xl" className="bg-white shadow transition ease-in-out duration-500 text-gray-600 group-hover:text-white group-hover:bg-black">
          See Plans
          <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
        </Button>
      </div>
    </>
  );
};

export default ProductCardHome;
