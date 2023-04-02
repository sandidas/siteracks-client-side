import QuestionIcon from "../../../public/images/icons/QuestionIcon.svg";
import CompleteCheckIcon from "../../../public/images/icons/CompleteCheckIcon.svg";
import NegativeCloseIcon from "../../../public/images/icons/NegativeCloseIcon.svg";

import { Button, Tooltip, UnstyledButton } from "@mantine/core";
import React, { FC } from "react";

interface IFeature {
  feature?: IPackageFeatures;
}
const ProductCardFeatureItem: FC<IFeature> = ({ feature }) => {

   

  return feature?.lineBreak === true ? (
    <>
     {
      feature?.lineBreakTitle && 
      <h3 className="font-bold text-text text-base pb-3"> {feature?.lineBreakTitle} </h3>
     }
     
    
    </>
  ) : (
    <div className="flex justify-between border-b border-surface hover:border-slate-300 dark:hover:border-slate-700 text-sm xl:py-1 space-x-1">
      <div className="flex justify-start space-x-1">
        <div>
          {
            // condition one
            // if status false then will show CROSS icon
            feature?.status ? (
              <CompleteCheckIcon className={`w-5 h-5 ${feature?.iconColor ? feature?.iconColor : "fill-primary"}`} />
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
