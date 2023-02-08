import { ArrowLongRightIcon, ChatBubbleLeftRightIcon, EnvelopeOpenIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React from "react";
import FeatureCard from "../Card/FeatureCard";

const LiveChat = () => {
  return (
    <section className="py-[8vh]">
      <div className="max-w-screen-2xl mx-auto px-5">
        <div className="flex flex-col gap-5 text-center max-w-3xl mx-auto">
          <h3 className="font-poppins text-4xl md:text-5xl text-title md:leading-tight font-bold">Our expert support team is happy to help you</h3>
          <p className="text-text text-xl">We are not just another web hosting company. We differentiate ourselves from other web hosting companies by offering exceptional, fast, and reliable hosting services supported by our team of technical experts, available 24/7.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-[4vh]">
          <FeatureCard>
            <div className="space-y-5">
              <EnvelopeOpenIcon className="fill-primary w-14 h-14" />

              <h3 className="text-title font-bold text-3xl">Support Ticket</h3>
              <p className="text-text">If you are an existing client, please open a support ticket to get faster and more accurate assistance</p>
            </div>

            <Button size="xl" className="mt-5 bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
              Get Started
              <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
            </Button>
          </FeatureCard>

          <FeatureCard>
            <div className="space-y-5">
              <ChatBubbleLeftRightIcon className="fill-primary w-14 h-14" />

              <h3 className="text-title font-bold text-3xl">Live Chat</h3>
              <p className="text-text">Connect with our knowledgeable sales team for answers to any questions or concerns.</p>
            </div>

            <Button size="xl" className="mt-5 bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
              Get Started
              <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
            </Button>
          </FeatureCard>

          <FeatureCard>
            <div className="space-y-5">
              <ChatBubbleLeftRightIcon className="fill-primary w-14 h-14" />

              <h3 className="text-title font-bold text-3xl flex flex-col">
                <span>WhatsApp</span> <small className="text-primary font-light text-sm">Chat with dedicated expert.</small>{" "}
              </h3>

              <p className="text-text">Get expert advice from our team of WordPress specialists. We can help you optimize your website for better performance, resolve technical issues, and provide customized solutions for your unique needs.</p>
            </div>

            <Button size="xl" className="mt-5 bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
              Get Started
              <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
            </Button>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default LiveChat;
