import { ArrowSmallRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { UnstyledButton } from "@mantine/core";
import React from "react";

interface IButton {
  text?: string;
  href?: string;
  textSm?: boolean | undefined;
  children?: any;
  target?: boolean;
}

const PlainButtonWithLink = ({ target, text, href, textSm, children }: IButton) => {
  return (
    <UnstyledButton target={target ? "_blank" : "_parent"} component="a" href={href} className="transition ease-in-out duration-500 flex h-10 items-center font-medium text-primary hover:animate-pulse">
      <span className={`py-2 tracking-normal group-hover:tracking-wider duration-300 border-b-2 border-surface hover:border-primary ${textSm ? "text-xs" : ""} `}>{text && text}</span>
      {children && children}
      <ArrowSmallRightIcon className={`group-hover:translate-x-2 duration-300 ${textSm ? "h-4 w-4 pl-1" : "h-8 w-8 pl-2"}`} />
    </UnstyledButton>
  );
};

export default PlainButtonWithLink;
