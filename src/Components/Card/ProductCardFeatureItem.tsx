import QuestionIcon from "../../../public/images/icons/QuestionIcon.svg";
import CompleteCheckIcon from "../../../public/images/icons/CompleteCheckIcon.svg";
import NegativeCloseIcon from "../../../public/images/icons/NegativeCloseIcon.svg";
import { Tooltip } from "@mantine/core";
import React, { FC } from "react";

interface IFeature {
  feature?: IProductPackageFeatures;
}
const ProductCardFeatureItem: FC<IFeature> = ({ feature }) => {
  return feature?.lineBreak === true ? (
    <>{feature?.lineBreakTitle && <h3 className="font-bold text-base text-text pt-4 pb-2"> {feature?.lineBreakTitle} </h3>}</>
  ) : (
    <div className="flex justify-between border-b border-surface hover:border-slate-300 dark:hover:border-slate-700 space-x-1 py-1">
      <div className="flex justify-start space-x-1">
        <div>
          {
            // condition one
            // if status false then will show CROSS icon
            // feature?.status ? (
            //   <CompleteCheckIcon className={`w-5 h-5 ${feature?.iconColor === "" ? "fill-primary" : feature?.iconColor}`} />
            // ) : (
            //   // condition one alternative render
            //   <NegativeCloseIcon className="w-5 h-5 fill-red-500" />
            // )

            feature?.status ? (
              <CompleteCheckIcon className={`w-5 h-5 ${!feature?.iconColor || feature?.iconColor === "null" ? "fill-green-600" : feature?.iconColor}`} />
            ) : (
              // condition one alternative render
              <NegativeCloseIcon className="w-5 h-5 fill-red-500" />
            )
          }
        </div>
        <div className="text-sm">
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
            <div>
              <QuestionIcon className="w-5 h-5 fill-slate-500" />
            </div>
          </Tooltip>
        </div>
      )}
    </div>
  );
};

export default ProductCardFeatureItem;
