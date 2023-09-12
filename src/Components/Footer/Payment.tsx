import React from "react";
import IconOne from "../../../public/images/payment/one.svg";
import IconTwo from "../../../public/images/payment/two.svg";
import IconThree from "../../../public/images/payment/three.svg";
import IconFour from "../../../public/images/payment/four.svg";
import IconFive from "../../../public/images/payment/five.svg";
import IconUSD from "../../../public/images/payment/usd.svg";

const PaymentIcons = () => {
  return (
    <div className="flex items-center gap-2 py-5">
      <IconUSD className="fill-primary w-6 h-6" />
      <span>We Accept:</span>
      <div className="flex gap-1">
        <IconOne className="fill-primary w-6 h-6" />
        <IconTwo className="fill-primary w-6 h-6" />
        <IconThree className="fill-primary w-6 h-6" />
        <IconFour className="fill-primary w-6 h-6" />
        <IconFive className="fill-primary w-6 h-6" />
      </div>
    </div>
  );
};

export default PaymentIcons;
