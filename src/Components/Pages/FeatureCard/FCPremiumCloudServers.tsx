"use client"; // this is a client component
import PlainButton from "@/Components/Buttons/PlainButton";
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import { useModalContext } from "@/Context/ModalProvider";
import React from "react";
import PremiumCloudServerImage from "../../../../public/images/article/premium-cloud-server.svg";
import WHPremiumCloudServers from "../../ModalComponents/WHPremiumCloudServers";

const FCPremiumCloudServers = () => {
    const { requestModal, setModalData, setModalTitle } = useModalContext();

  return (
    <>
      {/* Premium Cloud Servers */}
      <article className="flex flex-col space-y-8 group items-start">
        <div className="w-full">
          <PremiumCloudServerImage className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[340px]" />{" "}
        </div>

        <ColumnTitleAndDesc title="Premium Cloud Servers">
          <p className="text-text lg:text-xl lg:leading-9">Enjoy better latency and lesser downtime while keeping your account and data always secured. Our platform is built with Premium AWS Cloud and Digital Ocean Cloud servers.</p>
        </ColumnTitleAndDesc>

        <PlainButton
          text="LEARN MORE"
          handler={() => {
            setModalTitle("Premium Cloud Servers"), setModalData(<WHPremiumCloudServers />), requestModal();
          }}
        />
      </article>
    </>
  );
};

export default FCPremiumCloudServers;
