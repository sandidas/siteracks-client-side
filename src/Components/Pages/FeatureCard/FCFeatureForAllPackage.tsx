import PlainButton from "@/Components/Buttons/PlainButton";
import FeatureCard from "@/Components/Card/FeatureCard";
import WHUltraFastPHP from "@/Components/ModalComponents/WHUltraFastPHP";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { useModalContext } from "@/Context/ModalProvider";
import React from "react";

import ScalableIcon from "../../../../public/images/icons/scalableIcon.svg";
import AdvanceServerSecurityIcon from "../../../../public/images/icons/advanceServerSecurityIcon.svg";
import CsfFirewallIcon from "../../../../public/images/icons/csfFirewallIcon.svg";
import DdosIcon from "../../../../public/images/icons/ddosIcon.svg";
import FirewallIcon from "../../../../public/images/icons/firewallIcon.svg";
import WordPressSolutions from "../../../../public/images/icons/wordPressSolutions.svg";

const FCFeatureForAllPackage = () => {
  const { requestModal, setModalData, setModalTitle } = useModalContext();
  return (
    <div>
      <SectionTitle title="Get Extra Benefits" subTitle="By developer selected best wordpress hosting" bottomSpace />
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
              setModalTitle("Ultra-Fast Updated PHP & MySQL"), setModalData(<WHUltraFastPHP />), requestModal();
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
              setModalTitle("Ultra-Fast Updated PHP & MySQL"), setModalData(<WHUltraFastPHP />), requestModal();
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
              setModalTitle("Ultra-Fast Updated PHP & MySQL"), setModalData(<WHUltraFastPHP />), requestModal();
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
              setModalTitle("Ultra-Fast Updated PHP & MySQL"), setModalData(<WHUltraFastPHP />), requestModal();
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
              setModalTitle("Ultra-Fast Updated PHP & MySQL"), setModalData(<WHUltraFastPHP />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard backgroundSecond>
          <div className="space-y-3">
            <WordPressSolutions className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-xl">In house WordPress Expert</h3>
            {/* <p className="text-text">Latest, Custom and Stable PHP setup for great overall site speed.</p> */}
          </div>
          <div className="grow"></div>
          {/* footer */}

          <PlainButton
            textSm
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Ultra-Fast Updated PHP & MySQL"), setModalData(<WHUltraFastPHP />), requestModal();
            }}
          />
        </FeatureCard>
      </div>
    </div>
  );
};

export default FCFeatureForAllPackage;
