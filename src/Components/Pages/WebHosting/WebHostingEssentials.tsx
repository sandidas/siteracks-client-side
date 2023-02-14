import FeatureCard from "@/Components/Card/FeatureCard";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";
import LatestTechIcon from "@/Components/Images/web-hosting/latestTechIcon.svg";
import PlainButton from "@/Components/Buttons/PlainButton";
import { useModalContext } from "@/Context/ModalProvider";
import WHBlazingFast from "./SubCompo/WHBlazingFast";
import WHEasyAndUserFriendly from "./SubCompo/WHEasyAndUserFriendly";
import WHEasyManagedWordPress from "./SubCompo/WHEasyManagedWordPress";
import WHDomainManagement from "./SubCompo/WHDomainManagement";
import WHBusinessEmail from "./SubCompo/WHBusinessEmail";
import WHFreeSSL from "./SubCompo/WHFreeSSL";
const WebHostingEssentials = () => {
  // use modal context
  const { requestModal, setModalData, setModalTitle } = useModalContext();

  return (
    <>
      <SectionTitle title="Cloud Web Hosting Essentials" bottomSpace />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <FeatureCard>
          <div className="space-y-5">
            <LatestTechIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Blazing fast websites</h3>
            <p className="text-text">Our servers are designed for optimal performance, utilizing the infrastructure of Digital Ocean and AWS, and incorporating several custom speed enhancements.</p>
          </div>
          <div className="grow"></div>
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Blazing fast websites"), setModalData(<WHBlazingFast />), requestModal();
            }}
          />
        </FeatureCard>

        <FeatureCard>
          <div className="space-y-5">
            <LatestTechIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Easy and User-Friendly Client Interfaces</h3>
            <p className="text-text">Easily manage your domains, hosting, and website with our intuitive client interfaces and dashboard. Our user-friendly tools make it simple to maintain your online presence.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}

          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Easy and User-Friendly Client Interfaces"), setModalData(<WHEasyAndUserFriendly />), requestModal();
            }}
          />
        </FeatureCard>

        {/* WORK ON PROGRESS HERE  */}

        <FeatureCard>
          <div className="space-y-5">
            <LatestTechIcon className="fill-primary w-14 h-14" />
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
            <LatestTechIcon className="fill-primary w-14 h-14" />
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

        <FeatureCard>
          <div className="space-y-5">
            <LatestTechIcon className="fill-primary w-14 h-14" />
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

        <FeatureCard>
          <div className="space-y-5">
            <LatestTechIcon className="fill-primary w-14 h-14" />
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
            <LatestTechIcon className="fill-primary w-14 h-14" />
            <h3 className="text-title font-bold text-3xl">Simple Integration with Git</h3>
            <p className="text-text">Our servers come pre-installed with Git to streamline your development process.</p>
          </div>
          <div className="grow"></div>
          {/* footer */}
          <PlainButton
            text="LEARN MORE"
            handler={() => {
              setModalTitle("Simple Integration with Git"), setModalData(<WHBlazingFast />), requestModal();
            }}
          />
        </FeatureCard>
      </div>
    </>
  );
};

export default WebHostingEssentials;
