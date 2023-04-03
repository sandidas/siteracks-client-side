import React, { FC } from "react";
import ProductCardFeatureItem from "./ProductCardFeatureItem";

interface IProps {
  features: [IProductPackageFeatures];
  showAllFeature: boolean;
  idForScrollEvent?: string;
}

const ProductCardFirstChild: FC<IProps> = ({ features, showAllFeature, idForScrollEvent }) => {
  const topFeatures = features.filter((feature) => feature?.topFeatured === true).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

  const withoutFeatures = features.filter((feature) => feature?.topFeatured === false).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

  // const sortedtopFeatures = topFeatures.sort((a, b) => a.displayOrder.localeCompare(b.displayOrder));

  return (
    <div id={idForScrollEvent}>
      <div>
        <h3 className="font-bold text-text text-base pb-3">Top Features</h3>
        {topFeatures.map((feature, index) => (
          <ProductCardFeatureItem feature={feature} key={index} />
        ))}
      </div>
      <div className={`${showAllFeature ? "opacity-100" : "hidden opacity-0"}`}>
        {withoutFeatures.map((feature, index) => (
          <ProductCardFeatureItem feature={feature} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductCardFirstChild;
