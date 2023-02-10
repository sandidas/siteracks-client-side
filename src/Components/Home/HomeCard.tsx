import Image from "next/image";
import React from "react";
import WebHosting from "../../../public/images/nav/webHosting.svg";
import WordPress from "../../../public/images/nav/WordPress.svg";
import PreManagedVpsHosting from "../../../public/images/nav/preManagedVpsHosting.svg";
import BusinessHosting from "../../../public/images/nav/businessHosting.svg";
import { Button } from "@mantine/core";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const HomeCard = () => {
  return (
    <section className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-[10vh]">
      <div className="space-y-5 shadow-md rounded-md bg-surfaceFive p-10 hover:-translate-y-3 duration-200 group">
        <div className="space-y-4 md:min-h-[280px]">
          <WebHosting className="fill-white w-20 h-20" />
          <h2 className="text-white font-bold text-3xl"> Cloud Hosting</h2>
          <p className="text-secondaryOn text-slate-100">Cost-effective, flexible cloud hosting for small businesses or startups.</p>
        </div>
        <div>
          <div className="text-sky-600">Starting at</div>
          <div className="flex">
            <div className="text-sky-600 font-bold text-5xl group-hover:text-white">$4.95 </div>
            <div className="text-sky-600 pt-3">/mo</div>
          </div>
        </div>
        <Button size="xl" className="bg-white shadow transition ease-in-out duration-500 text-gray-600 group-hover:text-white group-hover:bg-black">
          See Plans
          <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
        </Button>
      </div>
      {/*  */}
      <div className="space-y-5 shadow-md rounded-md bg-secondaryOn p-10 hover:-translate-y-3 duration-200 group relative">
        <div className="space-y-4 md:min-h-[280px]">
          <WordPress className="fill-green-700 w-20 h-20" />
          <h3 className="text-slate-600 font-bold text-3xl">WordPress Hosting</h3>
          <p className="text-slate-600">WordPress eco-friendly, cost-effective, easy to use WordPress hosting.</p>
        </div>
        <div>
          <div className="text-text">Starting at</div>
          <div className="flex">
            <div className="text-text font-bold text-5xl group-hover:text-black">$6.95 </div>
            <div className="text-text pt-3">/mo</div>
          </div>
        </div>
        <Button size="xl" className="bg-white shadow transition ease-in-out duration-500 text-gray-600 group-hover:text-white group-hover:bg-black">
          See Plans
          <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
        </Button>
        <div className="absolute top-0 right-0 bg-red-500 text-lime-50 px-3 font-medium rounded-l-md">Popular</div>
      </div>
{/* business  */}
      <div className="space-y-5 shadow-md rounded-md bg-surfaceThree p-10 hover:-translate-y-3 duration-200 group">
        <div className="space-y-4 md:min-h-[280px]">
          <BusinessHosting className="fill-slate-50 w-20 h-20" />
          <h3 className="text-white font-bold text-3xl">Business Hosting</h3>
          <p className="text-slate-100">Faster performance, better security, and expert-recommended hosting for your business websites.</p>
        </div>
        <div>
          <div className="text-indigo-300">Starting at</div>
          <div className="flex">
            <div className="text-indigo-300 font-bold text-5xl group-hover:text-white">$12.90 </div>
            <div className="text-indigo-300 pt-3">/mo</div>
          </div>
        </div>
        <Button size="xl" className="bg-white shadow transition ease-in-out duration-500 text-gray-600 group-hover:text-white group-hover:bg-black">
          See Plans
          <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
        </Button>
      </div>
      {/*  */}
      <div className="space-y-5 shadow-md rounded-md bg-surfaceTwo p-10 hover:-translate-y-3 duration-200 group">
        <div className="space-y-4 md:min-h-[280px]">
          <PreManagedVpsHosting className="fill-white w-20 h-20" />
          <h3 className="text-white flex flex-col font-bold text-3xl">
            {" "}
            <small className="text-xs w-full">PreManaged </small>
            <span className="-mt-2">VPS Hosting</span>
          </h3>
          <p className="text-slate-50">Dedicated support with easy-to-use and worry-free pre-managed VPS light hosting.</p>
        </div>
        <div>
          <div className="text-red-700">Starting at</div>
          <div className="flex">
            <div className="text-red-700 font-bold text-5xl group-hover:text-white">$70.95 </div>
            <div className="text-red-700 pt-3">/mo</div>
          </div>
        </div>
        <Button size="xl" className="bg-white shadow transition ease-in-out duration-500 text-gray-600 group-hover:text-white group-hover:bg-black">
          See Plans
          <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
        </Button>
      </div>
    </section>
  );
};

export default HomeCard;
