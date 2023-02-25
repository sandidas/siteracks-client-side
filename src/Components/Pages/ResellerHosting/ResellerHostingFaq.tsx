import FAQCard from "@/Components/FAQ/FAQCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";

const ResellerHostingFaq = () => {
  return (
    <div>
      <SectionTitle bottomSpace title="FAQ" subTitle="Frequently asked questions about Reseller Hosting" />
      <div className="max-w-5xl mx-auto lg:text-xl lg:leading-9">
        <FAQCard title="What is reseller web hosting?">
          <p>Reseller web hosting is a service that allows individuals or businesses to rent server space and resources and then resell those resources to other customers.</p>
          <p>Reseller web hosting provides individuals or businesses the tools and resources to create their own web hosting company. They purchase a hosting plan from our SiteRacks and then resell that hosting to their customers under their branding.</p>
        </FAQCard>

        <FAQCard title="What are the benefits of reseller web hosting?">
          <p>The benefits of reseller web hosting include creating and managing your own web hosting company without needing to purchase and maintain your own servers. It also allows you to generate additional revenue by reselling hosting services to your customers.</p>
        </FAQCard>

        <FAQCard title="Who can benefit from reseller web hosting?">
          <p>Anyone who wants to create their own web hosting company can benefit from reseller web hosting. This includes web designers, developers, entrepreneurs, and small businesses.</p>
        </FAQCard>

        <FAQCard title="What features should I look for in a reseller web hosting plan?">
          <p>Key features to look for in a reseller web hosting plan include disk space, bandwidth, a control panel, customer support, an uptime guarantee, and server security. In our SiteRacks, you have the best deal for you.</p>
        </FAQCard>

        <FAQCard title="What is a white-label reseller hosting service?">
          <p>White-label reseller hosting service allows you to resell hosting services under your own brand name, logo, and website design. This means that your customers will not see the name of ours.</p>
        </FAQCard>

        <FAQCard title="Can I customize my reseller hosting plans?">
          <p>Yes, we allow you to customize your plans by setting prices, creating hosting packages, and adding or removing features.</p>
        </FAQCard>

        <FAQCard title="How do I migrate my existing customers to my reseller hosting service?">
          <p>We offer migration services to help you move your existing customers to SiteRacks reseller hosting. Alternatively, you can manually transfer your customers’ websites and data to your new hosting service.</p>
        </FAQCard>

        <FAQCard title="What is the difference between shared hosting and reseller hosting?">
          <p>Shared hosting is a web hosting service where multiple websites share the resources of a single server. Reseller hosting, on the other hand, allows individuals or businesses to resell hosting services to other customers.</p>
        </FAQCard>

        <FAQCard title="Is reseller web hosting profitable?">
          <p>Yes, reseller web hosting can be profitable if you price your services competitively, offer high-quality hosting services, and provide excellent customer support.</p>
        </FAQCard>
      </div>
    </div>
  );
};

export default ResellerHostingFaq;
