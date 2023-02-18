"use client";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

interface IFaqCard {
  title: string;
  children: React.ReactNode;
}

const FAQCard = ({ title, children }: IFaqCard) => {
  const [show, setShow] = useState<boolean>(true);
  return (
    <div className="mb-2 border-b border-slate-400 dark:border-slate-600">
      {title && (
        <h3 onClick={()=>setShow(!show)} className={`flex items-center justify-between p-5 cursor-pointer font-medium  ${show ? "":""}`}>
          <span className="text-xl lg:text-2xl leading-normal max-w-[90%]">{title} </span>

          <ArrowSmallRightIcon className={`h-7 w-7 min-w-7 duration-200 ${!show ? "text-primary" : "rotate-90 text-text"} `} />
        </h3>
      )}

{show && 
       <div className="pl-3 lg:pl-10 py-5 mb-5 text-text">{children}</div>

}
    </div>
  );
};

export default FAQCard;
