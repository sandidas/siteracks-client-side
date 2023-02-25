import PlainButton from "@/Components/Buttons/PlainButton";
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import WHOptimizedForCms from "@/Components/ModalComponents/WHOptimizedForCms";
import { useModalContext } from "@/Context/ModalProvider";
import OptimizedCMSApp from "../../../../public/images/article/optimized-cms-app.svg";
import React from "react";

const FCOptimizedForCMSApp = () => {
  const { requestModal, setModalData, setModalTitle } = useModalContext();
  return (
    <>
      <article className="flex flex-col space-y-8 group items-start">
        <div className="w-full">
          <OptimizedCMSApp className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[340px]" />{" "}
        </div>

        <ColumnTitleAndDesc supTitle="Optimized for " title="CMS Applications and E-Commerce">
          <p className="text-text lg:text-xl lg:leading-9">Maximize your online store or website with our optimized cloud servers designed specifically for CMS and e-commerce needs.</p>
        </ColumnTitleAndDesc>

        <PlainButton
          text="LEARN MORE"
          handler={() => {
            setModalTitle("Optimized for CMS Applications and Ecommerce"), setModalData(<WHOptimizedForCms />), requestModal();
          }}
        />
      </article>
    </>
  );
};

export default FCOptimizedForCMSApp;
