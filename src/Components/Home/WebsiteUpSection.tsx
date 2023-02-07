import { Button } from "@mantine/core";
import React from "react";
import BusinessHosting from "../../../public/images/nav/businessHosting.svg";

import HostingServicesIcon from "../../../public/images/website/hostingServices.svg";
import DomainIcon from "../../../public/images/website/domainIcon.svg";
import EmailIcon from "../../../public/images/website/emailIcon.svg";
import SecurityServicesIcon from "../../../public/images/website/securityServicesIcon.svg";
import WebAppSolutionsIcon from "../../../public/images/website/webAppSolutions.svg";
import WordPressSolutionsIcon from "../../../public/images/website/wordPressSolutions.svg";
import FeatureCardWithBG from "../Card/FeatureCardWithBG";

const WebsiteUpSection = () => {
  return (
    <>
      <section className="py-[8vh]">
        <div className="flex flex-col gap-5 text-center max-w-5xl mx-auto">
          <h3 className="font-poppins text-4xl md:text-5xl text-title md:leading-tight font-bold">Get Your Website Up & Running Quickly</h3>
          <p className="text-text text-xl">We ensure your website runs smoothly, even during traffic spikes. Our hosting solutions offer a complete foundation for your website. Focus on making sales and pleasing your customers while we do all the heavy lifting!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-[5vh]">
          {/* card item  */}
          <FeatureCardWithBG>
            <div className="space-y-5">
              <HostingServicesIcon className="fill-primary w-14 h-14" />
              <h3 className="text-title font-bold text-3xl">Hosting Services</h3>
              <p className="text-text">Get access to enterprise-grade web hosting for businesses, including WordPress hosting, eCommerce hosting, VPS hosting, reseller (WHMCS) hosting, and more.</p>
            </div>
          </FeatureCardWithBG>

          {/* card item  */}

          <FeatureCardWithBG>
            <div className="space-y-5">
              <WordPressSolutionsIcon className="fill-primary w-14 h-14" />
              <h3 className="text-title font-bold text-3xl">WordPress Solutions</h3>
              <p className="text-text">Keep your site up-to-date and secure for your online business. Our WordPress solutions are specifically designed to optimize the performance of your website.</p>
            </div>
          </FeatureCardWithBG>

          {/* card item  */}

          <FeatureCardWithBG>
            <div className="space-y-5">
              <WebAppSolutionsIcon className="fill-primary w-14 h-14" />
              <h3 className="text-title font-bold text-3xl">Web App Solutions</h3>
              <p className="text-text">Build and deploy your web apps without managing any infrastructure. A speedy, global CDN automatically backs our web app hosting with optimal security out of the box.</p>
            </div>
          </FeatureCardWithBG>

          <FeatureCardWithBG>
            <div className="space-y-5">
              <SecurityServicesIcon className="fill-primary w-14 h-14" />
              <h3 className="text-title font-bold text-3xl">Security Services</h3>
              <p className="text-text">Don’t leave your business exposed to vulnerabilities. Improve customer confidence, secure your data, and boost your SEO ranking with an SSL certificate to encrypt traffic to and from your website.</p>
            </div>
          </FeatureCardWithBG>

          <FeatureCardWithBG>
            <div className="space-y-5">
              <EmailIcon className="fill-primary w-14 h-14" />
              <h3 className="text-title font-bold text-3xl">Business Email Services</h3>
              <p className="text-text">Make sure you never miss a message. Our purpose-built hosted business email solutions are equipped with spam and virus filtering.</p>
            </div>
          </FeatureCardWithBG>

          <FeatureCardWithBG>
            <div className="space-y-5">
              <DomainIcon className="fill-primary w-14 h-14" />
              <h3 className="text-title font-bold text-3xl">Domains</h3>
              <p className="text-text">Take the initial step to setting up your digital presence with the right domain name. We also help you protect your identity online and retain full control of your domain.</p>
            </div>
          </FeatureCardWithBG>
        </div>
      </section>
    </>
  );
};

export default WebsiteUpSection;
