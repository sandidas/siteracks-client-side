import FeatureCard from "@/Components/Card/FeatureCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import Image from "next/image";
import React from "react";
import fullAutomation from "../../../../public/images/codeguard/api-feature.png";
import clickrestorefeature from "../../../../public/images/codeguard/click-restore-feature.png";
import codeGuardLogo from "../../../../public/images/codeguard/codeGuardLogo.png";
import dailyBackupsFeature from "../../../../public/images/codeguard/daily-backups-feature.png";
import emailFeature from "../../../../public/images/codeguard/email-feature.png";
import fileMonitoringFeature from "../../../../public/images/codeguard/file-monitoring-feature.png";
import heroImage from "../../../../public/images/codeguard/hero-image-a.png";
import malwareFeature from "../../../../public/images/codeguard/malware-feature.png";
import pickBackup from "../../../../public/images/codeguard/pick-backup.png";
import serversFeature from "../../../../public/images/codeguard/servers-feature.png";
import wpFeature from "../../../../public/images/codeguard/wp-feature.png";

const FeaturesOfCodeGuardBackup = () => {
  return (
    <div className="px-3 md:px-5 py-[10vh] bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <Image src={serversFeature} alt="" width={100} height={100} />
              <h3 className="text-title font-bold text-3xl">Automatic Website Backups</h3>
              <p className="text-text">Protect your website with daily automatic backups. Our system backs up your site every day and stores the backups offsite. You can easily restore your site in case of emergency. Sign up now to ensure your website is always protected.</p>
            </div>
            <div className="grow"></div>
          </FeatureCard>

          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <Image src={fullAutomation} alt="" width={100} height={100} />
              <h3 className="text-title font-bold text-3xl">Unlimited Files & Databases</h3>
              <p className="text-text">With our backup solution, you can easily back up as many files and databases as you need. There's no limit, as you're only restricted by the storage space you use. Protect your data and website now with our backup service.</p>
            </div>
            <div className="grow"></div>
          </FeatureCard>

          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <Image src={clickrestorefeature} alt="" width={100} height={100} />
              <h3 className="text-title font-bold text-3xl">One-Click Restores</h3>
              <p className="text-text">Our restore process is simple and hassle-free, allowing you to easily revert to a previous version of your website or a single file. Protect your website and data with our backup solution, and have peace of mind knowing you can restore your site if needed.</p>
            </div>
            <div className="grow"></div>
          </FeatureCard>

          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <Image src={malwareFeature} alt="" width={100} height={100} />
              <h3 className="text-title font-bold text-3xl">Malware Monitoring</h3>
              <p className="text-text">
                With CodeGuard, you can relax and know that your website is being checked for changes every day. Our diligent monitoring ensures that any changes are quickly identified and addressed, protecting your site and data from harm. Sign up for CodeGuard now for peace of mind.
              </p>
            </div>
            <div className="grow"></div>
          </FeatureCard>

          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <Image src={wpFeature} alt="" width={100} height={100} />
              <h3 className="text-title font-bold text-3xl">Automatic WordPress Updates</h3>
              <p className="text-text">Our system ensures that your site is always up-to-date and protected against vulnerabilities. Plus, with auto-recovery, you can easily restore your site in case of any issues. Sign up now for worry-free WordPress management.</p>
            </div>
            <div className="grow"></div>
          </FeatureCard>

          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <Image src={fileMonitoringFeature} alt="" width={100} height={100} />
              <h3 className="text-title font-bold text-3xl">File Change Monitoring</h3>
              <p className="text-text">
                Stay informed of any changes to your site's source code with our email notifications. Our system monitors your site's code for any modifications and alerts you immediately if something changes. Sign up now for peace of mind and timely notifications of any site changes.
              </p>
            </div>
            <div className="grow"></div>
          </FeatureCard>

          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <Image src={pickBackup} alt="" width={100} height={100} />
              <h3 className="text-title font-bold text-3xl">Staging of Restores</h3>
              <p className="text-text">
                Easily test any backed-up site with our automated staging feature before restoring it. Our simple process lets you verify your site's functionality and appearance in a staging environment, so you can be confident when you're ready to go live. Sign up now to experience the benefits of
                our backup and staging solution.
              </p>
            </div>
            <div className="grow"></div>
          </FeatureCard>

          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <Image src={emailFeature} alt="" width={100} height={100} />
              <h3 className="text-title font-bold text-3xl">Email Backup</h3>
              <p className="text-text">
                With our backup solution, you get comprehensive protection for your website and emails. Our system backs up your emails along with your site's files, ensuring that all of your important data is safeguarded in case of a disaster. Sign up now for peace of mind and complete data
                protection.
              </p>
            </div>
            <div className="grow"></div>
          </FeatureCard>

          <FeatureCard backgroundSecond>
            <div className="space-y-5">
              <Image src={fullAutomation} alt="" width={100} height={100} />
              <h3 className="text-title font-bold text-3xl">Full Automation</h3>
              <p className="text-text">
                Experience worry-free backup with our completely hands-free setup and ongoing backups. Our automated system ensures that your site is always backed up and secure, and alerts you immediately if anything goes wrong. Sign up now for peace of mind and reliable backup and notification
                services.
              </p>
            </div>
            <div className="grow"></div>
          </FeatureCard>
        </div>
      </div>

      <div className="flex flex-col pt-20 items-center">
        <SectionTitle title="Our offsite premium backup" subTitle="from highly trusted brand in online security." bottomSpace />

        <div className="bg-white px-5 py-2 rounded-md">
          <Image src={codeGuardLogo} alt="" width={400} height={100} />
        </div>
      </div>
    </div>
  );
};

export default FeaturesOfCodeGuardBackup;
