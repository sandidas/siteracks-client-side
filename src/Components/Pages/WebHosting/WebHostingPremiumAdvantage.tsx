import PlainButton from "@/Components/Buttons/PlainButton";
import FeatureCard from "@/Components/Card/FeatureCard";
import React from "react";
import LatestTechIcon from "@/Components/Images/web-hosting/latestTechIcon.svg";
import { useModalContext } from "@/Context/ModalProvider";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import WHTopNorthSecurity from "./SubCompo/WHTopNorthSecurity";
import WHUltraFastPHP from "./SubCompo/WHUltraFastPHP";
import WHDataCenter from "./SubCompo/WHDataCenter";
import WHMalwareScan from "./SubCompo/WHMalwareScan";
import WHUnlimitedSites from "./SubCompo/WHUnlimitedSites";
import WHPrioritySupport from "./SubCompo/WHPrioritySupport";

const WebHostingPremiumAdvantage = () => {
  // use modal context
  const { requestModal, setModalData, setModalTitle } = useModalContext();

  return (
    <>
      <SectionTitle title="Get an advantage by premium packages" bottomSpace />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      <FeatureCard background>
          <div className="space-y-5">
            <LatestTechIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Host Unlimited Sites</h3>
            <p className="text-text">Host unlimited sites and reduce hosting costs by grouping low resource-demand sites under one account. Optimize your resources for maximum savings.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Host Unlimited Sites"), setModalData(<WHUnlimitedSites />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard background>
          <div className="space-y-5">
            <LatestTechIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Priority support</h3>
            <p className="text-text">Premium Hosting package users receive priority support from our top-notch agents for exceptional technical support experience with speed and quality.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("With advanced priority support"), setModalData(<WHPrioritySupport />), requestModal();
            }}
          />
        </FeatureCard>


        <FeatureCard background>
          <div className="space-y-5">
            <LatestTechIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Ultra-Fast Updated PHP & MySQL</h3>
            <p className="text-text">Latest, Custom and Stable PHP setup for great overall site speed.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}

          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Ultra-Fast Updated PHP & MySQL"), setModalData(<WHUltraFastPHP />), requestModal();
            }}
          />
        </FeatureCard>

        
        <FeatureCard background>
          <div className="space-y-5">
            <LatestTechIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Top-north Security</h3>
            <p className="text-text">We prioritize the security of your sites by managing it at both server and application level. Our services include free SSL and daily backups, ensuring your data is protected. Trust us for a worry-free experience.</p>
          </div>
          <div className="grow"></div>
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Top-north Security"), setModalData(<WHTopNorthSecurity />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard background>
          <div className="space-y-5">
            <LatestTechIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Pre-Defined Data center based on your location</h3>
            <p className="text-text">Our AI tool optimizes website performance by pre-selecting the best data center based on your proximity. This ensures seamless website loading</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Pre-Defined Data center based on your location"), setModalData(<WHDataCenter />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard background>
          <div className="space-y-5">
            <LatestTechIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Malware Scan and Removal</h3>
            <p className="text-text">Don't become a victim of a hacked site. Our malware removal tool protects your website from any threats and malware, ensuring you never have to experience the frustration of a hacked site. Keep your site safe with our solution.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Malware Scan and Removal"), setModalData(<WHMalwareScan />), requestModal();
            }}
          />
        </FeatureCard>

        
      </div>
    </>
  );
};

export default WebHostingPremiumAdvantage;
