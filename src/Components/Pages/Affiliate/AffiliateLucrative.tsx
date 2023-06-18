import FeatureCard from "@/Components/Card/FeatureCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React from "react";

const AffiliateLucrative = () => {
  return (
    <>
      <SectionTitle title="Let’s Build a Lucrative Affiliate Business">
        <p className="text-text">At SiteRacks, we want you to run a successful affiliate business. That’s why we help you every step of the way to ensure successful promotions. To complement your promotion efforts, we build highly optimized landing pages that maximize conversions. </p>

        <p className="text-text">We also offer promotional banners, exclusive deals, and seasonal campaigns so you can earn more. Every new client you send to us is nurtured with paid retargeting and 24/7 human support that helps you earn commissions easily.</p>
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10">
        <FeatureCard backgroundSecond customClass="group text-center">
          <div className="space-y-10">
            <h3 className="text-title font-bold text-2xl flex flex-col">
              SiteRacks Existing Users
            </h3>
            <Button size="xl" component="a" target={"_blank"} href={`${process.env.BILLING_URL}`} className="shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
              Become an Affiliate <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
            </Button>
          </div>
          <div className="grow"></div>
        </FeatureCard>

         <FeatureCard backgroundSecond customClass="group text-center">
          <div className="space-y-10">
            <h3 className="text-title font-bold text-2xl flex flex-col">
              Fresh Users Apply Here
            </h3>
            <Button size="xl" component="a" target={"_blank"} href={`${process.env.ASK_ME}/join-siteracks`} className="shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
              Become an Affiliate <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
            </Button>
          </div>
          <div className="grow"></div>
        </FeatureCard>

 
      </div>
    </>
  );
};

export default AffiliateLucrative;
