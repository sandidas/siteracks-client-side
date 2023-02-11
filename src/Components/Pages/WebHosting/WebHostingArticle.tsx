"use client"; // this is a client component
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button, Modal } from "@mantine/core";
import React, { useState } from "react";

import DummyImage from "../../../../public/images/DummyArticle.svg";
import WHPremiumWebsite from "./SubCompo/WHPremiumWebsite";

const WebHostingArticle = () => {
  const [modalOpened, setModalOpened] = useState<any | boolean>(false);
  const [modalData, setModalData] = useState<any | null>(null);

  const requestComponent = (itemName: String | null) => {
    if (itemName === "WHPremiumWebsite") {
      setModalData(<WHPremiumWebsite />);
    }

    // <WHPremiumWebsite />
  };

  return (
    <>
      <section className="py-[10vh] bg-surface">
        <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <SectionTitle title="Maximize Your Offline Business with the Power of the Internet" description={`Maximize Your Offline Business by Utilizing the Power of Online Platforms. Get ahead of the competition and expand your reach to potential customers with the help of the internet.`} />
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

              <Button
                variant="outline"
                size="xl"
                onClick={() => {
                  setModalOpened(true), requestComponent("WHPremiumWebsite");
                }}
                className="shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary"
              >
                Learn More
                <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
              </Button>
            </article>
          </div>
        </div>
      </section>

      <Modal zIndex="99999" padding="md" lockScroll={true} opened={modalOpened} size="xl" onClose={() => setModalOpened(false)} >
        {/* Modal content */}

        <div className="dark:bg-black">{modalData}</div>
      </Modal>
    </>
  );
};

export default WebHostingArticle;
