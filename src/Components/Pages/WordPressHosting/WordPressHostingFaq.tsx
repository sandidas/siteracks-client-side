import FAQCard from "@/Components/FAQ/FAQCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";

const WordPressHostingFaq = () => {
  return (
    <div>
      <SectionTitle bottomSpace title="FAQ" />
      <div className="max-w-5xl mx-auto lg:text-xl lg:leading-9">
        <FAQCard title="What is WordPress hosting?">
          <p>
            WordPress hosting is a type of web hosting specifically designed for websites that use the WordPress content management system. SiteRacks WordPress hosting is optimized for WordPress and typically includes features like one-click WordPress installation, automatic WordPress updates, and
            pre-installed WordPress plugins.
          </p>
        </FAQCard>

        <FAQCard title="Do I need WordPress hosting for my WordPress site?">
          <p>
            While it is possible to run a WordPress site on any web hosting, WordPress hosting offers specific features and optimizations that can make running a WordPress site more accessible and more efficient if you're running a high-traffic WordPress site or looking for the convenience of
            automatic WordPress updates and pre-installed plugins, SiteRacks WordPress hosting the best option.
          </p>
        </FAQCard>

        <FAQCard title="Can I migrate my existing WordPress site to SiteRacks WordPress hosting?">
          <p>Yes, SiteRacks offer Free migration services to help you move your existing WordPress site to our platform. Many providers will handle the migration process for you, so you don't need to worry about technical details when you are at SiteRacks.</p>
        </FAQCard>

        <FAQCard title="What's the difference between shared and managed WordPress hosting?">
          <p>Shared hosting typically not optimized WordPress sites, while managed WordPress hosting provides more dedicated resources and support for your site. Managed hosting often includes features like automatic updates, daily backups, and support from WordPress experts.</p>
        </FAQCard>

        <FAQCard title="Can I host multiple WordPress sites on one WordPress hosting plan?">
          <p>Yes, Our higher plans allow you to host multiple WordPress sites on the same plan. </p>
        </FAQCard>

        <FAQCard title="Can I use third-party plugins and themes on WordPress hosting?">
          <p>Yes, you can use any genuine WordPress plugin or theme on a WordPress hosting plan, as long as it is compatible with your version of WordPress.</p>
        </FAQCard>

        <FAQCard title="Is WordPress hosting secure?">
          <p>WordPress hosting can be just as secure as any other type of web hosting, as long as you take appropriate security measures. This includes using strong passwords, keeping WordPress and all plugins up-to-date, and using security plugins to protect your site from attacks. SiteRacks also offer additional security features like SSL certificates, firewalls, dedicated WordPress expert, etc.</p>
        </FAQCard>

      </div>
    </div>
  );
};

export default WordPressHostingFaq;
