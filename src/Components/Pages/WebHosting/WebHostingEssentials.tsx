import FeatureCard from "@/Components/Card/FeatureCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";
import LatestTechIcon from "@/Components/Images/web-hosting/latestTechIcon.svg";
import PlainButton from "@/Components/Buttons/PlainButton";
import { useModalContext } from "@/Context/ModalProvider";
import WHBlazingFast from "./SubCompo/WHBlazingFast";
const WebHostingEssentials = () => {
    // use modal context 
    const { requestModal, setModalData, setModalTitle } = useModalContext();

  return (
    <div>
      <SectionTitle title="Cloud Web Hosting Essentials"  bottomSpace />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        
        <FeatureCard>
          <div className="space-y-5">
            <LatestTechIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Blazing fast websites</h3>
            <p className="text-text">Our servers are designed for optimal performance, utilizing the infrastructure of Digital Ocean and AWS, and incorporating several custom speed enhancements.</p>
          </div>
          <PlainButton
                text="LEARN MORE"
                handler={() => {
                  setModalTitle("Blazing fast websites"),
                  setModalData(<WHBlazingFast />),
                  requestModal();
                }}
              />
        </FeatureCard>





        <FeatureCard>
          <div className="space-y-5">
            <LatestTechIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Blazing fast websites</h3>
            <p className="text-text">Our servers are designed for optimal performance, utilizing the infrastructure of Digital Ocean and AWS, and incorporating several custom speed enhancements.</p>
          </div>
          <PlainButton
                text="LEARN MORE"
                handler={() => {
                  setModalTitle("Blazing fast websites"),
                  setModalData(<WHBlazingFast />),
                  requestModal();
                }}
              />
        </FeatureCard>





        <FeatureCard>
          <div className="space-y-5">
            <LatestTechIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Blazing fast websites</h3>
            <p className="text-text">Our servers are designed for optimal performance, utilizing the infrastructure of Digital Ocean and AWS, and incorporating several custom speed enhancements.</p>
          </div>
          <PlainButton
                text="LEARN MORE"
                handler={() => {
                  setModalTitle("Blazing fast websites"),
                  setModalData(<WHBlazingFast />),
                  requestModal();
                }}
              />
        </FeatureCard>





        <FeatureCard>
          <div className="space-y-5">
            <LatestTechIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Blazing fast websites</h3>
            <p className="text-text">Our servers are designed for optimal performance, utilizing the infrastructure of Digital Ocean and AWS, and incorporating several custom speed enhancements.</p>
          </div>
          <PlainButton
                text="LEARN MORE"
                handler={() => {
                  setModalTitle("Blazing fast websites"),
                  setModalData(<WHBlazingFast />),
                  requestModal();
                }}
              />
        </FeatureCard>





        <FeatureCard>
          <div className="space-y-5">
            <LatestTechIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Blazing fast websites</h3>
            <p className="text-text">Our servers are designed for optimal performance, utilizing the infrastructure of Digital Ocean and AWS, and incorporating several custom speed enhancements.</p>
          </div>
          <PlainButton
                text="LEARN MORE"
                handler={() => {
                  setModalTitle("Blazing fast websites"),
                  setModalData(<WHBlazingFast />),
                  requestModal();
                }}
              />
        </FeatureCard>





        <FeatureCard>
          <div className="space-y-5">
            <LatestTechIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Blazing fast websites</h3>
            <p className="text-text">Our servers are designed for optimal performance, utilizing the infrastructure of Digital Ocean and AWS, and incorporating several custom speed enhancements.</p>
          </div>
          <PlainButton
                text="LEARN MORE"
                handler={() => {
                  setModalTitle("Blazing fast websites"),
                  setModalData(<WHBlazingFast />),
                  requestModal();
                }}
              />
        </FeatureCard>




      </div>
    </div>
  );
};

export default WebHostingEssentials;
