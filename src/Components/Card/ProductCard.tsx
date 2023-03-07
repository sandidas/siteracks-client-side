"use client";
import { ArrowLongRightIcon, ArrowLongUpIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React, { FC, useState } from "react";
import ProductCardFeatureItem from "./ProductCardFeatureItem";
import ProductCardIcon from "./ProductCardIcon";

interface IProps {
  product: IProduct;
  className: string;
}

const buttonDataByMonth = [
  { name: "1 Month", call: 1 },
  { name: "12 Months", call: 12 },
  { name: "24 Months", call: 24 },
  { name: "36 Months", call: 36 },
];

const ProductCard: FC<IProps> = ({ product, className }) => {
  // get how much saving for 36 month package. to show new visitors.
  const preSaving = product?.monthlyPackage?.regularPrice * 36 - product?.trienniallyPackage?.regularPrice;
  const preSavingPercent = ((product?.monthlyPackage?.regularPrice * 36 - product?.trienniallyPackage?.regularPrice) / (product?.monthlyPackage?.regularPrice * 36)) * 100;
  //   const preSavingPercent = (78 / 100) * 100;

  // default 36 months selected
  const [currentPackage, setCurrentPackage] = useState<number>(36);
  const [price, setPrice] = useState<number>(product?.trienniallyPackage?.regularPrice / 36);
  const [orderLink, setOrderLink] = useState<string>(product?.trienniallyPackage?.orderLink);
  const [saving, setSaving] = useState<number>(preSaving);
  const [savingPercent, setSavingPercent] = useState<number>(preSavingPercent);

  // filter and select only non selected month names to show into view
  const nonSelectedMonth = buttonDataByMonth.filter((pkj) => pkj.call !== currentPackage);

  //   plan switcher
  const switchPlanByMonth = (selectedPackage: number) => {
    setCurrentPackage(selectedPackage);

    if (selectedPackage == 1) {
      setPrice(product?.monthlyPackage?.regularPrice);
      setOrderLink(product?.monthlyPackage?.orderLink);
      setSaving(0);
      // Use case. My original product price is $504, and going to offer it for $198. Now I have to calculate how much percentage we are going to offer.
      // ((totalPrice - discountedPrice) / totalPrice) * 100
      setSavingPercent(0);
    }
    if (selectedPackage == 12) {
      setPrice(product?.annuallyPackage?.regularPrice / 12);
      setOrderLink(product?.annuallyPackage?.orderLink);
      setSaving(product?.monthlyPackage?.regularPrice * 12 - product?.annuallyPackage?.regularPrice);
      setSavingPercent(((product?.monthlyPackage?.regularPrice * 12 - product?.annuallyPackage?.regularPrice) / (product?.monthlyPackage?.regularPrice * 12)) * 100);
    }
    if (selectedPackage == 24) {
      setPrice(product?.bienniallyPackage?.regularPrice / 24);
      setOrderLink(product?.bienniallyPackage?.orderLink);
      setSaving(product?.monthlyPackage?.regularPrice * 24 - product?.bienniallyPackage?.regularPrice);
      setSavingPercent(((product?.monthlyPackage?.regularPrice * 24 - product?.bienniallyPackage?.regularPrice) / (product?.monthlyPackage?.regularPrice * 24)) * 100);
    }
    if (selectedPackage == 36) {
      setPrice(product?.trienniallyPackage?.regularPrice / 36);
      setOrderLink(product?.trienniallyPackage?.orderLink);
      setSaving(product?.monthlyPackage?.regularPrice * 36 - product?.trienniallyPackage?.regularPrice);
      setSavingPercent(((product?.monthlyPackage?.regularPrice * 36 - product?.trienniallyPackage?.regularPrice) / (product?.monthlyPackage?.regularPrice * 36)) * 100);
    }
  };

  //   const Icon = product?.numberOfWebsites?.icon;
  // console.log(Icon);
  return (
    <div className={`px-5 space-y-2 py-10 flex flex-col xl:p-10 shadow-sm rounded-lg group hover:scale-105 duration-500 hover:border-primary border-b-4 border-transparent bg-surface`}>
      <div className="space-y-10 text-center">
        <div className="space-y-2">
          <h2 className="text-title font-bold text-3xl">{product?.title}</h2>
          <p className="text-text text-sm">{product?.shortDescription}</p>
        </div>

        <div className="space-y-7">
          {/* How much saving the money */}
          <div className="flex justify-center items-center py-2 space-x-2 text-text text-sm">
            {" "}
            <span className="line-through ">
              {/* if selected price not monthly it will show monthly price in line through  */}
              {currentPackage !== 1 && <span>${product?.monthlyPackage?.regularPrice}</span>}
            </span>
            <div className="bg-green-600/10 px-3 py-1 rounded-2xl font-medium text-primary">SAVE ${saving.toFixed(2)}</div>
          </div>

          <div>
            {/* Selected package price  */}
            <div className="text-text text-sm">
              {" "}
              {currentPackage} {currentPackage == 1 ? "Month" : "Months"} period
            </div>
            <div className="flex py-2 justify-center">
              <div className="text-title font-bold text-6xl">{price.toFixed(1)} </div>
              <div className="text-indigo-300 pt-6">/mo</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Button
            sx={(theme) => ({
              backgroundColor: theme.colorScheme === "dark" ? theme.colors.main[8] : theme.colors.main[7],
            })}
            component="a"
            href={orderLink}
            fullWidth
            size="lg"
            className="shadow-lg transition ease-in-out duration-500 group-hover:text-white group-hover:bg-black"
          >
            Order Now
            <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
          </Button>
          <p className="text-slate-400 text-sm">The renewal price is the same.</p>
        </div>

        {/* Monthly Package button  */}
        <div className="grid grid-cols-4 divide-x-2 dark:divide-slate-700 border-2 dark:border-slate-700 border-slate-100">
          {buttonDataByMonth.map((btn, index) => (
            <button className={`py-2 hover:bg-primary hover:text-white ${currentPackage == btn.call ? "text-text bg-surface" : "text-slate-400"}`} onClick={() => switchPlanByMonth(btn?.call)} key={index}>
              {btn?.call} <small>Mo.</small>
            </button>
          ))}
        </div>
      </div>
      <hr className="py-5 border-t-2" />
      <div className="space-y-6">
        <div>
          <p className="text-slate-400 text-sm text-center">
            No hidden cost, no extra charge. <br /> You are getting an additional <strong>{savingPercent.toFixed(0)}%</strong> off for a lifetime.
          </p>
        </div>
        <div className="space-y-1">
          <div>
            <ProductCardFeatureItem feature={product?.numberOfWebsites} />
            <ProductCardFeatureItem feature={product?.storage} />
            <ProductCardFeatureItem feature={product?.monthlyVisits} />
            <ProductCardFeatureItem feature={product?.bandwidth} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
