"use client";
import { ArrowLongDownIcon, ArrowLongRightIcon, ArrowLongUpIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import Link from "next/link";
import React, { FC, useState } from "react";
import ProductCardSharedWebHostingItems from "./ProductCardSharedWebHostingItems";
import toast from "react-hot-toast";
import ProductCardWordPressHostingItems from "./ProductCardWordPressHostingItems";
import ProductCardBusinessHostingItems from "./ProductCardBusinessHostingItems";
import ProductCardManagedVpsHostingItems from "./ProductCardManagedVpsHostingItems";

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
  // common variables needs bellow functionality
  const monthlyRegularPrice = product?.monthlyPackage?.regularPrice;
  const threeYearPackage = product?.trienniallyPackage;
  const twoYearPackage = product?.bienniallyPackage;
  const oneYearPackage = product?.annuallyPackage;

  const calculateSavingAmount = (totalMonths: number, currentRegularPrice: number, additionalDiscount: number) => {
    // when discounting in percentage
    // calculate regular price after discounting.
    // discounted_price = original_price - (original_price * discount / 100)
    const regularPriceAfterDiscountInPercent = currentRegularPrice - (currentRegularPrice * additionalDiscount) / 100;
    const totalMonthlyPrice = monthlyRegularPrice * totalMonths;
    // After Discount Current Price Is
    return totalMonthlyPrice - regularPriceAfterDiscountInPercent;
  };

  const calculateSavingPercent = (totalMonths: number, currentRegularPrice: number, additionalDiscount: number) => {
    // when discount in percentage
    // step 1: calculate regular price after additional Discount %
    // rules/logic: original_price - ((original_price / 100) * discountPercent))
    // will get Regular Price after Discount
    const RPAfterDiscountInPercent = currentRegularPrice - (currentRegularPrice / 100) * additionalDiscount;

    // get total % of discount
    // math: total_price - ((total_price - discounted_price) / total_price) * 100
    // math rules ((totalPrice  / totalPrice) * 100) + discountedPrice;
    const totalMonthlyPrice = monthlyRegularPrice * totalMonths;
    const totalDiscountInPercentFromMonthlyPrice = ((totalMonthlyPrice - RPAfterDiscountInPercent) / totalMonthlyPrice) * 100;
    const result = totalDiscountInPercentFromMonthlyPrice;
    return result;
  };

  const calculateDiscountFromPercentage = (currentRegularPrice: number, additionalDiscount: number) => {
    // calculate regular price after additional Discount %
    // rules/logic: original_price - ((original_price / 100) * discountPercent))
    // will get Regular Price after Discount
    return currentRegularPrice - (currentRegularPrice / 100) * additionalDiscount;
  };

  const calculateMonthlyPriceAfterDiscount = (totalMonths: number, currentRegularPrice: number, additionalDiscount: number) => {
    // get how much discount we get from the monthly price and discounted percentage
    const afterDiscountCurrentPriceIs = calculateSavingAmount(totalMonths, currentRegularPrice, additionalDiscount);
    // calculate total monthly price. ex monhtly * 12 or 24 or 36
    const totalMonthlyPrice = monthlyRegularPrice * totalMonths;
    const getCurrentTotalPriceAfterDiscount = totalMonthlyPrice - afterDiscountCurrentPriceIs;
    // console.log(getCurrentTotalPriceAfterDiscount);
    // now return per monthly price
    return getCurrentTotalPriceAfterDiscount / totalMonths;
  };

  // const calculateSavingAmount = (totalMonths: number, currentRegularPrice: number, additionalDiscount: number) => {
  // when discount in number
  //   // math rules: (monthlyRegularPrice * totalMonths) - (currentRegularPrice - additionalDiscount)
  //   const monthlyRegularPrice = product?.monthlyPackage?.regularPrice;
  //   const totalMonthlyPrice = monthlyRegularPrice * totalMonths;
  //   const afterDiscountCurrentPriceIs = currentRegularPrice - additionalDiscount;
  //   const result = totalMonthlyPrice - afterDiscountCurrentPriceIs;
  //   return result;
  // };

  // const calculateSavingPercent = (totalMonths: number, currentRegularPrice: number, additionalDiscount: number) => {
  //   // when discount in number
  //   // math rules ((totalPrice - discountedPrice) / totalPrice) * 100
  //   const monthlyRegularPrice = product?.monthlyPackage?.regularPrice;
  //   const totalMonthlyPrice = monthlyRegularPrice * totalMonths;
  //   const afterDiscountCurrentPriceIs = currentRegularPrice - additionalDiscount;
  //   const result = ((totalMonthlyPrice - afterDiscountCurrentPriceIs) / totalMonthlyPrice) * 100;
  //   return result;
  // };

  // default 36 months selected
  const [currentPackage, setCurrentPackage] = useState<number>(36);
  const [price, setPrice] = useState<number>(calculateMonthlyPriceAfterDiscount(36, threeYearPackage?.regularPrice, threeYearPackage?.additionalDiscount));
  const [orderLink, setOrderLink] = useState<string>(product?.trienniallyPackage?.orderLink);
  const [saving, setSaving] = useState<number>(calculateSavingAmount(36, threeYearPackage?.regularPrice, threeYearPackage?.additionalDiscount));
  const [savingPercent, setSavingPercent] = useState<number>(calculateSavingPercent(36, threeYearPackage?.regularPrice, threeYearPackage?.additionalDiscount));
  const [payToday, setPayToday] = useState<number>(calculateDiscountFromPercentage(threeYearPackage?.regularPrice, threeYearPackage?.additionalDiscount));

  const [additionalDiscount, setAdditionalDiscount] = useState<number>(threeYearPackage?.additionalDiscount);
  const [regularPrice, setRegularPrice] = useState<number>(threeYearPackage?.regularPrice);

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
      setOrderLink(oneYearPackage?.orderLink);
      setPrice(calculateMonthlyPriceAfterDiscount(12, oneYearPackage?.regularPrice, oneYearPackage?.additionalDiscount));
      // saving
      const totalSavings = calculateSavingAmount(12, oneYearPackage?.regularPrice, oneYearPackage?.additionalDiscount);
      setSaving(totalSavings);
      setSavingPercent(calculateSavingPercent(12, oneYearPackage?.regularPrice, oneYearPackage?.additionalDiscount));
      // pay today
      setPayToday(calculateDiscountFromPercentage(oneYearPackage?.regularPrice, oneYearPackage?.additionalDiscount));
      setAdditionalDiscount(oneYearPackage?.additionalDiscount);
      setRegularPrice(oneYearPackage?.regularPrice);
      // notifications
      const notification = `You are getting $${totalSavings.toFixed(0)} discount for 12 months package.`;
      toast.success(notification);
    }
    if (selectedPackage == 24) {
      setOrderLink(twoYearPackage?.orderLink);
      setPrice(calculateMonthlyPriceAfterDiscount(24, twoYearPackage?.regularPrice, twoYearPackage?.additionalDiscount));
      // saving
      const totalSavings = calculateSavingAmount(24, twoYearPackage?.regularPrice, twoYearPackage?.additionalDiscount);
      setSaving(totalSavings);
      setSavingPercent(calculateSavingPercent(24, twoYearPackage?.regularPrice, threeYearPackage?.additionalDiscount));
      // pay today
      setPayToday(calculateDiscountFromPercentage(twoYearPackage?.regularPrice, twoYearPackage?.additionalDiscount));
      setAdditionalDiscount(twoYearPackage?.additionalDiscount);
      setRegularPrice(twoYearPackage?.regularPrice);
      // notifications
      const notification = `Congrats! You are getting $${totalSavings.toFixed(0)} discount for 24 months package.`;
      toast.success(notification);
    }
    if (selectedPackage == 36) {
      setOrderLink(threeYearPackage?.orderLink);
      setPrice(calculateMonthlyPriceAfterDiscount(36, threeYearPackage?.regularPrice, threeYearPackage?.additionalDiscount));
      // saving
      const totalSavings = calculateSavingAmount(36, threeYearPackage?.regularPrice, threeYearPackage?.additionalDiscount);
      setSaving(totalSavings);
      setSavingPercent(calculateSavingPercent(36, threeYearPackage?.regularPrice, threeYearPackage?.additionalDiscount));
      // pay today
      setPayToday(calculateDiscountFromPercentage(threeYearPackage?.regularPrice, threeYearPackage?.additionalDiscount));
      setAdditionalDiscount(threeYearPackage?.additionalDiscount);
      setRegularPrice(threeYearPackage?.regularPrice);
      // notifications
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
       // Order Button        
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
            You pay ${payToday.toFixed(2)} today  for {currentPackage}
            {currentPackage == 1 ? " Month" : " Months"}{additionalDiscount != 0 && <span className="bg-yellow-100 pl-1">(with a bonus {additionalDiscount}% off coupon)</span>}. The renewal price is ${regularPrice}.
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

      {/* Managed VPS Hosting Child Compo */}
      {type == "managedVpsHosting" && <ProductCardManagedVpsHostingItems className="" showAllFeature={showAllFeature} product={product} />}

      {/*
      
      Show hide more features items
      
      */}
      <div className="text-center pt-2">
        <Link href={`#${product?.slug}`} className="center w-full px-2 py-2  font-bold text-text text-base group-hover:text-primary flex justify-center items-start space-x-2" onClick={() => setShowAllFeature(!showAllFeature)}>
          {" "}
          {showAllFeature ? (
            <>
              <span>See less features</span>
              <ArrowLongUpIcon className="w-5 h-5 group-hover:animate-bounce" />
            </>
          ) : (
            <>
              <span>See all features</span>
              <ArrowLongDownIcon className="w-5 h-5 group-hover:animate-bounce" />
            </>
          )}{" "}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
