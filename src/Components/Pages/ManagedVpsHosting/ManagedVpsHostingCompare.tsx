import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

const comparisonData = [
  {
    title: "Ready to use with CentOs and CloudLinux",
    vpsLightHostingStatus: true,
    traditionalVpsStatus: false,
    popover: "",
    detailsLink: "",
  },
  {
    title: "Ready Control Panel (Plesk/cPanel)",
    vpsLightHostingStatus: true,
    traditionalVpsStatus: false,
    popover: "",
    detailsLink: "",
  },

  {
    title: "Root Access with Self-management Rights",
    vpsLightHostingStatus: false,
    traditionalVpsStatus: true,
    popover: "",
    detailsLink: "",
  },

  {
    title: "Beginners Friendly",
    vpsLightHostingStatus: true,
    traditionalVpsStatus: false,
    popover: "",
    detailsLink: "",
  },
  {
    title: "24/7 Monitoring",
    vpsLightHostingStatus: true,
    traditionalVpsStatus: false,
    popover: "",
    detailsLink: "",
  },
  {
    title: "Performance Optimized",
    vpsLightHostingStatus: true,
    traditionalVpsStatus: false,
    popover: "",
    detailsLink: "",
  },
  {
    title: "Built-in Backups",
    vpsLightHostingStatus: true,
    traditionalVpsStatus: false,
    popover: "",
    detailsLink: "",
  },
  {
    title: "24/7 Security Expert Monitoring",
    vpsLightHostingStatus: true,
    traditionalVpsStatus: false,
    popover: "",
    detailsLink: "",
  },
  {
    title: "DDoS Attach Protection",
    vpsLightHostingStatus: true,
    traditionalVpsStatus: false,
    popover: "",
    detailsLink: "",
  },
  {
    title: "Integrated Firewall",
    vpsLightHostingStatus: true,
    traditionalVpsStatus: false,
    popover: "",
    detailsLink: "",
  },
  {
    title: "Instantly Scalable",
    vpsLightHostingStatus: true,
    traditionalVpsStatus: true,
    popover: "",
    detailsLink: "",
  },
];

const ManagedVpsHostingCompare = () => {
  return (
    <>
      <section className="py-[10vh] bg-surface">
        <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
          <div className="">
            <SectionTitle leftAlignDesktop leftAlignOnMobile title="Comparison" subTitle="Pre Managed VPS Light Vs Unmanaged VPS " bottomSpace description="" />
            <table className="w-full p-6 text-title text-left shadow-xl rounded-xl md:overflow-hidden table-auto">
              <thead className="bg-surface">
                <tr className="dark:bg-gray-700 bg-white">
                  <th className="p-3 lg:px-5 py-5 text-2xl ">Features</th>
                  <th className="p-3">
                    <div className="flex flex-col text-xs">
                      <span>SiteRacks</span>
                      <span>Managed VPS Light</span>
                    </div>
                  </th>
                  <th className="p-3">
                    <div className="flex flex-col text-xs">
                      <span>Traditional</span>
                      <span>Self Managed VPS</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="border-b text-base bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
                {comparisonData.map((feature) => (
                  <tr key={feature?.title} className="text-text hover:bg-primary hover:text-white  border-b border-slate-300 dark:border-slate-700 w-full group">
                    <td className="px-3 lg:px-5 py-3">{feature?.title}</td>
                    <td className="px-3 py-2 w-2/12">{feature?.vpsLightHostingStatus ? <CheckIcon className="fill-primary h-5 w-5 group-hover:fill-white" /> : <XMarkIcon className="fill-surfaceTwo h-5 w-5 group-hover:fill-white" />}</td>
                    <td className="px-3 py-2 w-2/12">{feature?.traditionalVpsStatus ? <CheckIcon className="fill-primary h-5 w-5 group-hover:fill-surface" /> : <XMarkIcon className="fill-surfaceTwo h-5 w-5 group-hover:fill-white" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export default ManagedVpsHostingCompare;
