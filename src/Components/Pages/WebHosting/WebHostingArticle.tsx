"use client"; // this is a client component
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button, Modal } from "@mantine/core";
import React, { useState } from "react";

import DummyImage from "../../../../public/images/webHosting/dummyImage.svg";
import WHBlazingFast from "./SubCompo/WHBlazingFast";

interface IModalData {
  modalData?:any;
}

const WebHostingArticle = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [modalData, setModalData] = useState<IModalData | undefined>(undefined);

  const requestComponent = () => {
    setModalData(<WHBlazingFast />);
  };

  return (
    <>
      <article className="py-[10vh] bg-surface">
        <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <SectionTitle title="Maximize Your Offline Business with the Power of the Internet" description={`Maximize Your Offline Business by Utilizing the Power of Online Platforms. Get ahead of the competition and expand your reach to potential customers with the help of the internet.`} />
          </div>

          {/* article Section  */}
          <div className="grid grid-cols-2 gap-3 md:5 xl:gap-16 2xl:gap-32">
            {/* article Item */}
            <div className="flex flex-col justify-center space-y-8 group items-start">
              <div className="w-full bg-purple-400">
                <DummyImage className="w-full h-fit" />{" "}
              </div>
              <ColumnTitleAndDesc title="This is Title" subTitle="">
                <p>We’re here to help you find the right hosting for your business website. With years of experience supporting the online success of local and international businesses, our exclusive web hosting solutions are the best in the market.</p>
              </ColumnTitleAndDesc>

              <Button
                size="xl"
                onClick={() => {
                  setModalOpened(true), requestComponent();
                }}
                className="bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary"
              >
                This is Link <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Modal centered opened={modalOpened} onClose={() => setModalOpened(false)}>
        {/* Modal content */}
        {modalData}
      </Modal>
    </>
  );
};

export default WebHostingArticle;
