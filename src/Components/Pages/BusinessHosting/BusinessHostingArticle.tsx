import PlainButton from '@/Components/Buttons/PlainButton';
import ColumnTitleAndDesc from '@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc';
import WHOptimizedForCms from '@/Components/ModalComponents/WHOptimizedForCms';
import SectionTitle from '@/Components/SectionTitle/SectionTitle';
import { useModalContext } from '@/Context/ModalProvider';
import React from 'react';
import FCDedicatedSupport from '../FeatureCard/FCDedicatedSupport';
import FCFreeDomain from '../FeatureCard/FCFreeDomain';
import FCFreeWebsiteMigration from '../FeatureCard/FCFreeWebsiteMigration';
import OptimizedCMSApp from "../../../../public/images/article/optimized-cms-app.svg";


const BusinessHostingArticle = () => {
     const { requestModal, setModalData, setModalTitle } = useModalContext();

    return (
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
            {/* <FCPremiumCloudServers /> */}
            {/* Premium Website Builder*/}
            {/* <FCPremiumWebsiteBuilder /> */}

            {/* Free Website Migration */}
            <FCFreeWebsiteMigration />

            {/* Dedicated Support */}

            <FCDedicatedSupport />

            {/* Free .com Domain with Annual Plan */}
            <FCFreeDomain />

            {/* Optimized for CMS Applications and Ecommerce */}
            <article className="flex flex-col space-y-8 group items-start">
              <div className="w-full">
                <OptimizedCMSApp className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[340px]" />{" "}
              </div>

              <ColumnTitleAndDesc title="Optimized for CMS Applications and E-Commerce">
                <p className="text-text lg:text-xl lg:leading-9">Maximize your online store or website with our optimized cloud servers designed specifically for CMS and e-commerce needs.</p>
              </ColumnTitleAndDesc>

              <PlainButton
                text="LEARN MORE"
                handler={() => {
                  setModalTitle("Optimized for CMS Applications and Ecommerce"), setModalData(<WHOptimizedForCms />), requestModal();
                }}
              />
            </article>
          </div>
        </div>
      </section>
    );
};

export default BusinessHostingArticle;