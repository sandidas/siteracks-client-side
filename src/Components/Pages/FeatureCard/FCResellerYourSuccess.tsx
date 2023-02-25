import PlainButton from "@/Components/Buttons/PlainButton";
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import WHResellerYourSuccess from "@/Components/ModalComponents/WHResellerYourSuccess";
import { useModalContext } from "@/Context/ModalProvider";
import BannerImage from "../../../../public/images/article/reseller-success.svg";
import React from "react";

const FCResellerYourSuccess = () => {
  const { requestModal, setModalData, setModalTitle } = useModalContext();
  return (
    <article className="flex flex-col space-y-8 group items-start">
      <div className="w-full">
        <BannerImage className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[340px]" />{" "}
      </div>

      <ColumnTitleAndDesc title="Designed to ensure your success.">
        <p className="text-text lg:text-xl lg:leading-9">
          We believe in a simple philosophy: when you succeed, we succeed. That's why we provide all the tools you need to run a successful reseller hosting business, regardless of your experience in the industry. Our platform is easy to use and fully equipped to offer your customers all the
          services they need.
        </p>
      </ColumnTitleAndDesc>

      <PlainButton
        text="LEARN MORE"
        handler={() => {
          setModalTitle("Designed to ensure your success."), setModalData(<WHResellerYourSuccess />), requestModal();
        }}
      />
    </article>
  );
};

export default FCResellerYourSuccess;
