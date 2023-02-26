import PlainButton from "@/Components/Buttons/PlainButton";
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import WHResellerScaleBusiness from "@/Components/ModalComponents/WHResellerScaleBusiness";
import { useModalContext } from "@/Context/ModalProvider";
import React from "react";
import BannerImage from "../../../../public/images/article/scale-business.svg";

const FCResellerScaleBusiness = () => {
  const { requestModal, setOrderType, setModalData, setModalTitle} = useModalContext();
  return (
    <article className="flex flex-col space-y-8 group items-start">
      <div className="w-full">
        <BannerImage className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[340px]" />{" "}
      </div>

      <ColumnTitleAndDesc title="Scale your business at any time">
        <p className="text-text lg:text-xl lg:leading-9">Our reseller plans allow you to quickly and easily add new sites with just a few clicks. If you require more hosting resources, you can effortlessly upgrade to a higher plan or expand your cloud's storage, CPU, and RAM.</p>
      </ColumnTitleAndDesc>

      <PlainButton
        text="LEARN MORE"
        handler={() => {
          setOrderType(true),
          setModalTitle("Scale your business at any time"), setModalData(<WHResellerScaleBusiness />), requestModal();
        }}
      />
    </article>
  );
};

export default FCResellerScaleBusiness;
