import ProductCard from "@/Components/Card/ProductCard";
import { IProductProps } from "@/pages/web-hosting";
import React, { FC } from "react";

interface IProps {
  products: [];
}

const WebHostingPricing: FC<IProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product, key) => (
        <ProductCard className="" key={key} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default WebHostingPricing;
