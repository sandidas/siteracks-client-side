import FAQCard from "@/Components/FAQ/FAQCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";

const ManagedVpsHostingFaq = () => {
  return (
    <div>
      <SectionTitle bottomSpace title="FAQ" subTitle="Frequently asked questions about pre-Managed VPS Hosting" />

      <div className="max-w-5xl mx-auto lg:text-xl lg:leading-9">
        <FAQCard title="What is Fully Managed VPS Hosting?">
          <p>Fully Managed VPS Hosting is a solution that fully manages your Virtual Private Server (VPS) by SiteRacks. SiteRacks' expert team will handle all the technical aspects of managing your server, including server updates, security, backups, and maintenance.</p>
        </FAQCard>

        <FAQCard title="What are the benefits of Fully Managed VPS Hosting?">
          <p>The benefits of Fully Managed VPS Hosting include better server performance, enhanced security, 24/7 server monitoring, and regular server backups. Additionally, it frees up time for businesses to focus on their core competencies and allows them to scale their business operations.</p>
        </FAQCard>

        <FAQCard title="Who needs Fully Managed VPS Hosting?">
          <p>
            Fully Managed VPS Hosting is ideal for businesses that require a high-performance hosting environment but do not have the resources or technical expertise to manage their server. It is also beneficial for businesses that want to focus on their core competencies and leave the technical
            aspects of server management to the experts.
          </p>
        </FAQCard>

        <FAQCard title="What level of support is included in Fully Managed VPS Hosting?">
          <p>Fully Managed VPS Hosting typically includes 24/7 server monitoring, security updates, regular server backups, and technical support from a dedicated team of experts.</p>
        </FAQCard>

        <FAQCard title="What is the difference between Fully Managed VPS Hosting and Unmanaged VPS Hosting?">
          <p>In Our Fully Managed VPS Hosting service, We take care of all the technical aspects of managing the server. In contrast, in Unmanaged VPS Hosting, the user manages the server, including software updates, security, and backups.</p>
        </FAQCard>

        <FAQCard title="Can I customize my Fully Managed VPS Hosting plan?">
          <p>You can customize your Fully Managed VPS Hosting plan according to your specific requirements. Our expert will work with you to create a plan that meets your business needs.</p>
        </FAQCard>

        <FAQCard title="What happens if there is a problem with my Fully Managed VPS Hosting server?">
          <p>If there is a problem with your Fully Managed VPS Hosting server, Our support team will work to resolve the issue promptly. They will also provide regular updates on the status of the problem until it is determined.</p>
        </FAQCard>

        <FAQCard title="What kind of security measures are taken in Fully Managed VPS Hosting?">
          <p>Fully Managed VPS Hosting typically includes regular security updates, firewalls, and intrusion detection systems to prevent unauthorized access to the server.</p>
        </FAQCard>

        <FAQCard title="What kind of hosting infrastructure is used in Fully Managed VPS Hosting?">
          <p>Fully Managed VPS Hosting typically uses high-performance hardware, including Non-Volatile Memory Express (NVMe) Solid State Drives (SSDs), to provide faster load times and better performance.</p>
        </FAQCard>

        <FAQCard title="How often are backups taken in Fully Managed VPS Hosting?">
          <p>Fully Managed VPS Hosting typically includes regular server backups.</p>
        </FAQCard>

        <FAQCard title="How do I migrate my website to Fully Managed VPS Hosting?">
          <p>We offer website migration services to help you migrate your website to Fully Managed VPS Hosting. Our support team will work with you to ensure a smooth migration process.</p>
        </FAQCard>

        <FAQCard title="How do I upgrade my Fully Managed VPS Hosting plan?">
          <p>You can upgrade your Fully Managed VPS Hosting plan by contacting our support team. They will work with you to create a plan that meets your growing business needs.</p>
        </FAQCard>

        <FAQCard title="How do I manage my Fully Managed VPS Hosting server?">
          <p>You can manage your Fully Managed VPS Hosting server through a control panel.</p>
        </FAQCard>
      </div>
    </div>
  );
};

export default ManagedVpsHostingFaq;
