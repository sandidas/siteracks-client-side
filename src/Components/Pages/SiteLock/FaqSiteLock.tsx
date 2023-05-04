import FAQCard from "@/Components/FAQ/FAQCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";

const FaqSiteLock = () => {
  return (
    <div className="px-3 md:px-5 py-[10vh]">
      <div className="max-w-screen-2xl mx-auto">
        <SectionTitle bottomSpace title="FAQ" subTitle="Frequently asked questions about SiteLock Website Security" />
        <div className="max-w-5xl mx-auto lg:text-xl lg:leading-9">

          <FAQCard title="What is SiteLock security and how does it work?">
            <p>
            SiteLock is a cloud-based website security solution that provides website scanning, automatic malware removal, and website application firewall (WAF) protection. It works by scanning your website regularly for malware and vulnerabilities, and automatically removing any threats it finds.
            </p>
          </FAQCard>


          <FAQCard title="What types of websites can benefit from SiteLock security?">
            <p>
            Any website that collects user data, accepts payments, or is used for business purposes can benefit from SiteLock security. This includes e-commerce sites, blogs, forums, and more.
            </p>
          </FAQCard>


          <FAQCard title="What types of malware does SiteLock detect and remove?">
            <p>
            SiteLock can detect and remove a wide range of malware, including viruses, spyware, ransomware, and more. It can also detect and remove website vulnerabilities that hackers can exploit.
            </p>
          </FAQCard>


          <FAQCard title="How often does SiteLock scan my website for malware?">
            <p>
            SiteLock scans your website daily to ensure that it is free from malware and other security threats. You can also initiate a scan manually at any time.
            </p>
          </FAQCard>


          <FAQCard title="What happens if SiteLock detects malware on my website?">
            <p>
            If SiteLock detects malware on your website, it will automatically notify you and provide detailed instructions on how to remove the threat. SiteLock can also automatically remove malware from your website in many cases.
            </p>
          </FAQCard>

{/* 
          <FAQCard title="Does SiteLock offer any kind of backup or disaster recovery services?">
            <p>
            SiteLock offers daily backups of your website and can restore your website to a previous version if necessary. This can be a lifesaver in the event of a security breach or other disaster.
            </p>
          </FAQCard> */}


          <FAQCard title="How does SiteLock protect my website from hackers?">
            <p>
            SiteLock offers a website application firewall (WAF) that blocks malicious traffic from reaching your website. It also provides real-time threat intelligence to help you stay ahead of the latest security threats.
            </p>
          </FAQCard>


          <FAQCard title="Is SiteLock easy to install and use?">
            <p>
            Yes, SiteLock is very easy to install and use. Simply sign up for a plan, enter your website information, and SiteLock will start scanning your website immediately. You can also customize the settings to meet your specific security needs.
            </p>
          </FAQCard>


          <FAQCard title="How much does SiteLock cost?">
            <p>
            SiteLock offers a range of pricing plans to fit any budget, starting at just a few dollars per month. The cost will depend on the level of protection you need and the size of your website.
            </p>
          </FAQCard>

        </div>
      </div>
    </div>
  );
};

export default FaqSiteLock;
