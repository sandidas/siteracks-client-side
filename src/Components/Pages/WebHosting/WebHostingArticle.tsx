"use client"; // this is a client component
import PlainButton from "@/Components/Buttons/PlainButton";
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {  Modal } from "@mantine/core";
import React, { useState } from "react";

import DummyImage from "../../../../public/images/DummyArticle.svg";
import WHDedicatedSupport from "./SubCompo/WHDedicatedSupport";
import WHFreeDotComDomain from "./SubCompo/WHFreeDotComDomain";
import WHFreeMigration from "./SubCompo/WHFreeMigration";
import WHPremiumWebsite from "./SubCompo/WHPremiumWebsite";

const WebHostingArticle = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any | null>(null);
  const [modalTitle, setModalTitle] = useState<string | null>(null);


  // console.log(scrollLocked);

  const requestModal = () => {
  
      // setModalTitle("Premium Website Builder");
      // setModalData(<WHPremiumWebsite />);
      setModalOpened(true);
    

    // <WHPremiumWebsite />
  };

  return (
    <>
       
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

          <div className="grid grid-cols-2 gap-10 xl:gap-16 2xl:gap-32">

            
            {/* Premium Website Builder*/}
            <article className="flex flex-col space-y-8 group items-start">
              <div className="w-full bg-slate-200">
                <DummyImage className="w-full h-fit max-h-[340px]" />{" "}
              </div>

              <ColumnTitleAndDesc title="Premium Website Builder">
                <p className="text-text lg:text-xl lg:leading-9">Premium Website Builder offers powerful tools, customization options, and professional design templates to create stunning websites easily.</p>
              </ColumnTitleAndDesc>

              <PlainButton
                text="LEARN MORE"
                handler={() => {
                  setModalTitle("Premium Website Builder"),
                  setModalData(<WHPremiumWebsite />),
                  requestModal();
                }}
              />


            </article>

            {/* Free Website Migration */}
            <article className="flex flex-col space-y-8 group items-start">
              <div className="w-full bg-slate-200">
                <DummyImage className="w-full h-fit max-h-[340px]" />{" "}
              </div>

              <ColumnTitleAndDesc title="Free Website Migration">
                <p className="text-text lg:text-xl lg:leading-9">Our specially trained technical experts perform the process and ensure that your website is moved smoothly, with minimum downtime.</p>
              </ColumnTitleAndDesc>

              <PlainButton
                text="LEARN MORE"
                handler={() => {
                  setModalTitle("Free Website Migration"),
                  setModalData(<WHFreeMigration />),
                  requestModal();
                }}
              />
            </article>

            {/* Dedicated Support
 */}
            <article className="flex flex-col space-y-8 group items-start">
              <div className="w-full bg-slate-200">
                <DummyImage className="w-full h-fit max-h-[340px]" />{" "}
              </div>

              <ColumnTitleAndDesc title="Dedicated Support">
                <p className="text-text lg:text-xl lg:leading-9">Our support team takes the time to understand your individual needs and provides customized solutions that are tailored specifically to your situation. </p>
              </ColumnTitleAndDesc>

              <PlainButton
                text="LEARN MORE"
                handler={() => {
                  setModalTitle("Dedicated Support"),
                  setModalData(<WHDedicatedSupport />),
                  requestModal()
                }}
              />
            </article>

            
            {/* Free .com Domain with Annual Plan */}
            <article className="flex flex-col space-y-8 group items-start">
              <div className="w-full bg-slate-200">
                <DummyImage className="w-full h-fit max-h-[340px]" />{" "}
              </div>

              <ColumnTitleAndDesc title="Free .com Domain">
                <p className="text-text lg:text-xl lg:leading-9">Having a .com domain gives you credibility and a professional image, which is essential in today's digital age.</p>
              </ColumnTitleAndDesc>

              <PlainButton
                text="LEARN MORE"
                handler={() => {
                  setModalTitle("Free .com Domain with Annual Plan"),
                  setModalData(<WHFreeDotComDomain />),
                  requestModal();
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
        <div className="text-title font-bold text-center text-2xl  py-10 px-5 lg:px-10 space-x-2 flex w-full justify-between items-center rounded-3xl">
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

        <div className="p-5 lg:p-10 bg-surface">{modalData && modalData}</div>
      </Modal>
    </>
  );
};

export default WebHostingArticle;
