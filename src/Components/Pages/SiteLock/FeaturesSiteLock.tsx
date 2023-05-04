import FeatureCard from "@/Components/Card/FeatureCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { CodeBracketIcon, Cog6ToothIcon, CommandLineIcon, GlobeAltIcon, LockClosedIcon, MagnifyingGlassIcon, PaperAirplaneIcon, ShieldCheckIcon, TrophyIcon } from "@heroicons/react/24/solid";
import siteLock from "../../../../public/images/codeguard/siteLock.png";
import React from "react";
import Image from "next/image";

const FeaturesSiteLock = () => {
  return (
    <div className="px-3 md:px-5 py-[10vh] bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <MagnifyingGlassIcon className="h-10 w-10 fill-primary" />
              <h3 className="text-title font-bold text-3xl">Malware Scan</h3>
              <p className="text-text">Our system actively scans and notifies you of any malware detected on your website.</p>
            </div>
            <div className="grow"></div>
          </FeatureCard>

          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <Cog6ToothIcon className="h-10 w-10 fill-primary" />
              <h3 className="text-title font-bold text-3xl">
              Automatic malware removal
              </h3>
              <p className="text-text">
              In case of any detection during the scan, SiteLock will securely remove all identified malware from your website automatically.
              </p>
            </div>
            <div className="grow"></div>
          </FeatureCard>


          
          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <CodeBracketIcon className="h-10 w-10 fill-primary" />
              <h3 className="text-title font-bold text-3xl">
              Vulnerability Scan
              </h3>
              <p className="text-text">
              Ensure optimal security for your applications by automatically verifying and updating them against known vulnerabilities.
              </p>
            </div>
            <div className="grow"></div>
          </FeatureCard>



          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <CommandLineIcon className="h-10 w-10 fill-primary" />
              <h3 className="text-title font-bold text-3xl">
              OWASP Protection
              </h3>
              <p className="text-text">
              Secure your website against the top 10 web application security flaws identified by OWASP (Open Web Application Security Project) with our reliable protection.
              </p>
            </div>
            <div className="grow"></div>
          </FeatureCard>



          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <TrophyIcon className="h-10 w-10 fill-primary" />
              <h3 className="text-title font-bold text-3xl">
              SiteLock<sup>™</sup> Trust Seal
              </h3>
              <p className="text-text">
              Instill greater confidence in your visitors by proudly displaying SiteLock's protection on your website.
              </p>
            </div>
            <div className="grow"></div>
          </FeatureCard>



          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <ShieldCheckIcon className="h-10 w-10 fill-primary" />
              <h3 className="text-title font-bold text-3xl">
                Firewall
              </h3>
              <p className="text-text">
              Protect your website from attacks and hackers with the advanced TrueShield<sup>™</sup> Web Application Firewall.
              </p>
            </div>
            <div className="grow"></div>
          </FeatureCard>



          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <LockClosedIcon className="h-10 w-10 fill-primary" />
              <h3 className="text-title font-bold text-3xl">
              Protect your reputation
              </h3>
              <p className="text-text">
              Daily website scans aid in the early detection of malware, preventing search engines from blacklisting your site.
              </p>
            </div>
            <div className="grow"></div>
          </FeatureCard>



          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <PaperAirplaneIcon className="h-10 w-10 fill-primary" />
              <h3 className="text-title font-bold text-3xl">
              Fast automated setup

              </h3>
              <p className="text-text">
              Experience instant and fully automated setup for immediate protection without the need for any installations.
              </p>
            </div>
            <div className="grow"></div>
          </FeatureCard>



          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <GlobeAltIcon className="h-10 w-10 fill-primary" />
              <h3 className="text-title font-bold text-3xl">
              Content Delivery Network (CDN)
              </h3>
              <p className="text-text">
              Improve your website's speed by distributing it globally and delivering it to your visitors from the nearest location for faster page load speeds, regardless of their l
              </p>
            </div>
            <div className="grow"></div>
          </FeatureCard>
        </div>

        <div className="flex flex-col pt-20 items-center">
        <SectionTitle title="Scan your website" subTitle="for malware automatically and safeguard your online reputation." bottomSpace />

        <div className="bg-white px-5 py-2 rounded-md">
          <Image src={siteLock} alt="" width={400} height={100} />
        </div>
      </div>

      </div>
    </div>
  );
};

export default FeaturesSiteLock;
