import PlainButton from "@/Components/Buttons/PlainButton";
import FeatureCard from "@/Components/Card/FeatureCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { useModalContext } from "@/Context/ModalProvider";
import React from "react";

import ScalableIcon from "../../../../public/images/icons/scalableIcon.svg";
import AdvanceServerSecurityIcon from "../../../../public/images/icons/advanceServerSecurityIcon.svg";
import CsfFirewallIcon from "../../../../public/images/icons/csfFirewallIcon.svg";
import DdosIcon from "../../../../public/images/icons/ddosIcon.svg";
import FirewallIcon from "../../../../public/images/icons/firewallIcon.svg";
import WordPressSolutions from "../../../../public/images/icons/wordPressSolutions.svg";
import WHInstantlyScalable from "@/Components/ModalComponents/WHInstantlyScalable";
import WHTopNorthSecurity from "@/Components/ModalComponents/WHTopNorthSecurity";
import WHDDoS from "@/Components/ModalComponents/WHDDoS";
import WHCsfFirewal from "@/Components/ModalComponents/WHCsfFirewal";
import WHIntegratedFirewall from "@/Components/ModalComponents/WHIntegratedFirewall";
import WHWordPressSupport from "@/Components/ModalComponents/WHWordPressSupport";

const FCFeatureForAllPackage = () => {
  const { requestModal, setOrderType, setModalData, setModalTitle} = useModalContext();
  return (
    <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
      <SectionTitle title="Get Extra Benefits" subTitle="By developer selected best cloud wordpress hosting" bottomSpace />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-5">
        <FeatureCard backgroundSecond>
          <div className="space-y-3">
            <FirewallIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-xl">Integrated Firewall</h3>
            {/* <p className="text-text">Latest, Custom and Stable PHP setup for great overall site speed.</p> */}
          </div>
          <div className="grow"></div>
          {/* footer */}

          <PlainButton
            textSm
            text="LEARN MORE"
            handler={() => {
              setOrderType(true),
              setModalTitle("Integrated Firewall"), setModalData(<WHIntegratedFirewall />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard backgroundSecond>
          <div className="space-y-3">
            <DdosIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-xl">DDoS Attack Protection</h3>
            {/* <p className="text-text">Latest, Custom and Stable PHP setup for great overall site speed.</p> */}
          </div>
          <div className="grow"></div>
          {/* footer */}

          <PlainButton
            textSm
            text="LEARN MORE"
            handler={() => {
              setOrderType(true),
              setModalTitle("DDoS Attack Protection"), setModalData(<WHDDoS />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard backgroundSecond>
          <div className="space-y-3">
            <CsfFirewallIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-xl">CSF <br /> Firewall</h3>
            {/* <p className="text-text">Latest, Custom and Stable PHP setup for great overall site speed.</p> */}
          </div>
          <div className="grow"></div>
          {/* footer */}

          <PlainButton
            textSm
            text="LEARN MORE"
            handler={() => {
              setOrderType(true),
              setModalTitle("CSF Firewall"), setModalData(<WHCsfFirewal />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard backgroundSecond>
          <div className="space-y-3">
            <AdvanceServerSecurityIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-xl">Advanced Server Security</h3>
            {/* <p className="text-text">Latest, Custom and Stable PHP setup for great overall site speed.</p> */}
          </div>
          <div className="grow"></div>
          {/* footer */}

          <PlainButton
            textSm
            text="LEARN MORE"
            handler={() => {
              setOrderType(true),
              setModalTitle("Advanced Server Security"), setModalData(<WHTopNorthSecurity />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard backgroundSecond>
          <div className="space-y-3">
            <ScalableIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-xl">Instantly Scalable</h3>
            {/* <p className="text-text">Latest, Custom and Stable PHP setup for great overall site speed.</p> */}
          </div>
          <div className="grow"></div>
          {/* footer */}

          <PlainButton
            textSm
            text="LEARN MORE"
            handler={() => {
              setOrderType(true),
              setModalTitle("Instantly Scalable"), setModalData(<WHInstantlyScalable />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard backgroundSecond>
          <div className="space-y-3">
            <WordPressSolutions className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-xl">WordPress Expert Support</h3>
            {/* <p className="text-text">Latest, Custom and Stable PHP setup for great overall site speed.</p> */}
          </div>
          <div className="grow"></div>
          {/* footer */}

          <PlainButton
            textSm
            text="LEARN MORE"
            handler={() => {
              setOrderType(true),
              setModalTitle("WordPress Expert Support"), setModalData(<WHWordPressSupport />), requestModal();
            }}
          />
        </FeatureCard>
      </div>
    </div>
  );
};

export default FCFeatureForAllPackage;
