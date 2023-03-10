export const calculateSavingAmount = (totalMonths: number, currentRegularPrice: number, additionalDiscount: number, monthlyRegularPrice: number) => {
    // when discounting in percentage
    // calculate regular price after discounting.
    // discounted_price = original_price - (original_price * discount / 100)
    const regularPriceAfterDiscountInPercent = currentRegularPrice - (currentRegularPrice * additionalDiscount) / 100;
    const totalMonthlyPrice = monthlyRegularPrice * totalMonths;
    // After Discount Current Price Is
    return totalMonthlyPrice - regularPriceAfterDiscountInPercent;
  };

 export const calculateSavingPercent = (totalMonths: number, currentRegularPrice: number, additionalDiscount: number, monthlyRegularPrice:number) => {
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

 export const calculateDiscountFromPercentage = (currentRegularPrice: number, additionalDiscount: number) => {
    // calculate regular price after additional Discount %
    // rules/logic: original_price - ((original_price / 100) * discountPercent))
    // will get Regular Price after Discount
    return currentRegularPrice - (currentRegularPrice / 100) * additionalDiscount;
  };

  export const calculateMonthlyPriceAfterDiscount = (totalMonths: number, currentRegularPrice: number, additionalDiscount: number, monthlyRegularPrice:number) => {
    // get how much discount we get from the monthly price and discounted percentage
    const afterDiscountCurrentPriceIs = calculateSavingAmount(totalMonths, currentRegularPrice, additionalDiscount, monthlyRegularPrice);
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
