import PlainButton from "@/Components/Buttons/PlainButton";
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import WHResellerWhiteLabel from "@/Components/ModalComponents/WHResellerWhiteLabel";
import { useModalContext } from "@/Context/ModalProvider";
import React from "react";
import BannerImage from "../../../../public/images/article/white-labeled.svg";

const FCResellerWhiteLabel = () => {
  const { requestModal, setOrderType, setModalData, setModalTitle} = useModalContext();
  return (
    <article className="flex flex-col space-y-8 group items-start">
      <div className="w-full">
        <BannerImage className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[340px]" />{" "}
      </div>

      <ColumnTitleAndDesc title="100% White Labeled">
        <p className="text-text lg:text-xl lg:leading-9">As a SiteRacks Reseller, you can fully customize and brand your services, ensuring that your customers never know that you are a reseller. Our  support team is available 24x7 to help you with any technical issues, ensuring that your customers are always satisfied with your services.</p>
      </ColumnTitleAndDesc>

      <PlainButton
        text="LEARN MORE"
        handler={() => {
          setOrderType(true),
          setModalTitle("100% White Labeled"), setModalData(<WHResellerWhiteLabel />), requestModal();
        }}
      />
    </article>
  );
};

export default FCResellerWhiteLabel;
