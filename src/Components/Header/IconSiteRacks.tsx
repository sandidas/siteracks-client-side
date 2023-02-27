import { useThemeContext } from "@/Context/ThemeProvider";
import React from "react";
import SiteRacksLogoDark from "../../../public/favIcons/siteRacksFavDark.svg";
import SiteRacksLogoLight from "../../../public/favIcons/siteRacksFavLight.svg";
interface IIcon {
  logoHeight?: string;
  logoWidth?: string;
}

const IconSiteRacks = (props: IIcon) => {
  let { logoHeight, logoWidth } = props;
  if (logoHeight) {
    logoHeight = logoHeight;
  } else {
    logoHeight = "400px";
  }

  if (logoWidth) {
    logoWidth = logoWidth;
  } else {
    logoWidth = "400px";
  }
  const { colorScheme: isDarkMode } = useThemeContext();

  return <>{isDarkMode === "light" ? <SiteRacksLogoLight alt="SiteRacks" width={logoWidth} height={logoHeight} className="max-w-full" /> : <SiteRacksLogoDark alt="SiteRacks" width={logoWidth} height={logoHeight} className="max-w-full" />}</>;
};

export default IconSiteRacks;
