import FeatureCard from "@/Components/Card/FeatureCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { BuildingOffice2Icon, ShieldCheckIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";

const SSLTypes = () => {
  return (
    <div className="px-3 md:px-5 py-[10vh] bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        {/* <SectionTitle title="Level of validation" bottomSpace /> */}

        <div className="grid grid-cols-1 gap-10">
          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <ShieldCheckIcon className="fill-primary w-14 h-14" />
              <h3 className="text-title font-bold text-3xl">What is Standard DV SSL?</h3>
              <p className="text-text">A Domain Validation (DV) SSL certificate is an affordable and speedy way to implement SSL security to your website. These certificates confirm that you own the domain, but they don't perform additional organization-level validation.</p>
              <p className="text-text">
                DV certificates are ideal for personal blogs, social media, or any website that does not transmit private or confidential information. When a DV certificate is issued, it activates the browser padlock and allows the use of https, which provides assurance to your website visitors that
                you take their privacy seriously.
              </p>
              <p className="text-text">
                To get a DV certificate, you simply need to prove that you own the domain by responding to an email or file-based authentication request. Compared to other types of SSL certificates, the validation process is quick and straightforward, and the certificate can be issued in just a few
                minutes.
              </p>
              <p className="text-text">
                Overall, a DV certificate is a great choice for anyone who wants to add basic security features to their website without breaking the bank. It may not be suitable for businesses that handle sensitive information or require a higher level of validation, but it's an excellent option
                for personal websites and smaller blogs.
              </p>
              <p className="text-text">
                <strong>Recommended Use Cases</strong>
                <ul>
                  <li>Blogs</li>
                  <li>Informational Pages</li>
                  <li>Server-to-server Communications</li>
                </ul>
              </p>
            </div>
            <div className="grow"></div>
          </FeatureCard>

          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <ShoppingBagIcon className="fill-primary w-14 h-14" />
              <h3 className="text-title font-bold text-3xl">
              What is Organization Validation SSL?
              </h3>
              <p className="text-text">Are you looking for a way to boost your website's credibility and security? Consider an Organization Validated (OV) SSL Certificate. Unlike Domain Validated SSL Certificates, OV SSL requires additional organization-level validation, which helps to verify your business's identity and show visitors that you take security seriously.</p>
              <p className="text-text">When you install an OV SSL Certificate, your website will display the browser padlock and https, indicating to visitors that your site is secure and trustworthy. Plus, your corporate identity will be displayed, which can help to build trust and confidence in your brand.</p>
              <p className="text-text">One of the main benefits of OV SSL is that it helps to protect your site against phishing attacks and other types of fraud. Visitors can easily verify that your website is operated by a legitimate company and not an imposter site, which can give them peace of mind when sharing sensitive information.</p>
              <p className="text-text">Overall, an OV SSL Certificate is an excellent investment for businesses that handle sensitive information or want to build trust with their customers. So why wait? Get started today and start enjoying the benefits of stronger security and credibility for your website.</p>
              <p className="text-text">
                <strong>Recommended Use Cases</strong>
                <ul>
                  <li>Login Pages</li>
                  <li>Intranet Sites</li>
                  <li>Webmail</li>
                </ul>
              </p>
            </div>
            <div className="grow"></div>
          </FeatureCard>

          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <BuildingOffice2Icon className="fill-primary w-14 h-14" />
              <h3 className="text-title font-bold text-3xl ">
              What is a Wildcard SSL Certificate?
              </h3>
              <p className="text-text">If you host multiple sites or pages on the same domain, a Wildcard SSL Certificate can be a smart investment. This type of SSL allows you to secure an unlimited number of subdomains on a single certificate, which can save you time and money in the long run.</p>
              <p className="text-text">With a Wildcard SSL, you only need to purchase one certificate to cover all possible subdomains, rather than buying a separate certificate for each one. This can be especially useful if you plan to add more subdomains in the future.</p>
              <p className="text-text">While a standard SSL Certificate is issued to a single Fully Qualified Domain Name, a Wildcard SSL is issued to *.example.com, where the asterisk represents all possible subdomains. This means that you can use the same certificate to secure multiple subdomains, such as blog.example.com, shop.example.com, and more.</p>
              <p className="text-text">You can choose from Domain Validated (DV) or Organization Validated (OV) Wildcard SSL Certificates, depending on your specific needs. Both options provide strong SSL protection and can help to build trust with your website visitors.</p>
              <p className="text-text">Overall, a Wildcard SSL Certificate is a great choice for anyone who wants to secure multiple subdomains on a single domain. So why not invest in this cost-effective and convenient SSL option today?</p>
            </div>
            <div className="grow"></div>
          </FeatureCard>
        </div>
      </div>
    </div>
  );
};

export default SSLTypes;
