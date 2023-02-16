import React from "react";

const MoneyBackGuarantee = () => {
  return (
    <section className="py-[10vh] bg-surface">
      <div className="max-w-screen-2xl mx-auto px-3 md:px-5 grid grid-cols-12 gap-3 md:5 xl:gap-16 2xl:gap-32">
        <div className="flex flex-col space-y-8 col-span-8">
          <h3 className="text-4xl lg:text-5xl text-title md:leading-tight font-bold">30-day money back guarantee*</h3>
          <p className="text-text lg:text-xl lg:leading-9">We offer a 30-day money-back guarantee*, ensuring customer satisfaction and peace of mind. If you're unhappy with your purchase, cancel it for a refund.</p>
        </div>

        <div className="col-span-4">Image Here</div>
      </div>
    </section>
  );
};

export default MoneyBackGuarantee;
