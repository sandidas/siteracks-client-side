import LiveChat from "@/Components/LiveChat/LiveChat";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";
import FCDedicatedSupport from "../FeatureCard/FCDedicatedSupport";
import FCFreeDomain from "../FeatureCard/FCFreeDomain";
import FCFreeWebsiteMigration from "../FeatureCard/FCFreeWebsiteMigration";
import FCManagedWordPressHosting from "../FeatureCard/FCManagedWordPressHosting";
import FEDedicatedWordPressExpert from "../FeatureCard/FEDedicatedWordPressExpert";
import WordPressHostingBanner from "./WordPressHostingBanner";

const WordPressHostingArticle = () => {
  return (
    <>
      <section className="py-[10vh] bg-surface">
        <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
          <SectionTitle
            title="Why SiteRacks for WordPress Hosting"
            bottomSpace
            description={`Our WordPress-optimized servers can provide significant benefits for website owners, including faster loading times, increased security, and improved scalability. Optimized servers are designed to handle the specific demands of WordPress, making it easier to manage and maintain websites while providing a better user experience for visitors.`}
          />

          {/* article container  */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-16 2xl:gap-32">
            <FCManagedWordPressHosting />
            <FEDedicatedWordPressExpert />
            <FCFreeWebsiteMigration />
            <FCFreeDomain />
          </div>
        </div>
      </section>
    </>
  );
};

export default WordPressHostingArticle;
