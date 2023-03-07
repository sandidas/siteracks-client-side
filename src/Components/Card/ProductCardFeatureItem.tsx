import { XMarkIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import QuestionIcon from "../../../public/images/icons/QuestionIcon.svg";

import { Button, Tooltip, UnstyledButton } from "@mantine/core";
import React, { FC } from "react";

interface IFeature {
  feature: IProductChildItems;
}
const ProductCardFeatureItem: FC<IFeature> = ({ feature }) => {
  const Icon = feature?.icon;
  return (
    <div className="flex justify-between border-b border-surface hover:border-slate-300 text-sm">
      <div className="flex justify-start">
        <div>{feature?.status ? <Icon className={`${feature?.iconColor} w-5 h-5`} /> : <XMarkIcon className="w-5 h-5 fill-red-500" />}</div>
        <div>
          <strong>{feature?.bold}</strong> {feature?.regular}
        </div>
      </div>
      <div>
        <Tooltip
          sx={(theme) => ({
            fontSize: "12px",
          })}
          multiline
          width={220}
          withArrow
          label={feature?.toolTip}
          offset={5}
        >
          <UnstyledButton>
            <QuestionIcon className="w-5 h-5 fill-slate-500" />
          </UnstyledButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default ProductCardFeatureItem;
