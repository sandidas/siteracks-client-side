"use client"; // this is a client component
import PlainButton from "@/Components/Buttons/PlainButton";
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import { useModalContext } from "@/Context/ModalProvider";
import React from "react";
import FreeMigrationImage from "../../../../public/images/article/freeMigrationImage.svg";
import WHFreeMigration from "../WebHosting/SubCompo/WHFreeMigration";

const FCFreeWebsiteMigration = () => {
  const { requestModal, setModalData, setModalTitle } = useModalContext();
  return (
    <>
      <article className="flex flex-col space-y-8 group items-start">
        <div className="w-full">
          <FreeMigrationImage className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[340px]" />{" "}
        </div>

        <ColumnTitleAndDesc title="Free Website Migration">
          <p className="text-text lg:text-xl lg:leading-9">Our specially trained technical experts perform the process and ensure that your website is moved smoothly, with minimum downtime.</p>
        </ColumnTitleAndDesc>

        <PlainButton
          text="LEARN MORE"
          handler={() => {
            setModalTitle("Free Website Migration"), setModalData(<WHFreeMigration />), requestModal();
          }}
        />
      </article>
    </>
  );
};

export default FCFreeWebsiteMigration;