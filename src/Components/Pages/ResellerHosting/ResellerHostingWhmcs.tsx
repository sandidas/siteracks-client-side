import FeatureCard from "@/Components/Card/FeatureCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import Image from "next/image";
import React from "react";
import WHMCSImage from "../../../../public/images/article/whmcs-admin-home.jpg";

const ResellerHostingWhmcs = () => {
  return (
    <>
      <section className="py-[10vh] bg-surface">
        <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
          <SectionTitle title="Simplify and streamline your reseller hosting business" subTitle="with the efficient automation provided by WHMCS software." bottomSpace />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-16 2xl:gap-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              <FeatureCard backgroundSecond>
                <h4 className="text-title font-bold text-2xl">Efficient automation</h4>
                <p>Automate your billing and invoicing process, various payment gateways, and advanced reporting.</p>
              </FeatureCard>

              <FeatureCard backgroundSecond>
                <h4 className="text-title font-bold text-2xl">Streamlined management</h4>
                <p>Allows you to manage multiple hosting accounts and clients efficiently from a single dashboard.</p>
              </FeatureCard>
              <FeatureCard backgroundSecond>
                <h4 className="text-title font-bold text-2xl">Automated setup</h4>
                <p>Automatically set up and configure hosting accounts. It improves the efficiency of your business operations.</p>
              </FeatureCard>

              <FeatureCard backgroundSecond>
                <h4 className="text-title font-bold text-2xl">Domain registrars integration</h4>
                <p>Domain registrar integration allows you to manage domains seamlessly from the same dashboard.</p>
              </FeatureCard>
            </div>
            <div className="flex justify-center items-center">
              <Image alt="" src={WHMCSImage} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResellerHostingWhmcs;
