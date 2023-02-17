import PlainButton from "@/Components/Buttons/PlainButton";
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import { useModalContext } from "@/Context/ModalProvider";
import React from "react";
import WordpressWebsite from "../../../../public/images/article/managed-wordpress-hosting.svg";
import WHManagedWordpress from "@/Components/ModalComponents/WHManagedWordpress";

const FCManagedWordPressHosting = () => {
  const { requestModal, setModalData, setModalTitle } = useModalContext();
  return (
    <>
      <article className="flex flex-col space-y-8 group items-start">
        <div className="w-full">
          <WordpressWebsite className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[340px]" />{" "}
        </div>

        <ColumnTitleAndDesc supTitle="Get lightning-fast and ultra-secure" title="Managed WordPress Hosting">
          <p className="text-text lg:text-xl lg:leading-9">Get Managed WordPress hosting that is both lightning-fast and ultra-secure, providing you with unbeatable website speed and security.</p>
        </ColumnTitleAndDesc>

        <PlainButton
          text="LEARN MORE"
          handler={() => {
            setModalTitle("Managed WordPress Hosting"), setModalData(<WHManagedWordpress />), requestModal();
          }}
        />
      </article>
    </>
  );
};

export default FCManagedWordPressHosting;
