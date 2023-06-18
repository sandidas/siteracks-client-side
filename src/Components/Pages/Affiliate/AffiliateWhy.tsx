import FeatureCard from "@/Components/Card/FeatureCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React from "react";

const AffiliateWhy = () => {
  return (
    <>
      <SectionTitle title="Why Become a SiteRacks Affiliate?" bottomSpace></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16">
        <FeatureCard noStyle>
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">Competitive Commissions</h3>
            <p className="text-text">Earn a competitive commission for every new client you refer to us. We offer a generous pay structure to incentivize top-performing affiliates.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
        </FeatureCard>

        <FeatureCard noStyle>
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">Easy Earnings</h3>
            <p className="text-text">Over the years, we’ve developed a solid reputation that speaks for itself. So you won’t have any hassle in promoting our reliable hosting.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
        </FeatureCard>

        <FeatureCard noStyle>
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">No Investment</h3>
            <p className="text-text">Joining the affiliate program is fast and free. All you have to do is promote SiteRacks on your website and earn money along the way.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
        </FeatureCard>

        <FeatureCard noStyle>
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">Fast and Flexible Payouts</h3>
            <p className="text-text">There are no minimum payout requirements. We send out regular payments, Choose from our flexible payment options based on your preferences.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
        </FeatureCard>

        <FeatureCard noStyle>
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">Interactive Dashboard</h3>
            <p className="text-text">You can track your traffic, referrals, and commissions via our affiliate portal and redeem your earnings via PayPal.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
        </FeatureCard>

        <FeatureCard noStyle>
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">Variety of Ads</h3>
            <p className="text-text">You can choose from a wide selection of banner and text ads that fit your website, blog, or email newsletter.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
        </FeatureCard>

        <FeatureCard noStyle>
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">24/7 Support</h3>
            <p className="text-text">We never leave you alone. Our experts are available 24/7 to help you maximize your promotion efforts and address your questions.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
        </FeatureCard>

        <FeatureCard noStyle>
          <div className="space-y-5">
            <h3 className="text-title font-bold text-3xl">Affiliate-Friendly Tracking</h3>
            <p className="text-text">Our affiliate cookie lasts for 90 days. This helps us ensure that all your sales are properly tracked and that you receive the full return for your efforts.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
        </FeatureCard>
      </div>
      <div className="flex justify-center items-center pt-10 group">
        <Button component="a" target={"_blank"} href={`${process.env.ASK_ME}/join-siteracks`} size="xl" className="shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
          Sign up and start referring today! <ArrowLongRightIcon className="h-10 w-10 hover:fill-white pl-2 hidden group-hover:block" />
        </Button>
      </div>
    </>
  );
};

export default AffiliateWhy;
