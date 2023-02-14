import FAQCard from "@/Components/FAQ/FAQCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";

const WebHostingFaq = () => {
  return (
    <>
      <SectionTitle bottomSpace title="Frequently Asked Questions" />
      <div className="max-w-4xl mx-auto lg:text-xl lg:leading-9">

        
        <FAQCard title="What is cloud web hosting?">
          <p>Cloud-shared web hosting is a web hosting service where multiple websites share the same resources of a cloud server. It provides high reliability and scalability with low-cost benefits.</p>
        </FAQCard>



        <FAQCard title="What are the benefits of SiteRacks cloud web hosting?">
          <p>SiteRacks Cloud web hosting provides high uptime, faster loading speed, easy scaling, and affordable pricing. It is ideal for websites with fluctuating traffic or those just starting.</p>
        </FAQCard>


        <FAQCard title="How is my website's security protected on SiteRacks cloud-shared web hosting?">
          <p>In SiteRacks, Cloud-shared web hosting providers implement security measures such as firewalls, malware scanning, and SSL encryption. Additionally, they also monitor servers to prevent potential hacking attempts.</p>
        </FAQCard>



        <FAQCard title="What happens if one website on the SiteRacks cloud-shared web hosting experiences a traffic surge?">
          <p>In SiteRacks, Cloud shared web hosting allocates resources according to the needs of each website. If one website experiences a traffic surge, the server resources are automatically increased, so other websites are unaffected.</p>
        </FAQCard>



        <FAQCard title="Is it possible to upgrade or downgrade cloud web hosting plans?">
          <p>Yes, most SiteRacks allow you to upgrade or downgrade your plan based on your website's needs.</p>
        </FAQCard>



        <FAQCard title="Can I host multiple websites on a single cloud-shared hosting plan?">
          <p>Yes, Our cloud shared web hosting higher plans allow hosting multiple websites on a single plan.</p>
        </FAQCard>



        <FAQCard title="How easy is it to migrate my website to cloud-shared web hosting?">
          <p>It is easy to migrate your website to our cloud-shared web hosting. Even we offer free migration services and provide tools to simplify the process.</p>
        </FAQCard>



        <FAQCard title="What level of customer support is available with cloud-shared web hosting?">
          <p>We offer 24/7 customer support, which can be reached through support ticket, email, phone, or live chat.</p>
        </FAQCard>



        <FAQCard title="What should I consider when selecting a cloud-shared web hosting provider?">
          <p>SiteRacks recommends Considering factors such as uptime guarantees, server performance, pricing, customer support, and the number of websites allowed. It is also essential to read reviews and compare different providers to find the best option.</p>
        </FAQCard>


 

      </div>
    </>
  );
};

export default WebHostingFaq;
