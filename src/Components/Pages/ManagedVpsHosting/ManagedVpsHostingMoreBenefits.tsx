import PlainButton from "@/Components/Buttons/PlainButton";
import FeatureCard from "@/Components/Card/FeatureCard";
import WHUltraFastPHP from "@/Components/ModalComponents/WHUltraFastPHP";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { useModalContext } from "@/Context/ModalProvider";
import React from "react";

const ManagedVpsHostingMoreBenefits = () => {
  const { requestModal, setModalData, setModalTitle } = useModalContext();
  return (
    <>
      <SectionTitle title="More Benefits" subTitle="Of SiteRacks 100% Fully Managed VPS Hosting Plans" bottomSpace />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            {/* <PhpIcon className="fill-primary w-14 h-14" /> */}
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
      </div>
    </>
  );
};

export default ManagedVpsHostingMoreBenefits;
