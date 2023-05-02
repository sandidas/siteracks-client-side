import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React from "react";

const ExistingClientLogin = () => {
  return (
    <article id="liveChat" className="py-[10vh] bg-surface">
      <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
        {/* Left Column */}

        {/* Right Column */}
        <div className="md:col-span-10 flex flex-col justify-center items-start space-y-8">
          <SectionTitle title={`Existing client?`} subTitle="You can contact our team anytime, 24/7." description={`"To ensure prompt and precise assistance, we kindly request clients to log in to their Client Area before contacting support.`} />

          <div className="w-full text-center">
            <Button component="a" leftIcon={<ArrowRightIcon className="h-10 w-10 hover:fill-white pl-2" />} href={`${process.env.BILLING_URL}`} size="xl">
              Login Now
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExistingClientLogin;
