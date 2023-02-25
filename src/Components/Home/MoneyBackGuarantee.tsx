import React from "react";
import MoneyBackGuaranteeImage from "../../../public/images/webHosting/money-back-gurantee.svg";
import SectionTitle from "../SectionTitle/SectionTitle";

const MoneyBackGuarantee = () => {
  return (
    <section className="py-[10vh] bg-surface">
      <div className="max-w-7xl mx-auto px-3 md:px-5 grid md:grid-cols-12 gap-3 md:5 xl:gap-10 2xl:gap-32">
        <div className="flex items-center md:col-span-8">
          <SectionTitle leftAlignDesktop leftAlignOnMobile title="30-day money back guarantee*">We offer a 30-day money-back guarantee*, ensuring customer satisfaction and peace of mind. If you're unhappy with your purchase, cancel it for a refund.</SectionTitle>
        </div>

        <div className="md:col-span-4 flex flex-col justify-start items-center w-full">
          <MoneyBackGuaranteeImage className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[250px] fill-primary" />
        </div>
      </div>
    </section>
  );
};

export default MoneyBackGuarantee;
