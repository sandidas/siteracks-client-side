import React from "react";
import MoneyBackGuaranteeImage from "../../../public/images/webHosting/money-back-gurantee.svg";



const MoneyBackGuarantee = () => {
  return (
    <section className="py-[10vh] bg-surface">
      <div className="max-w-7xl mx-auto px-3 md:px-5 grid grid-cols-12 gap-3 md:5 xl:gap-10 2xl:gap-10">
        <div className="flex flex-col space-y-8 col-span-5 justify-center">
          <h3 className="text-4xl lg:text-5xl text-title md:leading-tight font-bold">30-day money back guarantee*</h3>
          <p className="text-text lg:text-xl lg:leading-9">We offer a 30-day money-back guarantee*, ensuring customer satisfaction and peace of mind. If you're unhappy with your purchase, cancel it for a refund.</p>
        </div>

        <div className="md:col-span-7 flex flex-col justify-start items-center w-full">
       
        <MoneyBackGuaranteeImage className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[440px] fill-primary" />
      </div>
      </div>
    </section>
  );
};

export default MoneyBackGuarantee;
