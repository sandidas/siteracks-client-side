import PlainButton from "@/Components/Buttons/PlainButton";
import FeatureCard from "@/Components/Card/FeatureCard";
import WHUltraFastPHP from "@/Components/ModalComponents/WHUltraFastPHP";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { useModalContext } from "@/Context/ModalProvider";
import React from "react";

const FCFeatureForAllPackage = () => {
  const { requestModal, setModalData, setModalTitle } = useModalContext();
  return (
    <div>
      <SectionTitle title="Get Extra Benefits" subTitle="By developer selected best wordpress hosting" bottomSpace />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        <FeatureCard backgroundSecond>
          <div className="space-y-3">
            {/* <PhpIcon className="fill-primary w-14 h-14" /> */}
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
            {/* <PhpIcon className="fill-primary w-14 h-14" /> */}
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
            {/* <PhpIcon className="fill-primary w-14 h-14" /> */}
            <h3 className="text-title font-bold text-xl">CSF Firewall</h3>
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
            {/* <PhpIcon className="fill-primary w-14 h-14" /> */}
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
            {/* <PhpIcon className="fill-primary w-14 h-14" /> */}
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
            {/* <PhpIcon className="fill-primary w-14 h-14" /> */}
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
