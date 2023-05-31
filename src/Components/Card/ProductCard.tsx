// "use client";
import { ArrowLongDownIcon, ArrowLongRightIcon, ArrowLongUpIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import Link from "next/link";
import React, { FC, useState } from "react";
import { calculateSavingAmount, calculateSavingPercent, calculateDiscountFromPercentage, calculateMonthlyPriceAfterDiscount } from "../Hooks/MathLogics";
import { toast } from "react-hot-toast";
import ProductCardFirstChild from "./ProductCardFirstChild";

interface IProps {
  product: IProductPackage;
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
  // console.log(product);
  // https://www.my.dronahost.com/cart.php?a=add&pid=179&billingcycle=annually
  // https://www.my.dronahost.com/cart.php?a=add&pid=179&billingcycle=biennially
  // https://www.my.dronahost.com/cart.php?a=add&pid=179&billingcycle=triennially

  // common variables needs bellow functionality
  const monthlyRegularPrice = product?.monthlyPrice;
  const monthlyPackage = product?.monthlyPrice;
  const threeYearPackage = product?.trienniallyPrice;
  const twoYearPackage = product?.bienniallyPrice;
  const oneYearPackage = product?.annuallyPrice;
  const additionalDiscountForAll = product?.additionalDiscount as number;
  const productThisId = product?.productId;
  const productThisPromo = product?.promoCode;
  let defaultOrderLink = `https://www.siteracks.com/cart.php?a=add&pid=${productThisId}&billingcycle=triennially${productThisPromo && `&promocode=${productThisPromo}`}`;

  // console.log("defaultOrderLink", defaultOrderLink);

  // default 36 months selected
  const [currentPackage, setCurrentPackage] = useState<number>(36);
  const [price, setPrice] = useState<number>(calculateMonthlyPriceAfterDiscount(36, threeYearPackage, additionalDiscountForAll, monthlyRegularPrice));
  const [orderLink, setOrderLink] = useState<string>(defaultOrderLink);
  const [saving, setSaving] = useState<number>(calculateSavingAmount(36, threeYearPackage, additionalDiscountForAll, monthlyRegularPrice));
  const [savingPercent, setSavingPercent] = useState<number>(calculateSavingPercent(36, threeYearPackage, additionalDiscountForAll, monthlyRegularPrice));
  const [payToday, setPayToday] = useState<number>(calculateDiscountFromPercentage(threeYearPackage, additionalDiscountForAll));

  const [additionalDiscount, setAdditionalDiscount] = useState<number>(additionalDiscountForAll);
  const [regularPrice, setRegularPrice] = useState<number>(threeYearPackage);
  // this for show and hide more features items
  const [showAllFeature, setShowAllFeature] = useState(false);

  // filter and select only non selected month names to show into view
  // for now we are not using this function
  const nonSelectedMonth = buttonDataByMonth.filter((pkj) => pkj.call !== currentPackage);

  //   plan switcher
  const switchPlanByMonth = (selectedPackage: number) => {
    setCurrentPackage(selectedPackage);

    const orderLinkSwitcher = (months: string) => {
      let currentOrderLink = `https://www.siteracks.com/cart.php?a=add&pid=${productThisId}&billingcycle=${months}${productThisPromo && `&promocode=${productThisPromo}`}`;
      setOrderLink(currentOrderLink);
    };

    if (selectedPackage == 1) {
      // monthlyPackage
      orderLinkSwitcher("monthly");
      setPrice(calculateMonthlyPriceAfterDiscount(1, monthlyPackage, additionalDiscountForAll, monthlyRegularPrice));
      // saving
      const totalSavings = calculateSavingAmount(1, monthlyPackage, additionalDiscountForAll, monthlyRegularPrice);
      setSaving(totalSavings);
      setSavingPercent(calculateSavingPercent(1, monthlyPackage, additionalDiscountForAll, monthlyRegularPrice));

      // pay today
      setPayToday(calculateDiscountFromPercentage(monthlyPackage, additionalDiscountForAll));
      setAdditionalDiscount(additionalDiscountForAll);
      setRegularPrice(monthlyPackage);
    }
    if (selectedPackage == 12) {
      orderLinkSwitcher("annually");
      setPrice(calculateMonthlyPriceAfterDiscount(12, oneYearPackage, additionalDiscountForAll, monthlyRegularPrice));
      // saving
      const totalSavings = calculateSavingAmount(12, oneYearPackage, additionalDiscountForAll, monthlyRegularPrice);
      setSaving(totalSavings);
      setSavingPercent(calculateSavingPercent(12, oneYearPackage, additionalDiscountForAll, monthlyRegularPrice));
      // pay today
      setPayToday(calculateDiscountFromPercentage(oneYearPackage, additionalDiscountForAll));
      setAdditionalDiscount(additionalDiscountForAll);
      setRegularPrice(oneYearPackage);
      // notifications
      const notification = `You are getting $${totalSavings.toFixed(0)} discount for 1-Year service term of the ${product?.productTitle}.`;
      toast.success(notification);
    }
    if (selectedPackage == 24) {
      orderLinkSwitcher("biennially");
      setPrice(calculateMonthlyPriceAfterDiscount(24, twoYearPackage, additionalDiscountForAll, monthlyRegularPrice));
      // saving
      const totalSavings = calculateSavingAmount(24, twoYearPackage, additionalDiscountForAll, monthlyRegularPrice);
      setSaving(totalSavings);
      setSavingPercent(calculateSavingPercent(24, twoYearPackage, additionalDiscountForAll, monthlyRegularPrice));
      // pay today
      setPayToday(calculateDiscountFromPercentage(twoYearPackage, additionalDiscountForAll));
      setAdditionalDiscount(additionalDiscountForAll);
      setRegularPrice(twoYearPackage);
      // notifications
      const notification = `Congrats! You are getting $${totalSavings.toFixed(0)} discount for 2-Year service term of the ${product?.productTitle}.`;
      toast.success(notification);
    }
    if (selectedPackage == 36) {
      orderLinkSwitcher("triennially");
      setPrice(calculateMonthlyPriceAfterDiscount(36, threeYearPackage, additionalDiscountForAll, monthlyRegularPrice));
      // saving
      const totalSavings = calculateSavingAmount(36, threeYearPackage, additionalDiscountForAll, monthlyRegularPrice);
      setSaving(totalSavings);
      setSavingPercent(calculateSavingPercent(36, threeYearPackage, additionalDiscountForAll, monthlyRegularPrice));
      // pay today
      setPayToday(calculateDiscountFromPercentage(threeYearPackage, additionalDiscountForAll));
      setAdditionalDiscount(additionalDiscountForAll);
      setRegularPrice(threeYearPackage);
      // notifications
      const notification = `Congrats! You are getting $${totalSavings.toFixed(0)} discount for 3-Year service term of the ${product?.productTitle}.`;
      toast.success(notification);
    }
  };
  // console.log("Individual Product Details", product);

  return (
    <div className={`px-4 relative py-8 flex flex-col xl:px-8 xl:py-12 rounded-lg group hover:scale-x-105 duration-500 border-2 border-t-2 border-slate-100 dark:border-slate-800  hover:border-surface dark:hover:border-surface shadow-md hover:shadow-lg`}>
      {/* Absolute section for featured item */}
      {product?.featured && <div className="absolute text-center w-2/4 left-1/4 -top-5 text-white font-medium rounded-md py-1 bg-red-400 dark:bg-red-700">Most popular</div>}

      <div className="space-y-5 xl:space-y-6 text-center flex flex-col">
        <div className="space-y-2">
          <h2 className="text-title font-bold text-2xl">{product?.productTitle}</h2>
          <p className="text-text text-sm">{product?.productDescription}</p>
        </div>

        <div className="space-y-3 xl:space-y-5">
          {/* 
          
          How much saving the money 
          
          */}
          <div className="flex justify-center items-center py-2 space-x-2 text-text text-sm">
            {" "}
            <span className="line-through ">
              {/*
              
              if selected price not monthly it will show monthly price in line through 
              
              */}
              {currentPackage !== 1 && <span>${product?.monthlyPrice}</span>}
            </span>
            {/* 

            if this is features then it will show in red 
            
            */}
            <div className={`${product?.featured ? "bg-red-400 dark:bg-red-700 text-white" : "bg-green-600/10 text-primary"} px-3 py-1 rounded-2xl font-bold group-hover:bg-secondary dark:group-hover:bg-secondary group-hover:text-white`}>SAVE {savingPercent.toFixed(0)}%</div>
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
            <div className={`${product?.featured ? "text-red-400 dark:text-red-700" : "text-primary"} h-10 overflow-hidden font-medium`}>{currentPackage > 12 && product?.additionalMonths && product?.additionalMonths}</div>
          </div>
        </div>

        {/*        
       // Order Button        
        */}
        <div className="space-y-2 xl:space-y-4">
          <Button
            sx={(theme) => ({
              backgroundColor: theme.colorScheme === "dark" ? theme.colors.main[9] : theme.colors.main[7],
            })}
            component="a"
            href={orderLink}
            fullWidth
            size="lg"
            className={`shadow-lg transition ease-in-out duration-500 group-hover:text-white group-hover:bg-primary dark:group-hover:bg-primary ${product?.featured ? "bg-red-400 dark:bg-red-700" : ""}`}
          >
            Order Now
            <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
          </Button>
          <p className="text-text text-xs leading-relaxed">
            No hidden cost, no extra charge <br />
            You pay $ {payToday.toFixed(2)} today for {currentPackage == 1 ? currentPackage : currentPackage == 12 ? <>1</> : currentPackage == 24 ? <>2</> : <>3</>}
            {currentPackage == 1 ? " Month" : "-Year"} service term
            {additionalDiscount != 0 && (
              <span className="bg-yellow-100 dark:bg-surface pl-1">
                {" "}
                <br /> (bonus {additionalDiscount}% off coupon included)
              </span>
            )}
            . <br /> The renewal price ${regularPrice}.
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
      <ProductCardFirstChild idForScrollEvent={product?.typeSlug} showAllFeature={showAllFeature} features={product.features} />

      {/*
      
      Show hide more features items
      
      */}
      <div className="text-center pt-2">
        <Link href={`#${product?.typeSlug}`} className="center w-full px-2 py-2 font-bold text-text text-base group-hover:text-primary flex justify-center items-start space-x-2" onClick={() => setShowAllFeature(!showAllFeature)}>
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
