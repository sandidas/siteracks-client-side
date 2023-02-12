"use client"; // this is a client component
import PlainButton from "@/Components/Buttons/PlainButton";
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { ArrowLongRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Button, Modal } from "@mantine/core";
import { useScrollLock } from "@mantine/hooks";
import React, { useState } from "react";

import DummyImage from "../../../../public/images/DummyArticle.svg";
import WHPremiumWebsite from "./SubCompo/WHPremiumWebsite";

const WebHostingArticle = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any | null>(null);
  const [modalTitle, setModalTitle] = useState<string | null>(null);

  const [scrollLocked, setScrollLocked] = useScrollLock();

  // console.log(scrollLocked);

  const requestComponent = (itemName: String | null) => {
    // setScrollLocked((c) => !c);
    if (itemName === "WHPremiumWebsite") {
      setModalTitle("Premium Website Builder");
      setModalData(<WHPremiumWebsite />);
    }

    // <WHPremiumWebsite />
  };

  return (
    <>
      <Button onClick={() => setScrollLocked((c) => !c)} variant="outline">
        {scrollLocked ? "Unlock scroll" : "Lock scroll"}
      </Button>

      <section className="py-[10vh] bg-surface">
        <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <SectionTitle
              title="Maximize Your Offline Business with the Power of the Internet"
              bottomSpace={true}
              description={`Maximize Your Offline Business by Utilizing the Power of Online Platforms. Get ahead of the competition and expand your reach to potential customers with the help of the internet.`}
            />
          </div>

          {/* article container  */}

          <div className="grid grid-cols-2 gap-3 md:5 xl:gap-16 2xl:gap-32">
            {/* article Item */}
            <article className="flex flex-col justify-center space-y-8 group items-start">
              <div className="w-full bg-slate-200">
                <DummyImage className="w-full h-fit max-h-[340px]" />{" "}
              </div>

              <ColumnTitleAndDesc title="Premium Website Builder">
                <p className="text-text lg:text-xl lg:leading-9">Premium Website Builder offers powerful tools, customization options, and professional design templates to create stunning websites easily.</p>
              </ColumnTitleAndDesc>

              <PlainButton
                text="LEARN MORE"
                handler={() => {
                  setModalOpened(true), setScrollLocked((c) => !c), requestComponent("WHPremiumWebsite");
                }}
              />
            </article>
          </div>
        </div>
      </section>

      <Modal
        radius="xl"
        zIndex="99999"
        padding={0}
        lockScroll={true}
        opened={modalOpened}
        size="xl"
        onClose={() => {
          setModalOpened(false), setModalData(null), setModalTitle(null);
        }}
        withCloseButton={false}
        style={{ marginTop: "20px" }}
      >
        {/* Modal content */}
        <div className="text-title font-bold text-center text-2xl bg-slate-200 py-10 px-5 lg:px-10 space-x-2 flex w-full justify-between items-center rounded-3xl">
          <div> {modalTitle && modalTitle} </div>

          <button
            className="hover:bg-primary rounded-md p-2"
            onClick={() => {
              setModalOpened(false), setModalData(null), setModalTitle(null);
            }}
          >
            <XMarkIcon className="w-7 h-7" />
          </button>
        </div>

        <div className="dark:bg-black p-5 lg:p-10">{modalData && modalData}</div>
      </Modal>
    </>
  );
};

export default WebHostingArticle;
