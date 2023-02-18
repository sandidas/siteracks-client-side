import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

const comparisonData = [
  {
    title: "Premium Server and Resources",
    bizHostingStatus: true,
    sharedHostingStatus: false,
    popover: "",
    detailsLink: "",
  },
  {
    title: "Hosting for High-Traffic Websites",
    bizHostingStatus: true,
    sharedHostingStatus: false,
    popover: "",
    detailsLink: "",
  },

  {
    title: "Free WordPress Website Design Tools",
    bizHostingStatus: true,
    sharedHostingStatus: false,
    popover: "",
    detailsLink: "",
  },

  {
    title: "Unlimited Traffic and Space",
    bizHostingStatus: true,
    sharedHostingStatus: false,
    popover: "",
    detailsLink: "",
  },
  {
    title: "Dedicated WordPress Expert Support",
    bizHostingStatus: true,
    sharedHostingStatus: false,
    popover: "",
    detailsLink: "",
  },
  {
    title: "Performance Optimized",
    bizHostingStatus: true,
    sharedHostingStatus: false,
    popover: "",
    detailsLink: "",
  },
  {
    title: "Control Panel with 1-click CMS Installs",
    bizHostingStatus: true,
    sharedHostingStatus: true,
    popover: "",
    detailsLink: "",
  },
  {
    title: "24/7 Security Expert Monitoring",
    bizHostingStatus: true,
    sharedHostingStatus: false,
    popover: "",
    detailsLink: "",
  },
  {
    title: "Free 100% Drag and Drop Page Builder",
    bizHostingStatus: true,
    sharedHostingStatus: false,
    popover: "",
    detailsLink: "",
  },
  {
    title: "Best for Custom CMS, eCommerce, WooCommerce  Business, Blog Websites",
    bizHostingStatus: true,
    sharedHostingStatus: false,
    popover: "",
    detailsLink: "",
  },
  {
    title: "Daily Backups",
    bizHostingStatus: true,
    sharedHostingStatus: true,
    popover: "",
    detailsLink: "",
  },
  {
    title: "Free Email Accounts",
    bizHostingStatus: true,
    sharedHostingStatus: true,
    popover: "",
    detailsLink: "",
  },
  {
    title: "Unlimited MySQL DB",
    bizHostingStatus: true,
    sharedHostingStatus: false,
    popover: "",
    detailsLink: "",
  },
];

const WordPressHostingCompare = () => {
  return (
    <>
      <section className="py-[10vh] bg-surface">
        <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
          <SectionTitle title="Comparison" subTitle="Business Hosting Vs Shared Web Hosting" bottomSpace description="" />

          <div className="max-w-4xl mx-auto">
            <table className="w-full p-6 text-title text-left">
              <thead className="bg-surface">
                <tr className="dark:bg-gray-700 bg-white">
                  <th className="p-3 lg:px-5 text-2xl">Features</th>
                  <th className="p-3">BH</th>
                  <th className="p-3">TH</th>
                </tr>
              </thead>
              <tbody className="border-b text-base bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
                {comparisonData.map((feature) => (
                  <>
                    <tr className="text-text hover:bg-primary hover:text-white  border-b border-slate-300 dark:border-slate-700 w-full group">
                      <td className="px-3 lg:px-5 py-3">{feature?.title}</td>
                      <td className="px-3 py-2">{feature?.bizHostingStatus ? <CheckIcon className="fill-primary h-5 w-5 group-hover:fill-white" /> : <XMarkIcon className="fill-surfaceTwo h-5 w-5 group-hover:fill-white" />}</td>
                      <td className="px-3 py-2">{feature?.sharedHostingStatus ? <CheckIcon className="fill-primary h-5 w-5 group-hover:fill-surface" /> : <XMarkIcon className="fill-surfaceTwo h-5 w-5 group-hover:fill-white" />}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default WordPressHostingCompare;
