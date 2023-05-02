import FeatureCard from "@/Components/Card/FeatureCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { useThemeContext } from "@/Context/ThemeProvider";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import Image from "next/image";
import React from "react";
import askmeLight from "../../../../public/images/askme/askme-siteracks-light.png";
import askMeDark from "../../../../public/images/askme/askme-siteracks-dark.png";

const AskMeContactPage = () => {
  const ASK_ME = `${process.env.ASK_ME}`;
  const { colorScheme: isDarkMode } = useThemeContext();
  return (
    <>
      <article id="liveChat" className="py-[10vh]">
        <div className="grid grid-cols-1 md:grid-cols-12 max-w-screen-2xl mx-auto px-3 md:px-5 gap-3 md:5 xl:gap-16 2xl:gap-32">
          {/* Left Column */}

          {/* Right Column */}
          <div className="md:col-span-10 flex flex-col justify-center items-start space-y-8">
            <SectionTitle
              title={`ASK-ME`}
              subTitle="An open platform is available to support you."
              leftAlignDesktop
              description={`"ASK-ME" is your go-to support platform! Whether you're an existing or new client, you can ask us anything about domain, hosting, backup, security, website, or anything related. Our expert support team is always ready to answer your questions. Don't hesitate to ask us anything about our service at any time. We're here to help and make a difference in your experience!`}
            />

            <div className="">
              <FeatureCard noStyle customClass="shadow-xl">
                <div className="space-y-5">{isDarkMode === "light" ? <Image src={askmeLight} height={600} width={1200} alt="Ask Me" /> : <Image src={askMeDark} height={600} width={1200} alt="Ask Me" />}</div>
                <div className="grow"></div>
                <Button component="a" href={ASK_ME} size="xl" className="mt-5 bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
                  Get Started
                  <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
                </Button>
              </FeatureCard>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default AskMeContactPage;