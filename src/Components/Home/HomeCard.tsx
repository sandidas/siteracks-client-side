import Image from "next/image";
import React from "react";
import WebHosting from "../../../public/images/nav/webHosting.svg";
import WordPress from "../../../public/images/nav/WordPress.svg";
import PreManagedVpsHosting from "../../../public/images/nav/preManagedVpsHosting.svg";
import BusinessHosting from "../../../public/images/nav/businessHosting.svg";

const HomeCard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 py-[8vh]">
      <div className="space-y-2.5 bg-surfaceFive p-10">
        <div>
          <WebHosting className="fill-white w-20 h-20" />
        </div>

        <h2 className="text-white"> Cloud Hosting</h2>
        <p className="text-secondaryOn text-slate-100">Scalable, accessible, cost-effective, reliable, secure, flexible, efficient, fast, easy maintenance</p>
      </div>

      <div className="space-y-2.5 bg-secondaryOn p-10">
        <div>
          <WordPress className="fill-green-700 w-20 h-20" />
        </div>
        <h2 className="text-slate-600">WordPress Hosting</h2>
        <p className="text-slate-600">Scalable, accessible, cost-effective, reliable, secure, flexible, efficient, fast, easy maintenance</p>
      </div>

      <div className="space-y-2.5 bg-surfaceThree p-10">
        <div>
          <BusinessHosting className="fill-slate-50 w-20 h-20" />
        </div>
        <h2 className="text-white">Business Hosting</h2>
        <p className="text-slate-100">Scalable, accessible, cost-effective, reliable, secure, flexible, efficient, fast, easy maintenance</p>
      </div>
      <div className="space-y-2.5 bg-surfaceTwo p-10">
        <div>
          <PreManagedVpsHosting className="fill-white w-20 h-20" />
        </div>
        <h2 className="text-white"> PreManaged VPS Hosting</h2>
        <p className="text-slate-50">Scalable, accessible, cost-effective, reliable, secure, flexible, efficient, fast, easy maintenance</p>
      </div>
    </section>
  );
};

export default HomeCard;
