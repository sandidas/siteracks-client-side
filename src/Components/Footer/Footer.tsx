import Link from "next/link";
import React from "react";
import Logo from "../Header/Logo";
import { hostingMenuItems, domainMenuItems, securityMenuItems, helpMenuItems, aboutMenuItems, tosMenuItems } from "../Data/MenuData";
import ScrollToTop from "./ScrollToTop";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear().toString();


  return (
    <>
      <section className="max-w-screen-2xl mx-auto pt-[10vh] px-5">
        <div className="flex justify-end">
          <Logo logoHeight="120px" logoWidth="900px" />
        </div>
      </section>
      <footer className="bg-surface px-5">
        <section className="py-[10vh] grid grid-cols-1 md:grid-cols-5 gap-10 max-w-screen-2xl mx-auto">
          <div className="space-y-5">
            <h3 className="text-title font-bold text-xl uppercase">Hosting </h3>
            <ul className="space-y-4 text-text text-sm">
              {hostingMenuItems.map((item, key) => (
                <li key={key}>
                  <Link href={item.linkUrl} className="hover:text-title">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-title font-bold text-xl uppercase">Domain </h3>
            <ul className="space-y-4 text-text text-sm">
              {domainMenuItems.map((item, key) => (
                <li key={key}>
                  <Link href={item.linkUrl} className="hover:text-title">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-title font-bold text-xl uppercase">Security </h3>
            <ul className="space-y-4 text-text text-sm">
              {securityMenuItems.map((item, key) => (
                <li key={key}>
                  <Link href={item.linkUrl} className="hover:text-title">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-title font-bold text-xl uppercase">Help</h3>
            <ul className="space-y-4 text-text text-sm">
              {helpMenuItems.map((item, key) => (
                <li key={key}>
                  <Link href={item.linkUrl} className="hover:text-title">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-title font-bold text-xl uppercase">SiteRacks </h3>
            <ul className="space-y-4 text-text text-sm">
              {aboutMenuItems.map((item, key) => (
                <li key={key}>
                  <Link href={item.linkUrl} className="hover:text-title">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className=" max-w-screen-2xl mx-auto ">
          <div className="py-5 flex items-center justify-between">
            <Logo logoWidth="250px" logoHeight="33px" />

            <SocialIcons />
          </div>
          <div className="py-[2vh] border-t border-slate-300 dark:border-slate-600 text-text">
            <p>Copyright © {currentYear} SiteRacks, LLC. All Rights Reserved.</p>
            <p className="text-xs">All trademarks, logos, and brand names are the property of their respective owners.</p>
            <ul className="flex text-sm gap-5 justify-end">
              {tosMenuItems.map((item, key) => (
                <li key={key}>
                  <Link href={item.linkUrl} className="hover:text-title">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </footer>
      <ScrollToTop />
    </>
  );
};

export default Footer;
