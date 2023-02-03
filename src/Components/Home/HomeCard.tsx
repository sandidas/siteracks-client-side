import Image from "next/image";
import React from "react";
import WebHosting from "../../../public/images/nav/WordPressServer.svg";
const HomeCard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 py-[8vh]">
      <div className="space-y-2.5 bg-surfaceFive p-10">
        
        <WebHosting className="stroke-red-600 w-1/3 max-h-24" />
        <h2 className="text-white">WordPress Hosting</h2>
        <p className="text-secondaryOn text-slate-100">Scalable, accessible, cost-effective, reliable, secure, flexible, efficient, fast, easy maintenance</p>
      </div>

      <div className="space-y-2.5 bg-secondaryOn p-10">
       
        <h2 className="text-slate-600">Cloud Hosting</h2>
        <p className="text-slate-600">Scalable, accessible, cost-effective, reliable, secure, flexible, efficient, fast, easy maintenance</p>
      </div>

      <div className="space-y-2.5 bg-surfaceThree p-10">
       
        <h2 className="text-white">Business Hosting</h2>
        <p className="text-slate-100">Scalable, accessible, cost-effective, reliable, secure, flexible, efficient, fast, easy maintenance</p>
      </div>
      <div className="space-y-2.5 bg-surfaceTwo p-10">
       
        <h2 className="text-white">Business Hosting</h2>
        <p className="text-slate-100">Scalable, accessible, cost-effective, reliable, secure, flexible, efficient, fast, easy maintenance</p>
      </div>
    </section>
  );
};

export default HomeCard;
