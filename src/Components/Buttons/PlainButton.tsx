import { ArrowSmallRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

interface IButton {
  text?: string;
  handler?: () => void;
  textSm?: boolean | undefined;
  closeButton?: boolean;
}

const PlainButton = ({ text, handler, textSm, closeButton }: IButton) => {
  return (
    <button onClick={handler} className="transition ease-in-out duration-500 flex h-10 items-center font-medium text-primary hover:animate-pulse">
      <span className={`py-2 tracking-normal group-hover:tracking-wider duration-300 border-b-2 border-surface hover:border-primary ${textSm ? "text-xs" : ""} `}>{text && text}</span>
      {closeButton ? <XMarkIcon className="w-6 h-6 pl-1" /> : <ArrowSmallRightIcon className={`group-hover:translate-x-2 duration-300 ${textSm ? "h-4 w-4 pl-1" : "h-8 w-8 pl-2"}`} />}
    </button>
  );
};

export default PlainButton;
