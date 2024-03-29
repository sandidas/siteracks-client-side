import FeatureCard from "@/Components/Card/FeatureCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";
import PlainButton from "@/Components/Buttons/PlainButton";
import { useModalContext } from "@/Context/ModalProvider";
import WHBlazingFast from "../../ModalComponents/WHBlazingFast";
import WHEasyAndUserFriendly from "../../ModalComponents/WHEasyAndUserFriendly";
import WHEasyManagedWordPress from "../../ModalComponents/WHEasyManagedWordPress";
import WHDomainManagement from "../../ModalComponents/WHDomainManagement";
import WHBusinessEmail from "../../ModalComponents/WHBusinessEmail";
import WHFreeSSL from "../../ModalComponents/WHFreeSSL";
import WHGit from "../../ModalComponents/WHGit";


import CollaborationIcon from "../../../../public/images/icons/collaborationIcon.svg";
import PaperPlaneIconFast from "../../../../public/images/icons/paperPlaneIconFast.svg";
import DashboardIcon from "../../../../public/images/icons/dashboardIcon.svg";
import WordPressIcon from "../../../../public/images/icons/wordPressSolutions.svg";
import DomainIcon from "../../../../public/images/icons/domainIcon.svg";
import EmailIcon from "../../../../public/images/icons/emailIcon.svg";
import SslIcon from "../../../../public/images/icons/sslIcon.svg";
import GithubIcon from "../../../../public/images/icons/githubIcon.svg";
import WHCollaborationTools from "@/Components/ModalComponents/WHCollaborationTools";




const WebHostingEssentials = () => {
  // use modal context
  const { requestModal, setOrderType, setModalData, setModalTitle} = useModalContext();

  return (
    <>
      <SectionTitle title="Cloud Web Hosting Essentials" bottomSpace />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <FeatureCard>
          <div className="space-y-5">
            <PaperPlaneIconFast className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Blazing fast websites</h3>
            <p className="text-text">Our servers are designed for optimal performance, utilizing the infrastructure of Digital Ocean and AWS, and incorporating several custom speed enhancements.</p>
          </div>
          <div className="grow"></div>
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setOrderType(true),
              setModalTitle("Blazing fast websites"), setModalData(<WHBlazingFast />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard>
          <div className="space-y-5">
            <DashboardIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Easy and User-Friendly Client Interfaces</h3>
            <p className="text-text">Easily manage your domains, hosting, and website with our intuitive client interfaces and dashboard. Our user-friendly tools make it simple to maintain your online presence.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}

          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setOrderType(true),
              setModalTitle("Easy and User-Friendly Client Interfaces"), setModalData(<WHEasyAndUserFriendly />), requestModal();
            }}
          />
        </FeatureCard>

        {/* WORK ON PROGRESS HERE  */}

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
              setOrderType(true),
              setModalTitle("Easy Managed WordPress"), setModalData(<WHEasyManagedWordPress />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard>
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
              setOrderType(true),
              setModalTitle("Domain Management"), setModalData(<WHDomainManagement />), requestModal();
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
              setOrderType(true),
              setModalTitle("Business Email Service"), setModalData(<WHBusinessEmail />), requestModal();
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
              setOrderType(true),
              setModalTitle("Free SSL Certificate"), setModalData(<WHFreeSSL />), requestModal();
            }}
          />
        </FeatureCard>


        <FeatureCard>
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
              setOrderType(true),
              setModalTitle("Simple Integration with Git"), setModalData(<WHGit />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard>
          <div className="space-y-5">
            <CollaborationIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Collaboration Tools</h3>
            <p className="text-text">It is simple to include developers who work on a particular website as collaborators. Additionally, once the website is prepared, you can deliver it to the client.</p>
          </div>
          <div className="grow"></div>
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setOrderType(true),
              setModalTitle("Collaboration Tools"), setModalData(<WHCollaborationTools />), requestModal();
            }}
          />
        </FeatureCard>
      </div>
    </>
  );
};

export default WebHostingEssentials;
