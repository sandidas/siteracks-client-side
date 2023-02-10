"use client"; // this is a client component
import { ArrowLongRightIcon, ChatBubbleLeftRightIcon, EnvelopeOpenIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React, { useState } from "react";
import FeatureCard from "../Card/FeatureCard";

interface IWhatsApp {}

const LiveChat = () => {
  const [textShow, setTextShow] = useState(false);

  return (
    <>
      <article className="py-[10vh] bg-surfaceDark">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-32 max-w-screen-2xl mx-auto px-3 md:px-5">
          {/* Left Column */}
          <div className="md:col-span-3 flex flex-col justify-start items-center">
            <div className="w-full">{/* <ExpertIcon className="w-full h-fit fill-primary" /> */}</div>
            {/* <BackgroundSurfacePrimary className="w-5/12 h-72 fill-primary stroke-primary absolute left-0" /> */}
          </div>

          {/* Right Column */}
          <div className="md:col-span-9 flex flex-col justify-center items-start space-y-12 overflow-hidden">
            <div className="space-y-8">
              <h2 className="font-poppins flex flex-col font-bold">
                <span className="text-2xl text-slate-500 font-light">Our expert support team is</span>
                <span className="text-4xl md:text-5xl text-light md:leading-tight">happy to help you</span>
              </h2>
              <p className="text-text text-xl leading-9">We are not just another web hosting company. We differentiate ourselves from other web hosting companies by offering exceptional, fast, and reliable hosting services supported by our team of technical experts, available 24/7.</p>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <FeatureCard>
                <div className="space-y-5 min-h-[290px]">
                  <EnvelopeOpenIcon className="fill-primary w-14 h-14" />

                  <h3 className="text-light font-bold text-3xl">Support Ticket</h3>
                  <p className="text-text">If you are an existing client, please open a support ticket to get faster and more accurate assistance</p>
                </div>

                <Button size="xl" className="mt-5 bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
                  Get Started
                  <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
                </Button>
              </FeatureCard>
              <FeatureCard>
                <div className="space-y-5 min-h-[290px]">
                  <ChatBubbleLeftRightIcon className="fill-primary w-14 h-14" />

                  <h3 className="text-light font-bold text-3xl">Live Chat</h3>
                  <p className="text-text">Connect with our knowledgeable sales team for answers to any questions or concerns.</p>
                </div>

                <Button size="xl" className="mt-5 bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
                  Get Started
                  <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
                </Button>
              </FeatureCard>

              <FeatureCard>
                <div className="space-y-5 min-h-[290px]">
                  <ChatBubbleLeftRightIcon className="fill-primary w-14 h-14" />

                  <h3 className="text-title font-bold text-3xl flex flex-col">
                    <span className="text-light">WhatsApp</span> <small className="text-primary font-light text-sm">Chat with dedicated expert.</small>{" "}
                  </h3>

                  <p className="text-text">
                    Are you existing client? Get expert advice from our team of WordPress specialists.
                    {!textShow && (
                      <button className="text-primary" onClick={() => setTextShow(!textShow)}>
                        ...Read More
                      </button>
                    )}
                    {textShow && "We can help you optimize your website for better performance, resolve technical issues, and provide customized solutions for your unique needs. "}
                    {textShow && (
                      <button className="text-primary" onClick={() => setTextShow(!textShow)}>
                        {" "}
                        ...Hide{" "}
                      </button>
                    )}
                  </p>
                </div>

                <Button size="xl" className="mt-5 bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
                  Get Started
                  <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
                </Button>
              </FeatureCard>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default LiveChat;
