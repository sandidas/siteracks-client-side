import PlainButton from "@/Components/Buttons/PlainButton";
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import { useModalContext } from "@/Context/ModalProvider";
import React from "react";
import PremiumWebsiteBuilderImage from "../../../../public/images/article/premium-website-builder.svg";
import WHPremiumWebsite from "../../ModalComponents/WHPremiumWebsite";

const FCPremiumWebsiteBuilder = () => {
    const { requestModal, setModalData, setModalTitle } = useModalContext();
  return (
    <>
      <article className="flex flex-col space-y-8 group items-start">
        <div className="w-full">
          <PremiumWebsiteBuilderImage className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[340px]" />{" "}
        </div>

        <ColumnTitleAndDesc title="Premium Website Builder">
          <p className="text-text lg:text-xl lg:leading-9">Premium Website Builder offers powerful tools, customization options, and professional design templates to create stunning websites easily.</p>
        </ColumnTitleAndDesc>

        <PlainButton
          text="LEARN MORE"
          handler={() => {
            setModalTitle("Premium Website Builder"), setModalData(<WHPremiumWebsite />), requestModal();
          }}
        />
      </article>
    </>
  );
};

export default FCPremiumWebsiteBuilder;
