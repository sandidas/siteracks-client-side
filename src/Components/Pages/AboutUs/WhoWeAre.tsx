import ColumnTitleAndDesc from '@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc';
import React from 'react';

const WhoWeAre = () => {
    return (
<section className="py-[10vh] max-w-screen-2xl mx-auto px-3 md:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-16 2xl:gap-32">
            <article className="flex flex-col space-y-8 group items-start">
              <div className="w-full">
                {/* Image  */}
                {/* <PremiumCloudServerImage className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[340px]" />{" "} */}
              </div>

              <ColumnTitleAndDesc title="Who We Are">
                <p className="text-text lg:text-lg lg:leading-8">
                  At SiteRacks, we are a reliable hosting provider that empowers businesses to launch their online presence – no hassles, no headaches. Our team offers robust, blazing-fast hosting services in the US for developing and established businesses.{" "}
                </p>
                <p className="text-text lg:text-lg lg:leading-8">
                  Whether you have a WordPress site or an e-commerce store, we ensure your business remains online 24/7. Our experts have always stayed in step with the ever-changing landscape of technology, making us the best hosting provider near you.
                </p>
                <p className="text-text lg:text-lg lg:leading-8">Our commitment to quality and security sets us apart from our competitors, and our zeal to keep growing enables us to deliver innovative solutions backed by the latest tech.</p>
              </ColumnTitleAndDesc>
            </article>

            <article className="flex flex-col space-y-8 group items-start">
              <div className="w-full">
                {/* Image  */}
                {/* <PremiumCloudServerImage className="w-full h-fit max-h-[200px] lg:max-h-[240px]  xl:max-h-[340px]" />{" "} */}
              </div>

              <ColumnTitleAndDesc title="Our Mission">
                <p className="text-text lg:text-lg lg:leading-8">We aim to help you and your businesses by offering affordable, quality web hosting solutions. We strive to become the number one hosting provider, and we plan to do so by providing the best results to our customers. </p>
                <p className="text-text lg:text-lg lg:leading-8"></p>
                <p className="text-text lg:text-lg lg:leading-8"></p>
              </ColumnTitleAndDesc>

              <ColumnTitleAndDesc title="Our Vision">
                <p className="text-text lg:text-lg lg:leading-8">
                  We envision leading the digital spectrum and doing away with traditional and outdated concepts, breathing new life into old solutions and services. We come to work every day charged with adrenaline and ready to build new digital solutions that are fresh, impactful, and resonate
                  well with the intended audience.
                </p>
                <p className="text-text lg:text-lg lg:leading-8">
                  We look forward to creating lasting business relationships and becoming your partner for years to come. With dedicated account managers, responsive customer support, and all hosting services under one roof, we endeavor to make collaborating with us an experience you are more than
                  happy with.
                </p>
              </ColumnTitleAndDesc>
            </article>
          </div>
        </section>
    );
};

export default WhoWeAre;