import AboutSiteracksServicesTC from "@/Components/Pages/TermsAndConditions/AboutSiteracksServicesTC";
import AcceptanceOfTermsTC from "@/Components/Pages/TermsAndConditions/AcceptanceOfTermsTC";
import AccuracyCompletenessAndTC from "@/Components/Pages/TermsAndConditions/AccuracyCompletenessAndTC";
import ChangesTC from "@/Components/Pages/TermsAndConditions/ChangesTC";
import DiscontinuedServicesEndOfTC from "@/Components/Pages/TermsAndConditions/DiscontinuedServicesEndOfTC";
import ExclusionOfLiabilityTC from "@/Components/Pages/TermsAndConditions/ExclusionOfLiabilityTC";
import GoverningLawAndJurisdictionTC from "@/Components/Pages/TermsAndConditions/GoverningLawAndJurisdictionTC";
import IndemnificationTC from "@/Components/Pages/TermsAndConditions/IndemnificationTC";
import IntellectualPropertyTC from "@/Components/Pages/TermsAndConditions/IntellectualPropertyTC";
import PricingModeOfPaymentTC from "@/Components/Pages/TermsAndConditions/PricingModeOfPaymentTC";
import ProhibitedUsesTC from "@/Components/Pages/TermsAndConditions/ProhibitedUsesTC";
import UsageEligibilityTC from "@/Components/Pages/TermsAndConditions/UsageEligibilityTC";
import UserContentTC from "@/Components/Pages/TermsAndConditions/UserContentTC";
import YourAccountTC from "@/Components/Pages/TermsAndConditions/YourAccountTC";
import YourRepresentationsTC from "@/Components/Pages/TermsAndConditions/YourRepresentationsTC";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import Head from "next/head";
import React from "react";

const TOC = () => {
  return (
    <>
      <Head>
        <title>About us | SiteRacks</title>
        <meta name="description" content="SiteRacks" />
      </Head>
      <main>
        <section className="bg-surface pb-[8vh] md:pt-[12vh]">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5 space-y-5">
            <SectionTitle title="SiteRacks TERMS AND CONDITIONS" />
            <p className="text-text">The following terms of service (these "Terms of Service"), govern your access to and use of SiteRacks LLC services, including any content, functionality, and services offered on or through SiteRacks.com (the "Site or website").</p>
            <p className="text-text">
              Please read the Terms of Service carefully before you start to use the Site. By accessing, browsing, registering to use the Site, or Services or by clicking to accept or agree to the Terms of Service & our privacy policy when this option is made available to you, you acknowledge that
              you have read, understood accept and agree to be bound and abide by these Terms of Service and our Privacy Policy, incorporated herein by reference. If you do not agree to these Terms of Use & Privacy Policy, do not use any portion of the Site, or the Services. Failure to use the Site
              in accordance with these Terms & Privacy Policy may subject you to civil and criminal penalties.
            </p>
            <p className="text-text">
              If you do not agree with all of the provisions of this agreement, you cannot use the Services. To remove any doubt, in the event of any conflict or discrepancy between these Terms and conditions and any other provisions and/or terms and/or otherwise between us and you, the provisions
              and the terms of these Terms of Use will prevail. Please feel free to contact us with any questions regarding the content of this agreement.
            </p>
          </div>
        </section>
        <section className="pb-[8vh] md:pt-[12vh]">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5 space-y-5">
            <AcceptanceOfTermsTC />
            <UsageEligibilityTC />
            <AboutSiteracksServicesTC />
            <ExclusionOfLiabilityTC />
            <YourAccountTC />
            <UserContentTC />
            <IntellectualPropertyTC />
            <YourRepresentationsTC />
            <AccuracyCompletenessAndTC />
            <DiscontinuedServicesEndOfTC />
            <PricingModeOfPaymentTC />
            <IndemnificationTC />
            <ProhibitedUsesTC />
            <ChangesTC />
            <GoverningLawAndJurisdictionTC />



          </div>
        </section>
      </main>
    </>
  );
};

export default TOC;
