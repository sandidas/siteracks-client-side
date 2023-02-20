import PlainButton from "@/Components/Buttons/PlainButton";
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import WhHighPerformanceAndResource from "@/Components/ModalComponents/WhHighPerformanceAndResource";
import { useModalContext } from "@/Context/ModalProvider";
import React from "react";
import HighPerformanceResources from "../../../../public/images/article/high-performance-resources.svg";

const FCHighPerformanceResources = () => {
  const { requestModal, setModalData, setModalTitle } = useModalContext();
  return (
    <>
      <article className="flex flex-col space-y-8 group items-start">
        <div className="w-full">
          <HighPerformanceResources className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[340px]" />{" "}
        </div>

        <ColumnTitleAndDesc title="High-performance resources">
          <p className="text-text lg:text-xl lg:leading-9">Drive your successful online business with high-performance business web hosting: unmetered traffic﻿, unlimited databases, unlimited SSL, unlimited email, and many more.</p>
        </ColumnTitleAndDesc>

        <PlainButton
          text="LEARN MORE"
          handler={() => {
            setModalTitle("Premium Cloud Servers"), setModalData(<WhHighPerformanceAndResource />), requestModal();
          }}
        />
      </article>
    </>
  );
};

export default FCHighPerformanceResources;
