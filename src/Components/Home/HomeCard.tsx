import Image from "next/image";
import React from "react";
import WebHosting from "../../../public/images/nav/webHosting.svg";
import WordPress from "../../../public/images/nav/WordPress.svg";
import PreManagedVpsHosting from "../../../public/images/nav/preManagedVpsHosting.svg";
import BusinessHosting from "../../../public/images/nav/businessHosting.svg";
import { Button } from "@mantine/core";
import Link from "next/link";

const HomeCard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-[8vh]">
      <div className="space-y-5 bg-surfaceFive p-10 hover:-translate-y-2 duration-200 group">
        <div className="space-y-4 md:min-h-[280px]">
          <WebHosting className="fill-white w-20 h-20" />
          <h2 className="text-white font-bold text-3xl"> Cloud Hosting</h2>
          <p className="text-secondaryOn text-slate-100">Cost-effective, flexible cloud hosting for small businesses or startups.</p>
        </div>
        <Button size="xl" className="bg-white text-gray-600 group-hover:text-light group-hover:bg-surface">
          See Plans
        </Button>
      </div>

      <div className="space-y-5 bg-secondaryOn p-10 hover:-translate-y-2 duration-200 group">
        <div className="space-y-4 md:min-h-[280px]">
          <WordPress className="fill-green-700 w-20 h-20" />
          <h3 className="text-slate-600 font-bold text-3xl">WordPress Hosting</h3>
          <p className="text-slate-600">WordPress eco-friendly, cost-effective, easy to use WordPress hosting.</p>
        </div>
        <Button size="xl" className="bg-white text-gray-600 group-hover:text-light group-hover:bg-surface">
          See Plans
        </Button>
      </div>

      <div className="space-y-5 bg-surfaceThree p-10 hover:-translate-y-2 duration-200 group">
        <div className="space-y-4 md:min-h-[280px]">
          <BusinessHosting className="fill-slate-50 w-20 h-20" />
          <h3 className="text-white font-bold text-3xl">Business Hosting</h3>
          <p className="text-slate-100">Faster performance, better security, and expert-recommended hosting for your business websites.</p>
        </div>
        <Button size="xl" className="bg-white text-gray-600 group-hover:text-light group-hover:bg-surface">
          See Plans
        </Button>
      </div>
      <div className="space-y-5 bg-surfaceTwo p-10 hover:-translate-y-2 duration-200 group">
        <div className="space-y-4 md:min-h-[280px]">
          <PreManagedVpsHosting className="fill-white w-20 h-20" />
          <h3 className="text-white flex flex-col font-bold text-3xl">
            {" "}
            <small className="text-xs w-full">PreManaged </small>
            <span className="-mt-2">VPS Hosting</span>
          </h3>
          <p className="text-slate-50">Dedicated support with easy-to-use and worry-free pre-managed VPS light hosting.</p>
        </div>
        <Button size="xl" className="bg-white text-gray-600 group-hover:text-light group-hover:bg-surface">
          See Plans
        </Button>
      </div>
    </section>
  );
};

export default HomeCard;
