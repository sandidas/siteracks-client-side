"use client"; // this is a client component

import React from "react";
import { useThemeContext } from "@/Context/ThemeProvider";
import Image from "next/image";
import SiteRacksLogoDark from "../../../public/logo/siteRacksLogoDark.svg";
import SiteRacksLogoLight from "../../../public/logo/siteRacksLogoLight.svg";
const Logo = () => {
  const { toggleColorScheme, colorScheme: isDarkMode } = useThemeContext();


  return <>{isDarkMode === "light" ?
  <SiteRacksLogoLight alt="SiteRacks" width="220px"  height="35px" /> : 
  <SiteRacksLogoDark alt="SiteRacks" width="220px" height="35px" />
  
  }</>;
};

export default Logo;
