import React, { FC } from "react";
import ProductCardFeatureItem from "./ProductCardFeatureItem";

interface IProps {
  features: [IPackageFeatures];
  showAllFeature: boolean;
}

const ProductCardFirstChild: FC<IProps> = ({ features, showAllFeature }) => {
 
    const topFeatures = features.filter((feature) => feature?.topFeatured === true).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

    const withoutFeatures = features.filter((feature) => feature?.topFeatured === false).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));


console.log(topFeatures);


  // const sortedtopFeatures = topFeatures.sort((a, b) => a.displayOrder.localeCompare(b.displayOrder));

  // console.log(topFeatures);

  return (
    <>

    
      {topFeatures.map((feature, index) => (
        <ProductCardFeatureItem feature={feature} key={index} />
      ))}



      {withoutFeatures.map((feature, index) => (
        <ProductCardFeatureItem feature={feature} key={index} />
      ))}




    </>
  );
};

export default ProductCardFirstChild;
