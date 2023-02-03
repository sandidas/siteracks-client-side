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
      <div className="space-y-5 bg-surfaceFive p-10">
        <div className="space-y-3 md:min-h-[270px]">
          <WebHosting className="fill-white w-20 h-20" />
          <h2 className="text-white"> Cloud Hosting</h2>
          <p className="text-secondaryOn text-slate-100">Cost-effective, flexible cloud hosting for small businesses or startups.</p>
        </div>
        <Button size="xl" className="bg-white text-gray-600 hover:text-primary">
          See Plans
        </Button>
      </div>

      <div className="space-y-5 bg-secondaryOn p-10">
        <div className="space-y-3 md:min-h-[270px]">
          <WordPress className="fill-green-700 w-20 h-20" />
          <h2 className="text-slate-600">WordPress Hosting</h2>
          <p className="text-slate-600">WordPress eco-friendly, cost-effective, easy to use WordPress hosting.</p>
        </div>
        <Button size="xl" className="bg-white text-gray-600 hover:text-primary">
          See Plans
        </Button>
      </div>

      <div className="space-y-5 bg-surfaceThree p-10">
        <div className="space-y-3 md:min-h-[270px]">
          <BusinessHosting className="fill-slate-50 w-20 h-20" />
          <h2 className="text-white">Business Hosting</h2>
          <p className="text-slate-100">Faster performance, better security, and expert-recommended hosting for your business websites.</p>
        </div>
        <Button size="xl" className="bg-white text-gray-600 hover:text-primary">
          See Plans
        </Button>
      </div>
      <div className="space-y-5 bg-surfaceTwo p-10">
        <div className="space-y-3 md:min-h-[270px]">
          <PreManagedVpsHosting className="fill-white w-20 h-20" />
          <h2 className="text-white flex flex-col">
            {" "}
            <small className="text-xs w-full">PreManaged </small>
            <span className="-mt-2">VPS Hosting</span>
          </h2>
          <p className="text-slate-50">Dedicated support with easy-to-use and worry-free pre-managed VPS light hosting.</p>
        </div>
        <Button size="xl" className="bg-white text-gray-600 hover:text-primary">
          See Plans
        </Button>
      </div>
    </section>
  );
};

export default HomeCard;
