import QuestionIcon from "../../../public/images/icons/QuestionIcon.svg";
import CompleteCheckIcon from "../../../public/images/icons/CompleteCheckIcon.svg";
import NegativeCloseIcon from "../../../public/images/icons/NegativeCloseIcon.svg";

import { Button, Tooltip, UnstyledButton } from "@mantine/core";
import React, { FC } from "react";

interface IFeature {
  feature?: IProductChildItems;
}
const ProductCardFeatureItem: FC<IFeature> = ({ feature }) => {
  const Icon = feature?.icon;
  return (
    <div className="flex justify-between border-b border-surface hover:border-slate-300 text-sm xl:py-1 space-x-1">
      <div className="flex justify-start">
        <div>
          {
            // condition one
            // if status false then will show CROSS icon
            feature?.status ? (
              // condition two
              // if icon not found then will show green tick icon

              !feature?.icon ? (
                <CompleteCheckIcon className={`w-5 h-5 ${feature?.iconColor ? feature?.iconColor : "fill-primary"}`} />
              ) : (
                <Icon className={`${feature?.iconColor} w-5 h-5`} />
              )
            ) : (
              // condition one alternative render
              <NegativeCloseIcon className="w-5 h-5 fill-red-500" />
            )
          }
        </div>
        <div>
          {feature?.bold && <strong>{feature?.bold}&nbsp;</strong>}
          {feature?.regular}
        </div>
      </div>
      {feature?.toolTip && (
        <div>
          <Tooltip
            sx={(theme) => ({
              fontSize: "12px",
            })}
            transition="pop-top-right"
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
      )}
    </div>
  );
};

export default ProductCardFeatureItem;
