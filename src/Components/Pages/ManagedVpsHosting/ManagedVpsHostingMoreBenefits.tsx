import PlainButton from "@/Components/Buttons/PlainButton";
import FeatureCard from "@/Components/Card/FeatureCard";
import WHBusinessEmail from "@/Components/ModalComponents/WHBusinessEmail";
import WHCollaborationTools from "@/Components/ModalComponents/WHCollaborationTools";
import WHDomainManagement from "@/Components/ModalComponents/WHDomainManagement";
import WHFreeSSL from "@/Components/ModalComponents/WHFreeSSL";
import WHGit from "@/Components/ModalComponents/WHGit";
import WHUltraFastPHP from "@/Components/ModalComponents/WHUltraFastPHP";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { useModalContext } from "@/Context/ModalProvider";
import React from "react";
import GithubIcon from "../../../../public/images/icons/githubIcon.svg";
import CollaborationIcon from "../../../../public/images/icons/collaborationIcon.svg";
import DomainIcon from "../../../../public/images/icons/domainIcon.svg";
import SslIcon from "../../../../public/images/icons/sslIcon.svg";
import EmailIcon from "../../../../public/images/icons/emailIcon.svg";
import WHPrioritySupport from "@/Components/ModalComponents/WHPrioritySupport";
import WHTopNorthSecurity from "@/Components/ModalComponents/WHTopNorthSecurity";
import TopNorthSecurityIcon from "../../../../public/images/icons/TopNorthSecurityIcon.svg";
import PrioritySupportIcon from "../../../../public/images/icons/prioritySupportIcon.svg";
import PhpIcon from "../../../../public/images/icons/phpIcon.svg";




const ManagedVpsHostingMoreBenefits = () => {
  const { requestModal, setModalData, setModalTitle } = useModalContext();
  return (
    <>
      <SectionTitle title="More Benefits" subTitle="Of SiteRacks 100% Fully Managed VPS Hosting Plans" bottomSpace />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">


        <FeatureCard backgroundSecond>
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

        

        <FeatureCard backgroundSecond>
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


        <FeatureCard backgroundSecond>
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

        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <DomainIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Domain Management</h3>
            <p className="text-text">Our platform provides comprehensive domain services including registration, transfer, and DNS management, all accessible through our user-friendly dashboard. Stay in control of your domains and sites with ease.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Domain Management"), setModalData(<WHDomainManagement />), requestModal();
            }}
          />
        </FeatureCard>
        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <CollaborationIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Collaboration Tools</h3>
            <p className="text-text">It is simple to include developers who work on a particular website as collaborators. Additionally, once the website is prepared, you can deliver it to the client.</p>
          </div>
          <div className="grow"></div>
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Collaboration Tools"), setModalData(<WHCollaborationTools />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <GithubIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Integration with Git</h3>
            <p className="text-text">Our servers come pre-installed with Git to streamline your development process.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Simple Integration with Git"), setModalData(<WHGit />), requestModal();
            }}
          />
        </FeatureCard>
 
        <FeatureCard backgroundSecond>
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


        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <PrioritySupportIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Priority support</h3>
            <p className="text-text">Premium Hosting package users receive priority support from our top-notch agents for exceptional technical support experience with speed and quality.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("With advanced priority support"), setModalData(<WHPrioritySupport />), requestModal();
            }}
          />
        </FeatureCard>
        
        <FeatureCard backgroundSecond>
          <div className="space-y-5">
            <TopNorthSecurityIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Top-north Security</h3>
            <p className="text-text">We prioritize the security of your sites by managing it at both server and application level. Our services include free SSL and daily backups, ensuring your data is protected. Trust us for a worry-free experience.</p>
          </div>
          <div className="grow"></div>
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Top-north Security"), setModalData(<WHTopNorthSecurity />), requestModal();
            }}
          />
        </FeatureCard>

      </div>
    </>
  );
};

export default ManagedVpsHostingMoreBenefits;
