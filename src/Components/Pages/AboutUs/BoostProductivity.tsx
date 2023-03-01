import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";

const BoostProductivity = () => {
  return (
    <section className="py-[10vh] bg-surface">
      <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
        <SectionTitle supTitle="Get Peace of Mind &" title="Boost Productivity" subTitle="with Quick Managed Hosting" bottomSpace />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-16 2xl:gap-32">
          <div className="space-y-5">
            {" "}
            <p className="text-text lg:text-lg lg:leading-8">Hundreds of local businesses, e-commerce stores, and individuals rely on us to save them time and money so they can focus on their passions and grow their businesses.</p>
            <p className="text-text lg:text-lg lg:leading-8">Our web hosting solutions offer 99.9% uptime, super-fast page load time, proactive app monitoring, dedicated workflows, leading security add-ons, 24/7 premium support, and much more.</p>
            <p className="text-text lg:text-lg lg:leading-8">
              As we don’t rely on premade 3rd party hosting software, we have the flexibility to innovate and build exclusive solutions that our customers need. We are proud of our industry-leading customer support ratings, excellent value for money, and diverse hosting plan choices.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default BoostProductivity;
