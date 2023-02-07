import { ArrowLongRightIcon, ChatBubbleLeftRightIcon, EnvelopeOpenIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React from "react";
import FeatureCard from "../Card/FeatureCard";

const LiveChat = () => {
  return (
    <article className="py-[8vh] bg-surface">
      <div className="max-w-screen-2xl mx-auto px-5">
        <div className="flex flex-col gap-5 text-center max-w-3xl mx-auto">
          <h3 className="font-poppins text-4xl md:text-5xl text-title md:leading-tight font-bold">Our expert support team is happy to help you</h3>
          <p className="text-text text-xl">We ensure your website runs smoothly, even during traffic spikes. Our hosting solutions offer a complete foundation for your website. Focus on making sales and pleasing your customers while we do all the heavy lifting!</p>
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
              <p className="text-text">Get access to enterprise-grade web hosting for businesses, including WordPress hosting, eCommerce hosting, VPS hosting, reseller (WHMCS) hosting, and more.</p>
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

              <p className="text-text">Get access to enterprise-grade web hosting for businesses, including WordPress hosting, eCommerce hosting, VPS hosting, reseller (WHMCS) hosting, and more.</p>
            </div>

            <Button size="xl" className="mt-5 bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
              Get Started
              <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
            </Button>
          </FeatureCard>
        </div>
      </div>
    </article>
  );
};

export default LiveChat;
