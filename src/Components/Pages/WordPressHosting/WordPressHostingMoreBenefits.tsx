import PlainButton from "@/Components/Buttons/PlainButton";
import FeatureCard from "@/Components/Card/FeatureCard";
import WHFreeSSL from "@/Components/ModalComponents/WHFreeSSL";

import WHUltraFastPHP from "@/Components/ModalComponents/WHUltraFastPHP";
import WHUnlimitedSites from "@/Components/ModalComponents/WHUnlimitedSites";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { useModalContext } from "@/Context/ModalProvider";
import React from "react";

import PhpIcon from "../../../../public/images/icons/phpIcon.svg";
import WordPressIcon from "../../../../public/images/icons/wordPressSolutions.svg";
import SslIcon from "../../../../public/images/icons/sslIcon.svg";
import MultipleWebsiteIcon from "../../../../public/images/icons/multipleWebsiteIcon.svg";
import WHEasyManagedWordPress from "@/Components/ModalComponents/WHEasyManagedWordPress";
import WHDataCenter from "@/Components/ModalComponents/WHDataCenter";
import DataCenterIcon2 from "../../../../public/images/icons/dataCenterIcon2.svg";
import WHBusinessEmail from "@/Components/ModalComponents/WHBusinessEmail";
import EmailIcon from "../../../../public/images/icons/emailIcon.svg";

const WordPressHostingMoreBenefits = () => {
  const { requestModal, setModalData, setModalTitle } = useModalContext();
  return (
    <>
      <SectionTitle title="More Benefits" subTitle="of SiteRacks WordPress Hosting" bottomSpace />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <FeatureCard>
          <div className="space-y-5">
            <PhpIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Ultra-Fast Updated PHP & MySQL</h3>
            <p className="text-text">Latest, Custom and Stable PHP setup for great overall site speed.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}

          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Ultra-Fast Updated PHP & MySQL"), setModalData(<WHUltraFastPHP />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard>
          <div className="space-y-5">
            <MultipleWebsiteIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Host Unlimited Sites</h3>
            <p className="text-text">Host unlimited sites and reduce hosting costs by grouping low resource-demand sites under one account. Optimize your resources for maximum savings.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Host Unlimited Sites"), setModalData(<WHUnlimitedSites />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard>
          <div className="space-y-5">
            <WordPressIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Easy Managed WordPress</h3>
            <p className="text-text">Our plans offer hassle-free One-click WordPress installation and our exclusive. Enjoy managed auto-updates and expert support, plus added benefits.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Easy Managed WordPress"), setModalData(<WHEasyManagedWordPress />), requestModal();
            }}
          />
        </FeatureCard>


        <FeatureCard>
          <div className="space-y-5">
            <SslIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Free SSL Certificate</h3>
            <p className="text-text">An SSL certificate boosts trust for your website visitors. Our cheap shared hosting plans include a free Let's Encrypt SSL certificate, no extra cost required.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Free SSL Certificate"), setModalData(<WHFreeSSL />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard>
          <div className="space-y-5">
            <DataCenterIcon2 className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Pre-Defined Data center based on your location</h3>
            <p className="text-text">Our AI tool optimizes website performance by pre-selecting the best data center based on your proximity. This ensures seamless website loading</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Pre-Defined Data center based on your location"), setModalData(<WHDataCenter />), requestModal();
            }}
          />
        </FeatureCard>


        <FeatureCard>
          <div className="space-y-5">
            <EmailIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Business Email Service</h3>
            <p className="text-text">Enjoy unlimited email accounts under your own domain with free spam protection and webmail access. Get the control and flexibility you need to manage your communication effectively.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Business Email Service"), setModalData(<WHBusinessEmail />), requestModal();
            }}
          />
        </FeatureCard>



      </div>
    </>
  );
};

export default WordPressHostingMoreBenefits;
