import { productPricingData } from "../Data/ProductPricing";
import { calculateMonthlyPriceAfterDiscount } from "./MathLogics";

// calculateMonthlyPriceAfterDiscount(36, threeYearPackage?.regularPrice, threeYearPackage?.additionalDiscount, monthlyRegularPrice)

export const getPriceForBanner = (serviceName: string) => {
  const res = productPricingData.find((p) => p?.name.includes(serviceName));

  const getDetails = res?.sharedWebHosting?.child?.standardWebhosting;

  //   const getPrice = calculateMonthlyPriceAfterDiscount(36, getDetails?.trienniallyPackage?.regularPrice, getDetails?.trienniallyPackage?.additionalDiscount, getDetails?.monthlyPackage?.regularPrice);
  const getPrice = calculateMonthlyPriceAfterDiscount(36, getDetails?.trienniallyPackage.regularPrice, getDetails?.trienniallyPackage?.additionalDiscount, getDetails?.monthlyPackage?.regularPrice);

  return res;

  //   return  productPricingData.filter(p => p.serv)
};

export const findServiceByName = (serviceName: string) => {
  return productPricingData.find((p) => p?.nameSlug.includes(serviceName));
};

export const findServiceByNameAndType = (serviceName: string, serviceType: string) => {
  // get service
  const service = productPricingData.find((p) => p?.nameSlug?.includes(serviceName));
  // return service type with details
  return service?.child?.find((p) => p?.typeSlug?.includes(serviceType));
};
