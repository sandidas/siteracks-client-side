"use client"; // this is a client component
import PlainButton from "@/Components/Buttons/PlainButton";
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { ModalContext, useModalContext } from "@/Context/ModalProvider";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {  Modal } from "@mantine/core";
import React, { useContext, useState } from "react";

import DummyImage from "../../../../public/images/DummyArticle.svg";
import WHDedicatedSupport from "./SubCompo/WHDedicatedSupport";
import WHFreeDotComDomain from "./SubCompo/WHFreeDotComDomain";
import WHFreeMigration from "./SubCompo/WHFreeMigration";
import WHPremiumCloudServers from "./SubCompo/WHPremiumCloudServers";
import WHPremiumWebsite from "./SubCompo/WHPremiumWebsite";
import WHSolutionsForOnline from "./SubCompo/WHSolutionsForOnline";

const WebHostingArticle = () => {


  const { requestModal, setModalData, setModalTitle } = useModalContext();

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
              <div className="w-full">
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
              <div className="w-full">
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

            {/* Premium Cloud Servers */}
            <article className="flex flex-col space-y-8 group items-start">
              <div className="w-full">
                <DummyImage className="w-full h-fit max-h-[340px]" />{" "}
              </div>

              <ColumnTitleAndDesc title="Premium Cloud Servers">
                <p className="text-text lg:text-xl lg:leading-9">Enjoy better latency and lesser downtime while keeping your account and data always secured. Our platform is built with Premium AWS Cloud and Digital Ocean Cloud servers.</p>
              </ColumnTitleAndDesc>

              <PlainButton
                text="LEARN MORE"
                handler={() => {
                  setModalTitle("Premium Cloud Servers"),
                  setModalData(<WHPremiumCloudServers />),
                  requestModal()
                }}
              />
            </article>


            {/* Dedicated Support */}
            <article className="flex flex-col space-y-8 group items-start">
              <div className="w-full">
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
              <div className="w-full">
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

            
            {/* Optimized for CMS Applications and Ecommerce */}
            <article className="flex flex-col space-y-8 group items-start">
              <div className="w-full">
                <DummyImage className="w-full h-fit max-h-[340px]" />{" "}
              </div>

              <ColumnTitleAndDesc title="Optimized for CMS Applications and E-Commerce">
                <p className="text-text lg:text-xl lg:leading-9">Maximize your online store or website with our optimized cloud servers designed specifically for CMS and e-commerce needs.</p>
              </ColumnTitleAndDesc>

              <PlainButton
                text="LEARN MORE"
                handler={() => {
                  setModalTitle("Optimized for CMS Applications and Ecommerce"),
                  setModalData(<WHSolutionsForOnline />),
                  requestModal();
                }}
              />
            </article>


          </div>
        </div>
      </section>       
    </>
  );
};

export default WebHostingArticle;
