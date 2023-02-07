import React from "react";
import HostingServicesIcon from "../../../public/images/website/hostingServices.svg";
import PremiumCloudIcon from "../../../public/images/website/premiumCloudIcon.svg";
import LatestTechIcon from "../../../public/images/website/latestTechIconNew.svg";
import ImproveUptimeIcon from "../../../public/images/website/uptimeIcon.svg";
import UltraFastServerIcon from "../../../public/images/website/ultraFastServerIcon.svg";
import QuickEasyIcon from "../../../public/images/website/quickEasyIcon.svg";
import BackupIcon from "../../../public/images/website/backupIconNew.svg";
import NextGenSecIcon from "../../../public/images/website/securitySheldIcon.svg";
import MigrationIcon from "../../../public/images/website/migrationIcon.svg";
import ClockSupportIcon from "../../../public/images/website/theClockSupport.svg";
import FeatureCard from "../Card/FeatureCard";

const SiteRacksParkSection = () => {
  return (
    <section className="py-[8vh]">
      <div className="flex flex-col gap-5 text-center max-w-5xl mx-auto">
        <h2 className="font-poppins text-4xl md:text-5xl text-title md:leading-tight font-bold">SiteRacks Perks</h2>
        <p className="text-text text-xl">Get more than what you pay for—no technical jargon, unanticipated costs, or fancy add-ons that bring no value to your business. Enjoy user-friendly, superfast, extraordinary, and reliable hosting solutions all year.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-[5vh]">
        <FeatureCard>
          <div className="space-y-5">
            <PremiumCloudIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Premium Cloud </h3>
            <p className="text-text">Enjoy better latency and lesser downtimes while keeping your account and data always secured.</p>
          </div>
        </FeatureCard>

        <FeatureCard>
          <div className="space-y-5">
            <LatestTechIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Latest Technologies</h3>
            <p className="text-text">Enjoy better latency and lesser downtimes while keeping your account and data always secured.</p>
          </div>
        </FeatureCard>

        <FeatureCard>
          <div className="space-y-5">
            <ImproveUptimeIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Improved Uptime </h3>
            <p className="text-text">We understand that the availability of your website is your main concern, and so is ours. Our reliable data centers empower us to provide you with the best uptime.</p>
          </div>
        </FeatureCard>

        <FeatureCard>
          <div className="space-y-5">
            <UltraFastServerIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Ultrafast Optimized Server</h3>
            <p className="text-text">With our superfast optimized servers, optimize your website performance and improve your page loading by 500%.</p>
          </div>
        </FeatureCard>

        <FeatureCard>
          <div className="space-y-5">
            <QuickEasyIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Quick and Easy Setup</h3>
            <p className="text-text">Are you launching your site for the first time? Getting started with SiteRacks is fast and easy. No matter your technical level, we have the tools to launch your website quickly.</p>
          </div>
        </FeatureCard>

        <FeatureCard>
          <div className="space-y-5">
            <NextGenSecIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Next-Gen Security</h3>
            <p className="text-text">Losing customer data or website functionality can negatively affect your business. Our hosting solutions have the latest network and server protection, including DDoS protection and SSL certification.</p>
          </div>
        </FeatureCard>

        <FeatureCard>
          <div className="space-y-5">
            <BackupIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Regular Backups</h3>
            <p className="text-text">We’re regularly introducing innovative services to keep your data secure. We back up all our servers regularly, so you don’t have to worry about losing your data, ever!</p>
          </div>
        </FeatureCard>

        <FeatureCard>
          <div className="space-y-5">
            <MigrationIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Free Site Migration</h3>
            <p className="text-text">Frustrated with your current hosting? Migrate your website to SiteRacks for FREE. </p>
          </div>
        </FeatureCard>

        <FeatureCard>
          <div className="space-y-5">
            <ClockSupportIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">The Clock Support</h3>
            <p className="text-text">Ensure that your website is live 24/7 without any glitches. Our technically efficient support team is always by your side.</p>
          </div>
        </FeatureCard>
      </div>
    </section>
  );
};

export default SiteRacksParkSection;
