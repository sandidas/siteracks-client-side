import Link from "next/dist/client/link";
import React from "react";
import { socialMenuItems } from "../Data/MenuData";
import WhatsAppIcon from "../../../public/images/nav/whatsAppIcon.svg";
import { UnstyledButton } from "@mantine/core";
const SocialIcons = () => {
  return (
    <div className="flex items-center gap-2">
      {socialMenuItems.map((item, key) => (
        <Link title={item.title} target={item.target} key={key} href={item.linkUrl} className="hover:text-title bg-slate-400 dark:bg-surface hover:dark:bg-slate-100/10 hover:bg-black p-3 m-2">
          <item.icon className="fill-primary w-5 h-5" />
        </Link>
      ))}

      <UnstyledButton component="a" href="https://wa.me/919641239131?text=Hello, I have a question about your service. Can you please help me?" className="hover:text-title bg-slate-400 dark:bg-surface hover:dark:bg-slate-100/10 hover:bg-black p-3 m-2">
        <WhatsAppIcon className="fill-slate-100 w-6 h-6" />
      </UnstyledButton>
    </div>
  );
};

export default SocialIcons;
