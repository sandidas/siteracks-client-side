import FAQCard from "@/Components/FAQ/FAQCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";

const FaqBackup = () => {
  return (
    <div className="px-3 md:px-5 py-[10vh]">
      <div className="max-w-screen-2xl mx-auto">
        <SectionTitle bottomSpace title="FAQ" subTitle="Frequently asked questions about CodeGuard Backup" />
        <div className="max-w-5xl mx-auto lg:text-xl lg:leading-9">
          <FAQCard title="What is CodeGuard backup?">
            <p>CodeGuard backup is a cloud-based backup solution for websites that provides automated, daily backups of website files and databases.</p>
          </FAQCard>

          <FAQCard title="How does CodeGuard backup work?">
            <p>CodeGuard backup continuously monitors your website for changes and automatically creates a backup when changes are detected. These backups are stored on secure, off-site servers for safekeeping.</p>
          </FAQCard>

          <FAQCard title="What are the benefits of using CodeGuard backup?">
            <p>CodeGuard backup provides peace of mind by ensuring that your website data is always backed up and can be quickly restored in the event of a data loss or security breach.</p>
          </FAQCard>

          <FAQCard title="What types of websites can use CodeGuard backup?">
            <p>CodeGuard backup can be used on any website built on popular CMS platforms such as WordPress, Drupal, and Joomla, as well as custom-built websites.</p>
          </FAQCard>

          <FAQCard title="Can I schedule backups with CodeGuard?">
            <p>Yes, CodeGuard allows you to schedule backups at a time that is convenient for you, such as daily, weekly, or monthly.</p>
          </FAQCard>

          <FAQCard title="How long does it take to restore a backup with CodeGuard?">
            <p>CodeGuard backup offers quick and easy restore options that allow you to restore your website to a previous version within minutes.</p>
          </FAQCard>

          <FAQCard title="Is CodeGuard backup easy to set up and use?">
            <p>Yes, CodeGuard backup is designed to be easy to set up and use, with a simple installation process and an intuitive user interface.</p>
          </FAQCard>

          <FAQCard title="Does CodeGuard backup my email as well?">
            <p>Yes, CodeGuard backup can backup your emails as part of your website's files.</p>
          </FAQCard>

          <FAQCard title="What security measures does CodeGuard have in place to protect my backups?">
            <p>CodeGuard backup uses industry-standard security measures such as AES encryption and SSL encryption to ensure that your backups are safe and secure.</p>
          </FAQCard>

          <FAQCard title="How does CodeGuard compare to other backup solutions?">
            <p>CodeGuard backup offers unique features such as website change monitoring, automated restore options, and email backups, making it a comprehensive backup solution that sets it apart from other backup solutions.</p>
          </FAQCard>
        </div>
      </div>
    </div>
  );
};

export default FaqBackup;
