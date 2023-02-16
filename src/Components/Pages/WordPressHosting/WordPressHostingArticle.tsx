import LiveChat from "@/Components/LiveChat/LiveChat";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";
import WordPressHostingBanner from "./WordPressHostingBanner";

const WordPressHostingArticle = () => {
  return (
    <>
      <section className="py-[10vh] bg-surface">
        <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <SectionTitle
              title="Maximize Your Offline Business with the Power of the Internet"
              bottomSpace={true}
              description={`Maximize Your Offline Business by Utilizing the Power of Online Platforms. Get ahead of the competition and expand your reach to potential customers with the help of the internet.`}
            />
          </div>

          {/* article container  */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-16 2xl:gap-32">
            {/* <FCPremiumCloudServers /> */}
            {/* Premium Website Builder*/}
            {/* <FCPremiumWebsiteBuilder /> */}

            {/* Free Website Migration */}
            {/* <FCFreeWebsiteMigration /> */}

            {/* Dedicated Support */}

            {/* <FCDedicatedSupport /> */}

            {/* Free .com Domain with Annual Plan */}
            {/* <FCFreeDomain /> */}

            {/* Optimized for CMS Applications and Ecommerce */}
          </div>
        </div>
      </section>
    </>
  );
};

export default WordPressHostingArticle;
