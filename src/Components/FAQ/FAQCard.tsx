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
    <div className="border-b border-surface shadow shadow-surface mb-5 rounded-md">
      {title && (
        <h3 onClick={()=>setShow(!show)} className={`flex items-center justify-between p-5 cursor-pointer  ${show ? "dark:bg-surface":""}`}>
          <span className="text-xl lg:text-2xl leading-normal max-w-[90%]">{title} </span>

          <ArrowSmallRightIcon className={`h-7 w-7 min-w-7 duration-200 ${!show ? "text-primary" : "rotate-90 text-text"} `} />
        </h3>
      )}

{show && 
       <div className="pl-3 lg:pl-5 py-5 text-text">{children}</div>

}
    </div>
  );
};

export default FAQCard;
