import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";
import UbuntuLogo from "../../../../public/images/logos/ubuntuLogo.svg";
import PleskLogo from "../../../../public/images/logos/pleskLogo.svg";
import CentosLogo from "../../../../public/images/logos/centosLogo.svg";
import CPanelLogo from "../../../../public/images/logos/cPanelLogo.svg";
import Immunify360Logo from "../../../../public/images/logos/immunify360Logo.svg";
import CloudLinuxLogo from "../../../../public/images/logos/cloudLinuxLogo.svg";
import LightSpeedLogo from "../../../../public/images/logos/lightSpeedLogo.svg";
import LogoCard from "@/Components/Card/LogoCard";

const ManagedVpsHostingReadyApps = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-3 md:px-5">
        <SectionTitle bottomSpace title="Ready To Use Apps" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-7">
          <LogoCard>
            <UbuntuLogo className="w-full h-24 px-10" />
          </LogoCard>
          <LogoCard>
            <PleskLogo className="w-full h-24 px-10" />
          </LogoCard>
          <LogoCard>
            <CentosLogo className="w-full h-24 px-10" />
          </LogoCard>
          <LogoCard>
            <CPanelLogo className="w-full h-24 px-10" />
          </LogoCard>
          <LogoCard>
            <Immunify360Logo className="w-full h-24 px-10" />
          </LogoCard>
          <LogoCard>
            <CloudLinuxLogo className="w-full h-24 px-10" />
          </LogoCard>
          <LogoCard>
            <LightSpeedLogo className="w-full h-24 px-10" />
          </LogoCard>
        </div>
      </div>
    </>
  );
};

export default ManagedVpsHostingReadyApps;
