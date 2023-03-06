"use client";
import { ArrowLongUpIcon } from "@heroicons/react/24/solid";
import React, { FC, useState } from "react";

interface IProps {
  product: IProduct;
  className: string;
}

const ProductCard: FC<IProps> = ({ product, className }) => {
  const [currentPackage, setCurrentPackage] = useState<string>("36month");

  const switchPlan = (selectedPackage: string) => {
    setCurrentPackage(selectedPackage);
    console.log(currentPackage);
  };

  return (
    <div className={className}>
      <h2>{product.title}</h2>
      <p>{currentPackage}</p>
      {/* @ts-ignore */}
      {/* <product.storage.icon className="w-10 h-10 mr-5 mt-2 lg:w-10 lg:h-10 xl:w-14 xl:h-14 fill-slate-300 dark:fill-slate-400" /> */}
      <select onChange={(e) => setCurrentPackage(e.target.value)}>
        <option value="1month">1 MONTH</option>
        <option value="12month">12 MONTHS</option>
        <option value="24month">24 MONTHS</option>
        <option value="36month">36 MONTHS</option>
      </select>
    </div>
  );
};

export default ProductCard;
