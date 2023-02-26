import PlainButton from "@/Components/Buttons/PlainButton";
import FeatureCard from "@/Components/Card/FeatureCard";
import WHBlazingFast from "@/Components/ModalComponents/WHBlazingFast";
import WHEasyAndUserFriendly from "@/Components/ModalComponents/WHEasyAndUserFriendly";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { useModalContext } from "@/Context/ModalProvider";
import React from "react";
import PaperPlaneIconFast from "../../../../public/images/icons/paperPlaneIconFast.svg";
import DashboardIcon from "../../../../public/images/icons/dashboardIcon.svg";
import WHDomainManagement from "@/Components/ModalComponents/WHDomainManagement";
import DomainIcon from "../../../../public/images/icons/domainIcon.svg";
import WHPrioritySupport from "@/Components/ModalComponents/WHPrioritySupport";
import PrioritySupportIcon from "../../../../public/images/icons/prioritySupportIcon.svg";
import WHTopNorthSecurity from "@/Components/ModalComponents/WHTopNorthSecurity";
import TopNorthSecurityIcon from "../../../../public/images/icons/TopNorthSecurityIcon.svg";
import AutoUpdateIcon from "../../../../public/images/icons/autoUpdateIcon.svg";
import ReadyWebsiteIcon from "../../../../public/images/icons/readyWebsiteIcon.svg";
import CollaborationIcon from "../../../../public/images/icons/collaborationIcon.svg";
import GithubIcon from "../../../../public/images/icons/githubIcon.svg";


import WHCollaborationTools from "@/Components/ModalComponents/WHCollaborationTools";
import WHDedicatedWordPressExpertModal from "@/Components/ModalComponents/WHDedicatedWordPressExpertModal";
import WHWordpressUpdate from "@/Components/ModalComponents/WHWordpressUpdate";
import WHGit from "@/Components/ModalComponents/WHGit";

const BusinessHostingBusinessTools = () => {
  const { requestModal, setOrderType, setModalData, setModalTitle } = useModalContext();
  return (
    <>
      <SectionTitle title="Powerful features for Your Business" subTitle="website and webmaster" bottomSpace />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <FeatureCard background>
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

        <FeatureCard background>
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


        <FeatureCard background>
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
              setOrderType(true),
              setModalTitle("With advanced priority support"), setModalData(<WHPrioritySupport />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard background>
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


        <FeatureCard background>
          <div className="space-y-5">
            <TopNorthSecurityIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Top-north Security</h3>
            <p className="text-text">We prioritize the security of your sites by managing it at both server and application level. Our services include free SSL and daily backups, ensuring your data is protected. Trust us for a worry-free experience.</p>
          </div>
          <div className="grow"></div>
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setOrderType(true),
              setModalTitle("Top-north Security"), setModalData(<WHTopNorthSecurity />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard background>
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

        <FeatureCard background>
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

        <FeatureCard background>
          <div className="space-y-5">
            <ReadyWebsiteIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">pre-built sites and startup support</h3>
            <p className="text-text">If you are a beginner, Our dedicated WordPress experts are ready to assist you. </p>
          </div>
          <div className="grow"></div>
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setOrderType(true),
              setModalTitle("pre-built sites and startup support"), setModalData(<WHDedicatedWordPressExpertModal />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard background>
          <div className="space-y-5">
            <AutoUpdateIcon className="fill-primary w-14 h-14" />
            <h3 className="flex flex-col">
              <span className="text-title font-bold text-3xl">Automatic updates</span>
              <span className="text-text">WordPress core, plugins and security</span>
            </h3>
            <p className="text-text">Keep your WordPress core up to date with automatic software and security updates.</p>
          </div>
          <div className="grow"></div>
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setOrderType(true),
              setModalTitle("Automatic WordPress core, plugins and security updates"), setModalData(<WHWordpressUpdate />), requestModal();
            }}
          />
        </FeatureCard>
      </div>
    </>
  );
};

export default BusinessHostingBusinessTools;