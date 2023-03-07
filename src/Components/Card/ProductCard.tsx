"use client";
import { ArrowLongRightIcon, ArrowLongUpIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import Link from "next/link";
import React, { FC, useState } from "react";
import PlainButton from "../Buttons/PlainButton";
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

  const [showAllFeature, setShowAllFeature] = useState(false);

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

  return (
    <div className={`px-4 relative py-8 flex flex-col xl:p-8 rounded-lg group hover:scale-x-105 duration-500 border-2 border-t-2 border-slate-100 dark:border-slate-800  hover:border-surface dark:hover:border-surface shadow-md hover:shadow-lg`}>
      {product?.featured && <div className="absolute text-center w-2/4 left-1/4 -top-5 text-white font-medium rounded-md py-1 bg-red-400 dark:bg-red-700">Most popular</div>}

      <div className="space-y-10 text-center">
        <div className="space-y-2">
          <h2 className="text-title font-bold text-2xl">{product?.title}</h2>
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
            {/* if this is features then it will show in red */}
            <div className={`${product?.featured ? "bg-red-400 dark:bg-red-700 text-white" : "bg-green-600/10 text-primary"} px-3 py-1 rounded-2xl font-medium`}>SAVE {savingPercent.toFixed(0)}%</div>
          </div>
          {/* Selected package price  */}
          <div className="text-text text-sm">
            You are getting an additional <br /> <strong>${saving.toFixed(2)}</strong> off for <strong>{currentPackage}</strong> {currentPackage == 1 ? "Month" : "Months"} period
          </div>
          <div>
            <div className="flex py-2 justify-center">
              <div className="text-title font-bold text-6xl">{price.toFixed(1)} </div>
              <div className="text-indigo-300 pt-6">/mo</div>
            </div>
            <div className={`${product?.featured ? "text-red-400 dark:text-red-700" : "text-primary"} h-10 overflow-hidden font-medium`}>
              
              {currentPackage > 12 && product?.additionalMonth && product?.additionalMonth}
              
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
            className={`shadow-lg transition ease-in-out duration-500 group-hover:text-white group-hover:bg-black dark:group-hover:bg-slate-700 ${product?.featured ? "bg-red-400 dark:bg-red-700" : ""}`}
          >
            Order Now
            <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
          </Button>
          <p className="text-slate-400 text-sm">
            No hidden cost, no extra charge <br />
            The renewal price is the same.
          </p>
        </div>

        {/* Monthly Package button  */}
        <div className="grid grid-cols-4 divide-x-2 dark:divide-slate-700 border-2 dark:border-slate-700 border-slate-100">
          {buttonDataByMonth.map((btn, index) => (
            <button className={`py-2 text-xs md:text-sm 2xl:text-base hover:bg-primary hover:text-white ${currentPackage == btn.call ? "text-text bg-surface" : "text-slate-400"}`} onClick={() => switchPlanByMonth(btn?.call)} key={index}>
              {btn?.call} <small>Mo.</small>
            </button>
          ))}
        </div>
      </div>
      <hr className="py-5 border-t-2 dark:border-slate-900" />
      <div className="space-y-6" id={product?.slug}>
        <div className="space-y-1">
          <div className="pb-5">
            <h3 className="font-bold text-text text-base pb-3">Top Features</h3>
            <ProductCardFeatureItem feature={product?.numberOfWebsites} />
            <ProductCardFeatureItem feature={product?.storage} />
            <ProductCardFeatureItem feature={product?.bandwidth} />
            <ProductCardFeatureItem feature={product?.freeWPInstallation} />
            <ProductCardFeatureItem feature={product?.ssl} />
            <ProductCardFeatureItem feature={product?.nightlyBackup} />
            <ProductCardFeatureItem feature={product?.emailAccounts} />
            <ProductCardFeatureItem feature={product?.domain} />
            <ProductCardFeatureItem feature={product?.DDoSProtection} />
            <ProductCardFeatureItem feature={product?.wordpressTransfer} />
            <ProductCardFeatureItem feature={product?.wordpressDedicatedExpert} />
            <ProductCardFeatureItem feature={product?.wordpressOptimized} />
          </div>
          <div className={`space-y-5 transition-all ease-in-out duration-700 delay-700 ${showAllFeature ? "opacity-100" : "hidden opacity-0"}`}>
            <div>
              <h3 className="font-bold text-text text-base pb-3">Performance</h3>
              <ProductCardFeatureItem feature={product?.cpuCores} />
              <ProductCardFeatureItem feature={product?.ram} />
              <ProductCardFeatureItem feature={product?.dedicatedResources} />
              <ProductCardFeatureItem feature={product?.siteRacksExpertOptimized} />
            </div>

            <div>
              <h3 className="font-bold text-text text-base pb-3">More WordPress Features </h3>

              <ProductCardFeatureItem feature={product?.wpAutoUpdates} />
              <ProductCardFeatureItem feature={product?.wordPressMultisite} />
              <ProductCardFeatureItem feature={product?.WordPressStagingTool} />
              <ProductCardFeatureItem feature={product?.WordPressDebugging} />
              <ProductCardFeatureItem feature={product?.WordPressNginxCaching} />
              <ProductCardFeatureItem feature={product?.WordPressLogs} />
            </div>

            <div>
              <h3 className="font-bold text-text text-base pb-3">More Security Features </h3>
              <ProductCardFeatureItem feature={product?.malwareScanner} />
              <ProductCardFeatureItem feature={product?.googleAuth} />
              <ProductCardFeatureItem feature={product?.folderProtection} />
              <ProductCardFeatureItem feature={product?.webApplicationFirewall} />
            </div>

            <div>
              <h3 className="font-bold text-text text-base pb-3">Additional Important Features </h3>
              <ProductCardFeatureItem feature={product?.multiplePhpVersions} />
              <ProductCardFeatureItem feature={product?.subDomains} />
              <ProductCardFeatureItem feature={product?.unlimitedDatabase} />
              <ProductCardFeatureItem feature={product?.scheduleTask} />
            </div>

            <div>
              <h3 className="font-bold text-text text-base pb-3">More Technical Features </h3>
              <ProductCardFeatureItem feature={product?.sshAccess} />
              <ProductCardFeatureItem feature={product?.ftpAccess} />
              <ProductCardFeatureItem feature={product?.gitSupport} />
              <ProductCardFeatureItem feature={product?.nodeJs} />
              <ProductCardFeatureItem feature={product?.laravelTools} />
              <ProductCardFeatureItem feature={product?.apacheNginx} />
              <ProductCardFeatureItem feature={product?.dedicatedIPAddress} />
            </div>

            <div>
              <h3 className="font-bold text-text text-base pb-3">Additional </h3>
              <ProductCardFeatureItem feature={product?.moneyBack} />
              <ProductCardFeatureItem feature={product?.addCollaborators} />
              <ProductCardFeatureItem feature={product?.dnsManagement} />
              <ProductCardFeatureItem feature={product?.powerfulControlPanel} />
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link href={`#${product?.slug}`} className="center w-full px-2 py-2  font-bold text-text text-base hover:text-primary" onClick={() => setShowAllFeature(!showAllFeature)}>
            {" "}
            {showAllFeature ? "See less features" : "See all features"}{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
