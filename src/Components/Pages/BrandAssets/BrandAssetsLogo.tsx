import DownloadButton from "@/Components/Buttons/DownloadButton";
import FeatureCard from "@/Components/Card/FeatureCard";
import Logo from "@/Components/Header/Logo";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";

const BrandAssetsLogo = () => {
  return (
    <div>
      <SectionTitle title="The SiteRacks Logo" bottomSpace />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-10">
        {/* File Type png */}
        <FeatureCard backgroundSecond customClass="items-center">
          <div className="space-y-3 text-center ">
            <DownloadButton fileName={"siteRacks-primary-logo-jpg"} imageSrc={"images/brandAssets/primary-logo.jpg"} customClass="flex flex-col h-fit space-y-2">
              <span>
                <Logo logoHeight="60px" logoWidth="300px" />
              </span>
              <span className="text-base">
                SiteRacks Primary Logo - <strong> (JPG)</strong>
              </span>
            </DownloadButton>
          </div>
        </FeatureCard>
        <FeatureCard  customClass="items-center">
          <div className="space-y-3 text-center ">
            <DownloadButton fileName={"siteRacks-secondary-logo-jpg"} imageSrc={"images/brandAssets/secondary-logo-white.jpg"} customClass="flex flex-col h-fit space-y-2">
              <span>
                <Logo logoHeight="60px" logoWidth="300px" />
              </span>
              <span className="text-base">
                SiteRacks Secondary Logo White - <strong> (JPG)</strong>
              </span>
            </DownloadButton>
          </div>
        </FeatureCard>
        {/* # File Type png */}

        {/* File Type png */}
        <FeatureCard backgroundSecond customClass="items-center">
          <div className="space-y-3 text-center ">
            <DownloadButton fileName={"siteRacks-primary-logo-png"} imageSrc={"images/brandAssets/primary-logo.png"} customClass="flex flex-col h-fit space-y-2">
              <span>
                <Logo logoHeight="60px" logoWidth="300px" />
              </span>
              <span className="text-base">
                SiteRacks Primary Logo - <strong> (PNG)</strong>
              </span>
            </DownloadButton>
          </div>
        </FeatureCard>
        <FeatureCard customClass="items-center">
          <div className="space-y-3 text-center ">
            <DownloadButton fileName={"siteRacks-secondary-logo-png"} imageSrc={"images/brandAssets/secondary-logo-white.png"} customClass="flex flex-col h-fit space-y-2">
              <span>
                <Logo logoHeight="60px" logoWidth="300px" />
              </span>
              <span className="text-base">
                SiteRacks Secondary Logo White - <strong> (PNG)</strong>
              </span>
            </DownloadButton>
          </div>
        </FeatureCard>
        {/* # File Type png */}

        {/* File Type SVG */}
        <FeatureCard backgroundSecond customClass="items-center">
          <div className="space-y-3 text-center ">
            <DownloadButton fileName={"siteRacks-primary-logo-SVG"} imageSrc={"images/brandAssets/primary-logo.svg"} customClass="flex flex-col h-fit space-y-2">
              <span>
                <Logo logoHeight="60px" logoWidth="300px" />
              </span>
              <span className="text-base">
                SiteRacks Primary Logo - <strong> (SVG)</strong>
              </span>
            </DownloadButton>
          </div>
        </FeatureCard>
        <FeatureCard customClass="items-center">
          <div className="space-y-3 text-center ">
            <DownloadButton fileName={"siteRacks-secondary-logo-SVG"} imageSrc={"images/brandAssets/secondary-logo-white.svg"} customClass="flex flex-col h-fit space-y-2">
              <span>
                <Logo logoHeight="60px" logoWidth="300px" />
              </span>
              <span className="text-base">
                SiteRacks Secondary Logo White - <strong> (SVG)</strong>
              </span>
            </DownloadButton>
          </div>
        </FeatureCard>
        {/* # File Type SVG */}

        {/* File Type EPS */}
        <FeatureCard backgroundSecond customClass="items-center">
          <div className="space-y-3 text-center ">
            <DownloadButton fileName={"siteRacks-primary-logo-EPS"} imageSrc={"images/brandAssets/primary-logo.eps"} customClass="flex flex-col h-fit space-y-2">
              <span>
                <Logo logoHeight="60px" logoWidth="300px" />
              </span>
              <span className="text-base">
                SiteRacks Primary Logo - <strong> (EPS)</strong>
              </span>
            </DownloadButton>
          </div>
        </FeatureCard>
        <FeatureCard customClass="items-center">
          <div className="space-y-3 text-center ">
            <DownloadButton fileName={"siteRacks-secondary-logo-EPS"} imageSrc={"images/brandAssets/secondary-logo-white.eps"} customClass="flex flex-col h-fit space-y-2">
              <span>
                <Logo logoHeight="60px" logoWidth="300px" />
              </span>
              <span className="text-base">
                SiteRacks Secondary Logo White - <strong> (EPS)</strong>
              </span>
            </DownloadButton>
          </div>
        </FeatureCard>
        {/* # File Type EPS */}
      </div>
    </div>
  );
};

export default BrandAssetsLogo;
