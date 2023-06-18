import { ArrowLongRightIcon, ArrowRightIcon, ChatBubbleLeftRightIcon, EnvelopeOpenIcon } from "@heroicons/react/24/solid";
import { Button, UnstyledButton } from "@mantine/core";
import React, { useState } from "react";
import PlainButton from "../Buttons/PlainButton";
import PlainButtonWithLink from "../Buttons/PlainButtonWithLink";
import FeatureCard from "../Card/FeatureCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import OpenSupportTicket from "../../../public/images/nav/openSupportTicket.svg";
import LiveChatIcon from "../../../public/images/nav/LiveChatIcon.svg";
import AskMeIcon from "../../../public/images/nav/AskMeIcon.svg";
import WhatsAppIcon from "../../../public/images/nav/whatsAppIcon.svg";

interface IWhatsApp {}

const LiveChat = () => {
  const [textShow, setTextShow] = useState(false);
  const LOGIN_LINK = `${process.env.BILLING_URL}/index.php?rp=/login`;
  return (
    <>
      <article id="liveChat" className="py-[10vh] bg-surfaceDark" style={{ backgroundImage: `url('/images/background-live-chat.svg')`, backgroundSize: "contain", backgroundPosition: "left center", backgroundRepeat: "no-repeat" }}>
        <div className="grid grid-cols-1 md:grid-cols-12 max-w-screen-2xl mx-auto px-3 md:px-5 gap-3 md:5 xl:gap-16 2xl:gap-32">
          {/* Left Column */}
          <div className="md:col-span-1 flex flex-col justify-start items-center">
            <div className="w-full">{/* <ExpertIcon className="w-full h-fit fill-primary" /> */}</div>
            {/* <BackgroundSurfacePrimary className="w-5/12 h-72 fill-primary stroke-primary absolute left-0" /> */}
          </div>

          {/* Right Column */}
          <div className="md:col-span-11 flex flex-col justify-center items-start space-y-12">
            <SectionTitle
              title={`Get 24x7 support`}
              subTitle="Our expert support team is happy to help you."
              bottomSpace
              leftAlignDesktop
              titleOnDark
              description={`We are not just another web hosting company. We differentiate ourselves from other web hosting companies by offering exceptional, fast, and reliable hosting services supported by our team of technical experts, available 24/7.`}
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              <FeatureCard background={true}>
                <div className="space-y-5">
                  <OpenSupportTicket className="fill-primary w-14 h-14" />

                  <h3 className="text-title font-bold text-3xl">Support Ticket</h3>
                  <p className="text-text">If you are an existing client, please open a support ticket to get faster and more accurate assistance</p>
                </div>
                <div className="grow"></div>

                <PlainButtonWithLink href={`${LOGIN_LINK}`} text="Get Support"></PlainButtonWithLink>
              </FeatureCard>
              <FeatureCard background={true}>
                <div className="space-y-5">
                  <LiveChatIcon className="fill-primary w-14 h-14" />

                  <h3 className="text-title font-bold text-3xl">Live Chat</h3>
                  <p className="text-text">Connect with our knowledgeable sales team for answers to any questions or concerns.</p>
                </div>
                <div className="grow"></div>
                <PlainButton
                  text="Chat Now"
                  handler={() => {
                    Tawk_API.toggle();
                  }}
                />
              </FeatureCard>

              <FeatureCard background={true}>
                <div className="space-y-5">
                  <WhatsAppIcon className="fill-primary w-14 h-14" />

                  <h3 className="text-title font-bold text-3xl flex flex-col">
                    <span className="text-title">WhatsApp</span> <small className="text-primary font-light text-sm">Chat with dedicated expert.</small>{" "}
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
                <div className="grow"></div>

                



                <PlainButtonWithLink target href="https://wa.me/919641239131?text=Hello, I have a question about your service. Can you please help me?" text="WhatsApp Now"></PlainButtonWithLink>
              </FeatureCard>

              <FeatureCard background={true}>
                <div className="space-y-5">
                  <AskMeIcon className="fill-primary w-14 h-14" />

                  <h3 className="text-title font-bold text-3xl flex flex-col">
                    <span className="text-title">Ask Me</span> <small className="text-primary font-light text-sm">is your go-to support platform!</small>{" "}
                  </h3>

                  <p className="text-text">
                  Whether you&#39;re an existing or new client, you can ask us anything about website related</p>
                </div>
                <div className="grow"></div>
                <PlainButtonWithLink target href={`${process.env.ASK_ME}`} text="Visit AskMe"></PlainButtonWithLink>
              </FeatureCard>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default LiveChat;
