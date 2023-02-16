"use client"; // this is a client component
import PlainButton from "@/Components/Buttons/PlainButton";
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import WHDedicatedWordPressExpertModal from "@/Components/ModalComponents/WHDedicatedWordPressExpertModal";
import { useModalContext } from "@/Context/ModalProvider";
import React from "react";
import DedicatedWordpressExpert from "../../../../public/images/article/dedicated-wordpress-expert.svg";

const FEDedicatedWordPressExpert = () => {
  const { requestModal, setModalData, setModalTitle } = useModalContext();
  return (
    <>
      <article className="flex flex-col space-y-8 group items-start">
        <div className="w-full">
          <DedicatedWordpressExpert className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[340px]" />{" "}
        </div>

        <ColumnTitleAndDesc supTitle="Take the premium Or ultimate plan and get a" title="Dedicated Wordpress Expert">
          <p className="text-text lg:text-xl lg:leading-9">With our premium package, you'll receive a specialized WordPress expert to assist with building and resolving any WordPress-related concerns for your site.</p>
        </ColumnTitleAndDesc>

        <PlainButton
          text="LEARN MORE"
          handler={() => {
            setModalTitle("Dedicated Wordpress Expert"), setModalData(<WHDedicatedWordPressExpertModal />), requestModal();
          }}
        />
      </article>
    </>
  );
};

export default FEDedicatedWordPressExpert;
