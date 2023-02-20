import { useModalContext } from "@/Context/ModalProvider";
import React from "react";

const FCHighPerformanceResources = () => {
  const { requestModal, setModalData, setModalTitle } = useModalContext();
  return (
    <>
      <article className="flex flex-col space-y-8 group items-start">High-performance resources</article>
    </>
  );
};

export default FCHighPerformanceResources;
