import { Button } from "@mantine/core";
import React from "react";
import BusinessHosting from "../../../public/images/nav/businessHosting.svg";

const FeatureTwo = () => {
  return (
    <>
      <section className="py-[8vh]">
        <div className="flex flex-col gap-5 text-center max-w-5xl mx-auto">
          <h2 className="font-poppins text-4xl md:text-5xl text-title md:leading-tight">Get Your Website Up & Running Quickly</h2>
          <p className="text-text text-xl">We ensure your website runs smoothly, even during traffic spikes. Our hosting solutions offer a complete foundation for your website. Focus on making sales and pleasing your customers while we do all the heavy lifting!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-[5vh]">
          
          <div className="bg-surface p-10 rounded-lg">
            <div className="space-y-3 md:min-h-[270px]">
              <BusinessHosting className="fill-primary w-20 h-20" />
              <h2 className="text-text">Hosting Services</h2>
              <p className="text-text">Get access to enterprise-grade web hosting for businesses, including WordPress hosting, eCommerce hosting, VPS hosting, reseller (WHMCS) hosting, and more.</p>
            </div>
          </div>

          <div className="bg-surface p-10 rounded-lg">
            <div className="space-y-3 md:min-h-[270px]">
              <BusinessHosting className="fill-primary w-20 h-20" />
              <h2 className="text-text">WordPress Solutions</h2>
              <p className="text-text">Keep your site up-to-date and secure for your online business. Our WordPress solutions are specifically designed to optimize the performance of your website.</p>
            </div>
          </div>

          <div className="bg-surface p-10 rounded-lg">
            <div className="space-y-3 md:min-h-[270px]">
              <BusinessHosting className="fill-primary w-20 h-20" />
              <h2 className="text-text">Web App Solutions</h2>
              <p className="text-text">Build and deploy your web apps without managing any infrastructure. A speedy, global CDN automatically backs our web app hosting with optimal security out of the box.</p>
            </div>
          </div>


          <div className="bg-surface p-10 rounded-lg">
            <div className="space-y-3 md:min-h-[270px]">
              <BusinessHosting className="fill-primary w-20 h-20" />
              <h2 className="text-text">Security Services</h2>
              <p className="text-text">Don’t leave your business exposed to vulnerabilities. Improve customer confidence, secure your data, and boost your SEO ranking with an SSL certificate to encrypt traffic to and from your website.</p>
            </div>
          </div>


          <div className="bg-surface p-10 rounded-lg">
            <div className="space-y-3 md:min-h-[270px]">
              <BusinessHosting className="fill-primary w-20 h-20" />
              <h2 className="text-text">Business Email Services</h2>
              <p className="text-text">Make sure you never miss a message. Our purpose-built hosted business email solutions are equipped with spam and virus filtering.</p>
            </div>
          </div>


          <div className="bg-surface p-10 rounded-lg">
            <div className="space-y-3 md:min-h-[270px]">
              <BusinessHosting className="fill-primary w-20 h-20" />
              <h2 className="text-text">Domains</h2>
              <p className="text-text">Take the initial step to setting up your digital presence with the right domain name. We also help you protect your identity online and retain full control of your domain.</p>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default FeatureTwo;
