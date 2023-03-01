import Link from "next/dist/client/link";
import React from "react";
import { socialMenuItems } from "../Data/MenuData";
const SocialIcons = () => {
  return (
    <div className="flex">
      {socialMenuItems.map((item, key) => (
        <Link title={item.title} target={item.target} key={key} href={item.linkUrl} className="hover:text-title bg-slate-400 dark:bg-surface hover:dark:bg-slate-100/10 hover:bg-black p-3 m-2">
          <item.icon className="w-3 h-3 lg:w-4 lg:h-4 xl:w-4 xl:h-4 fill-slate-300 dark:fill-slate-400" />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
