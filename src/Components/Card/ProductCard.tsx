"use client";
import { ArrowLongUpIcon } from "@heroicons/react/24/solid";
import React, { FC, useState } from "react";

interface IProps {
  product: IProduct;
  className: string;
}

const buttonDataByMonth = [
  { name: "1", call: "1month" },
  { name: "12", call: "12month" },
  { name: "24", call: "24month" },
  { name: "36", call: "36month" },
];

const ProductCard: FC<IProps> = ({ product, className }) => {
  const [currentPackage, setCurrentPackage] = useState<string>("36month");

  // filter and select only non selected month names to show into view
  const nonSelectedMonth = buttonDataByMonth.filter((pkj) => pkj.call !== currentPackage);

  const switchPlan = (selectedPackage: string) => {
    setCurrentPackage(selectedPackage);
    console.log(currentPackage);
  };

  return (
    <div className={`px-5 space-y-2 py-10 flex flex-col xl:p-10 shadow-sm rounded-lg group hover:-translate-y-2 duration-200 border-2 border-t-2 border-slate-100 dark:border-slate-800  hover:border-primary dark:hover:border-primary`}>
      <div className="space-y-5">
        <div>
          <h2 className="text-title font-bold text-3xl">{product?.title}</h2>
          <p>{product?.shortDescription}</p>
        </div>
        <div>
            ${product}
        </div>


        {/* Monthly Package button  */}
        <div className="grid grid-cols-3 divide-x-2 dark:divide-slate-700 border dark:border-slate-700">
          {nonSelectedMonth.map((btn, index) => (
            <button className="py-2 hover:bg-primary hover:text-white" onClick={() => setCurrentPackage(btn?.call)} key={index}>
              {btn?.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
