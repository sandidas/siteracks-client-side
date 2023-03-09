"use client";
import { ArrowLongDownIcon, ArrowLongRightIcon, ArrowLongUpIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import Link from "next/link";
import React, { FC, useState } from "react";
import ProductCardSharedWebHostingItems from "./ProductCardSharedWebHostingItems";
import toast from "react-hot-toast";
import ProductCardWordPressHostingItems from "./ProductCardWordPressHostingItems";
import ProductCardBusinessHostingItems from "./ProductCardBusinessHostingItems";

interface IProps {
  product: IProduct;
  className?: string;
  type?: string;
}

const buttonDataByMonth = [
  { name: "1 Month", call: 1 },
  { name: "12 Months", call: 12 },
  { name: "24 Months", call: 24 },
  { name: "36 Months", call: 36 },
];

const ProductCard: FC<IProps> = ({ product, className, type }) => {
  const calculateSavingAmount = (totalMonths: number, currentRegularPrice: number, additionalDiscount: number) => {
    // math rules: (monthlyRegularPrice * totalMonths) - (currentRegularPrice - additionalDiscount)
    const monthlyRegularPrice = product?.monthlyPackage?.regularPrice;
    const totalMonthlyPrice = monthlyRegularPrice * totalMonths;
    const afterDiscountCurrentPriceIs = currentRegularPrice - additionalDiscount;
    const result = totalMonthlyPrice - afterDiscountCurrentPriceIs;
    return result;
  };

  const calculateSavingPercent = (totalMonths: number, currentRegularPrice: number, additionalDiscount: number) => {
    // math rules ((totalPrice - discountedPrice) / totalPrice) * 100
    const monthlyRegularPrice = product?.monthlyPackage?.regularPrice;
    const totalMonthlyPrice = monthlyRegularPrice * totalMonths;
    const afterDiscountCurrentPriceIs = currentRegularPrice - additionalDiscount;
    const result = ((totalMonthlyPrice - afterDiscountCurrentPriceIs) / totalMonthlyPrice) * 100;
    return result;
  };

  // get how much saving for 36 month package. to show new visitors.
  const preSaving = calculateSavingAmount(36, product?.trienniallyPackage?.regularPrice, product?.trienniallyPackage?.additionalDiscount);
  const preSavingPercent = calculateSavingPercent(36, product?.trienniallyPackage?.regularPrice, product?.trienniallyPackage?.additionalDiscount);
  //   const preSavingPercent = (78 / 100) * 100;

  // default 36 months selected
  const [currentPackage, setCurrentPackage] = useState<number>(36);
  const [price, setPrice] = useState<number>((product?.trienniallyPackage?.regularPrice - product?.trienniallyPackage?.additionalDiscount) / 36);
  const [orderLink, setOrderLink] = useState<string>(product?.trienniallyPackage?.orderLink);
  const [saving, setSaving] = useState<number>(preSaving);
  const [savingPercent, setSavingPercent] = useState<number>(preSavingPercent);
  const [payToday, setPayToday] = useState<number>(product?.trienniallyPackage?.regularPrice - product?.trienniallyPackage?.additionalDiscount);

  // this for show and hide more features items
  const [showAllFeature, setShowAllFeature] = useState(false);

  // filter and select only non selected month names to show into view
  // for now we are not using this function
  const nonSelectedMonth = buttonDataByMonth.filter((pkj) => pkj.call !== currentPackage);

  //   plan switcher
  const switchPlanByMonth = (selectedPackage: number) => {
    setCurrentPackage(selectedPackage);

    if (selectedPackage == 1) {
      setPrice(product?.monthlyPackage?.regularPrice - product?.monthlyPackage?.additionalDiscount);
      setOrderLink(product?.monthlyPackage?.orderLink);
      setSaving(0);
      // Use case. My original product price is $504, and going to offer it for $198. Now I have to calculate how much percentage we are going to offer.
      // ((totalPrice - discountedPrice) / totalPrice) * 100
      setSavingPercent(0);
      setPayToday(product?.monthlyPackage?.regularPrice - product?.monthlyPackage?.additionalDiscount);
    }
    if (selectedPackage == 12) {
      setPrice((product?.annuallyPackage?.regularPrice - product?.annuallyPackage?.additionalDiscount) / 12);
      setOrderLink(product?.annuallyPackage?.orderLink);
      // setSaving(product?.monthlyPackage?.regularPrice * 12 - product?.annuallyPackage?.regularPrice);
      // setSavingPercent(((product?.monthlyPackage?.regularPrice * 12 - product?.annuallyPackage?.regularPrice) / (product?.monthlyPackage?.regularPrice * 12)) * 100);
      const totalSavings = calculateSavingAmount(12, product?.annuallyPackage?.regularPrice, product?.annuallyPackage?.additionalDiscount);
      setSaving(totalSavings);
      setSavingPercent(calculateSavingPercent(12, product?.annuallyPackage?.regularPrice, product?.annuallyPackage?.additionalDiscount));

      setPayToday(product?.annuallyPackage?.regularPrice - product?.annuallyPackage?.additionalDiscount);
      const notification = `You are getting $${totalSavings.toFixed(0)} discount for 12 months package.`;
      toast.success(notification);
    }
    if (selectedPackage == 24) {
      setPrice((product?.bienniallyPackage?.regularPrice - product?.bienniallyPackage?.additionalDiscount) / 24);
      setOrderLink(product?.bienniallyPackage?.orderLink);
      const totalSavings = calculateSavingAmount(24, product?.bienniallyPackage?.regularPrice, product?.bienniallyPackage?.additionalDiscount);
      setSaving(totalSavings);
      setSavingPercent(calculateSavingPercent(24, product?.bienniallyPackage?.regularPrice, product?.bienniallyPackage?.additionalDiscount));
      setPayToday(product?.bienniallyPackage?.regularPrice - product?.bienniallyPackage?.additionalDiscount);

      const notification = `Congrats! You are getting $${totalSavings.toFixed(0)} discount for 24 months package.`;
      toast.success(notification);
    }
    if (selectedPackage == 36) {
      setPrice((product?.trienniallyPackage?.regularPrice - product?.trienniallyPackage?.additionalDiscount) / 36);
      setOrderLink(product?.trienniallyPackage?.orderLink);
      const totalSavings = calculateSavingAmount(36, product?.trienniallyPackage?.regularPrice, product?.trienniallyPackage?.additionalDiscount);
      setSaving(totalSavings);
      setSavingPercent(calculateSavingPercent(36, product?.trienniallyPackage?.regularPrice, product?.trienniallyPackage?.additionalDiscount));

      setPayToday(product?.trienniallyPackage?.regularPrice - product?.trienniallyPackage?.additionalDiscount);

      const notification = `Congrats! You are getting $${totalSavings.toFixed(0)} discount for 36 months package.`;
      toast.success(notification);
    }
  };

  return (
    <div className={`px-4 relative py-8 flex flex-col xl:px-8 xl:py-12 rounded-lg group hover:scale-x-105 duration-500 border-2 border-t-2 border-slate-100 dark:border-slate-800  hover:border-surface dark:hover:border-surface shadow-md hover:shadow-lg`}>
      {/* Absolute section for featured item */}
      {product?.featured && <div className="absolute text-center w-2/4 left-1/4 -top-5 text-white font-medium rounded-md py-1 bg-red-400 dark:bg-red-700">Most popular</div>}

      <div className="space-y-5 xl:space-y-10 text-center flex flex-col">
        <div className="space-y-2">
          <h2 className="text-title font-bold text-2xl">{product?.title}</h2>
          <p className="text-text text-sm">{product?.shortDescription}</p>
        </div>

        <div className="space-y-3 xl:space-y-7">
          {/* 
          
          How much saving the money 
          
          */}
          <div className="flex justify-center items-center py-2 space-x-2 text-text text-sm">
            {" "}
            <span className="line-through ">
              {/*
              
              if selected price not monthly it will show monthly price in line through 
              
              */}
              {currentPackage !== 1 && <span>${product?.monthlyPackage?.regularPrice}</span>}
            </span>
            {/* 

            if this is features then it will show in red 
            
            */}
            <div className={`${product?.featured ? "bg-red-400 dark:bg-red-700 text-white" : "bg-green-600/10 text-primary"} px-3 py-1 rounded-2xl font-bold`}>SAVE {savingPercent.toFixed(0)}%</div>
          </div>
          {/* 

          Selected package price 

          */}
          <div className="text-text text-sm">
            You are getting an additional <br /> <strong>${saving.toFixed(2)}</strong> off for <strong>{currentPackage}</strong> {currentPackage == 1 ? "Month" : "Months"} period
          </div>
          <div>
            <div className="flex py-2 justify-center">
              <div className="text-title font-bold text-5xl">${price.toFixed(2)} </div>
              <div className="text-indigo-300 pt-6">/mo</div>
            </div>
            <div className={`${product?.featured ? "text-red-400 dark:text-red-700" : "text-primary"} h-10 overflow-hidden font-medium`}>{currentPackage > 12 && product?.additionalMonth && product?.additionalMonth}</div>
          </div>
        </div>

        {/* 
        
        Order Button
        
        */}

        <div className="space-y-2 xl:space-y-4">
          <Button
            sx={(theme) => ({
              backgroundColor: theme.colorScheme === "dark" ? theme.colors.main[8] : theme.colors.main[7],
            })}
            component="a"
            href={orderLink}
            fullWidth
            size="lg"
            className={`shadow-lg transition ease-in-out duration-500 group-hover:text-white group-hover:bg-black dark:group-hover:bg-slate-700 ${product?.featured ? "bg-red-400 dark:bg-red-700" : ""}`}
          >
            Order Now
            <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
          </Button>
          <p className="text-slate-400 text-xs leading-relaxed">
            No hidden cost, no extra charge <br />
            You pay ${payToday.toFixed(2)} today for {currentPackage}{currentPackage == 1 ? " Month" : " Months"} period. <br /> The renewal price is the same.
          </p>
        </div>

        {/* 
        
        Monthly Package buttons: User can select which monthly package they want to purchase
        
        */}
        <div className="grid grid-cols-4 divide-x-2 dark:divide-slate-700 border-2 dark:border-slate-700 border-slate-100">
          {buttonDataByMonth.map((btn, index) => (
            <button className={`py-2 text-xs md:text-sm 2xl:text-base hover:bg-primary hover:text-white ${currentPackage == btn.call ? "text-text bg-surface" : "text-slate-400"}`} onClick={() => switchPlanByMonth(btn?.call)} key={index}>
              {btn?.call} <small>Mo.</small>
            </button>
          ))}
        </div>
      </div>
      <hr className="py-5 border-t-2 dark:border-slate-900" />

      {/* 
      
      // for the features we are calling another child component. to show different order list for different service pages.   
      
      // we get type from parent component.
      
      */}
      {/* Shared Web Hosting Child Compo */}
      {type == "sharedWebHosting" && <ProductCardSharedWebHostingItems className="" showAllFeature={showAllFeature} product={product} />}

      {/* WordPress Hosting Child Compo */}
      {type == "wordpressHosting" && <ProductCardWordPressHostingItems className="" showAllFeature={showAllFeature} product={product} />}

      {/* Business Hosting Child Compo */}
      {type == "businessHosting" && <ProductCardBusinessHostingItems className="" showAllFeature={showAllFeature} product={product} />}

      {/*
      
      Show hide more features items
      
      */}
      <div className="text-center pt-2">
        <Link href={`#${product?.slug}`} className="center w-full px-2 py-2  font-bold text-text text-base hover:text-primary flex justify-center items-start space-x-2" onClick={() => setShowAllFeature(!showAllFeature)}>
          {" "}
          {showAllFeature ? (
            <>
              <span>See less features</span>
              <ArrowLongUpIcon className="w-5 h-5" />
            </>
          ) : (
            <>
              <span>See all features</span>
              <ArrowLongDownIcon className="w-5 h-5" />
            </>
          )}{" "}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
