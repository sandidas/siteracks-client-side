import FAQCard from "@/Components/FAQ/FAQCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";

const BusinessHostingFaq = () => {
  return (
    <div>
      <SectionTitle bottomSpace title="FAQ" subTitle="Frequently asked questions about Business Web Hosting" />
      <div className="max-w-5xl mx-auto lg:text-xl lg:leading-9">
        <FAQCard title="What is business web hosting?">
          <p>Business web hosting is a hosting service that is specifically designed for businesses. It typically provides higher security, reliability, and performance levels than standard web hosting services.</p>
        </FAQCard>

        <FAQCard title="What are the benefits of business web hosting?">
          <p>Business web hosting offers many benefits, including enhanced security, scalability, and performance. It can also provide dedicated resources, custom configurations, and expert support.</p>
        </FAQCard>

        <FAQCard title="What types of businesses are best suited for business web hosting?">
          <p>Business web hosting is best suited for small to medium-sized businesses that require high levels of reliability and performance for their websites and online applications.</p>
        </FAQCard>

        <FAQCard title="What is the difference between business web hosting and shared hosting?">
          <p>Shared hosting is a service where multiple websites share resources on a single server. On the other hand, business web hosting typically provides dedicated resources and custom configurations for enhanced performance and security.</p>
        </FAQCard>

        <FAQCard title="What are the security features of business web hosting?">
          <p>Security features of business web hosting may include SSL certificates, firewalls, malware scanning, DDoS protection, and regular backups.</p>
        </FAQCard>

        <FAQCard title="Can I upgrade my business web hosting plan?">
          <p>Yes, we offer scalable plans that allow you to upgrade your service as your business grows.</p>
        </FAQCard>

        <FAQCard title="Can I host multiple websites on a business web hosting plan?">
          <p>Our business web hosting plans allow you to host multiple websites, domains, and email accounts.</p>
        </FAQCard>
      </div>
    </div>
  );
};

export default BusinessHostingFaq;
