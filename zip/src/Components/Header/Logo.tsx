"use client"; // this is a client component

import React from "react";
import { useThemeContext } from "@/Context/ThemeProvider";
import Image from "next/image";
import SiteRacksLogoDark from "../../../public/logo/siteRacksLogoDark.svg";
import SiteRacksLogoLight from "../../../public/logo/siteRacksLogoLight.svg";

type statusProps = {
  logoHeight?: string;
  logoWidth?: string;
};
const Logo = (props: statusProps) => {
  let { logoHeight, logoWidth } = props;
  if (logoHeight) {
    logoHeight = logoHeight;
  } else {
    logoHeight = "35px";
  }

  if (logoWidth) {
    logoWidth = logoWidth;
  } else {
    logoWidth = "220px";
  }

  const { toggleColorScheme, colorScheme: isDarkMode } = useThemeContext();

  return <>{
    isDarkMode === "light" ? 
  <SiteRacksLogoLight alt="SiteRacks" width={logoWidth} height={logoHeight} className='max-w-full' /> : 
  <SiteRacksLogoDark alt="SiteRacks" width={logoWidth} height={logoHeight} className='max-w-full' />
  
}
</>;
};

export default Logo;