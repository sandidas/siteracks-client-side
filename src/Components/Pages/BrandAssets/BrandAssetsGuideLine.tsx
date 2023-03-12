import DownloadButton from "@/Components/Buttons/DownloadButton";
import PlainButton from "@/Components/Buttons/PlainButton";
import FeatureCard from "@/Components/Card/FeatureCard";
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import Logo from "@/Components/Header/Logo";
import React from "react";

const BrandAssetsGuideLine = () => {
  return (
    <div>
      <ColumnTitleAndDesc title="LOGO MISUSE">
        <p className="text-text lg:text-xl lg:leading-9">
          It is important that the appearance of the logo remains consistent. The logo should not be misinterpreted, modified, or added to. No attempt should be made to alter the logo in any way. Its orientation, color and composition should remain as indicated in this document.
        </p>
      </ColumnTitleAndDesc>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <FeatureCard customClass="items-center">
          <div className="space-y-3 text-center">
            <Logo />

            <DownloadButton fileName={"SiteRacksLogo-EPS"} imageSrc={"images/brandAssets/gradient.jpg"}>
              SiteRacks Logo - <strong>White (EPS) Download</strong>
            </DownloadButton>
          </div>

          {/* footer */}
        </FeatureCard>
      </div>
    </div>
  );
};

export default BrandAssetsGuideLine;
