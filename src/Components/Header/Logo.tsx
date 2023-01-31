"use client"; // this is a client component

import React from "react";
import { useThemeContext } from "@/Context/ThemeProvider";
import Image from "next/image";
import SiteRacksLogoDark from "../../../public/logo/siteRacksLogoDark.svg";
import SiteRacksLogoLight from "../../../public/logo/siteRacksLogoLight.svg";
const Logo = () => {
  const { toggleColorScheme, colorScheme: isDarkMode } = useThemeContext();


  return <>{isDarkMode === "light" ?
  <Image alt="SiteRacks" src={SiteRacksLogoLight} priority className="max-w-[220px] max-h-10" /> : 
  <Image alt="SiteRacks" src={SiteRacksLogoDark} priority className="max-w-[220px]  max-h-10" />
  
  }</>;
};

export default Logo;
