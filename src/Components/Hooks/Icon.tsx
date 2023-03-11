import React from "react";
import WordPress from "../../../public/images/nav/WordPress.svg";
import WebHosting from "../../../public/images/nav/webHosting.svg";
import PreManagedVpsHosting from "../../../public/images/nav/preManagedVpsHosting.svg";
import BusinessHosting from "../../../public/images/nav/businessHosting.svg";

interface IconProps {
  iconName?: string;
  customClass?: string;
}

const Icon = ({ iconName, customClass }: IconProps) => {
  if (iconName == "WebHosting") {
    return <WebHosting className={customClass} />;
  } else if (iconName == "WordPress") {
    return <WordPress className={customClass} />;
  } else if (iconName == "PreManagedVpsHosting") {
    return <PreManagedVpsHosting className={customClass} />;
  } else if (iconName == "BusinessHosting") {
    return <BusinessHosting className={customClass} />;
  } else {
    return <></>;
  }
};

export default Icon;
