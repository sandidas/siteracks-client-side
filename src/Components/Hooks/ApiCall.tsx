import { productPricingData } from "../Data/ProductPricing";
import { calculateMonthlyPriceAfterDiscount } from "./MathLogics";

export const findServiceByName = (serviceName: string) => {
  return productPricingData.find((p) => p?.nameSlug.includes(serviceName));
};
// this using on every single service pages
export const findServiceByNameAndType = (serviceName: string, serviceType: string) => {
  // get service
  const service = productPricingData.find((p) => p?.nameSlug?.includes(serviceName));
  // return service type with details
  return service?.child?.find((p) => p?.typeSlug?.includes(serviceType));
};

// calculateMonthlyPriceAfterDiscount(36, threeYearPackage?.regularPrice, threeYearPackage?.additionalDiscount, monthlyRegularPrice)
// @ts-ignore

export const getPriceForBanner = (getPackage: IProductPackage) => {
  const getPrice = calculateMonthlyPriceAfterDiscount(36, getPackage?.trienniallyPrice, getPackage?.additionalDiscount, getPackage?.monthlyPrice);

  return getPrice;
};
