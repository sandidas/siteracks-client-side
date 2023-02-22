"use client"; // this is a client component
import PlainButton from "@/Components/Buttons/PlainButton";
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { useModalContext } from "@/Context/ModalProvider";

import OptimizedCMSApp from "../../../../public/images/article/optimized-cms-app.svg";

import WHOptimizedForCms from "../../ModalComponents/WHOptimizedForCms";
import FCPremiumCloudServers from "../FeatureCard/FCPremiumCloudServers";
import FCPremiumWebsiteBuilder from "../FeatureCard/FCPremiumWebsiteBuilder";
import FCFreeWebsiteMigration from "../FeatureCard/FCFreeWebsiteMigration";
import FCDedicatedSupport from "../FeatureCard/FCDedicatedSupport";
import FCFreeDomain from "../FeatureCard/FCFreeDomain";

const WebHostingArticle = () => {
  const { requestModal, setModalData, setModalTitle } = useModalContext();

  return (
    <>
      <section className="py-[10vh] bg-surface">
        <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
          <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
            <SectionTitle
              title="Maximize Your Offline Business with the Power of the Internet"
              bottomSpace={true}
              description={`Maximize Your Offline Business by Utilizing the Power of Online Platforms. Get ahead of the competition and expand your reach to potential customers with the help of the internet.`}
            />
          </div>

          {/* article container  */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-16 2xl:gap-32">
            <FCPremiumCloudServers />
            {/* Premium Website Builder*/}
            <FCPremiumWebsiteBuilder />

            {/* Free Website Migration */}
            <FCFreeWebsiteMigration />


            {/* Free .com Domain with Annual Plan */}
            <FCFreeDomain />

           
          </div>
        </div>
      </section>
    </>
  );
};

export default WebHostingArticle;
