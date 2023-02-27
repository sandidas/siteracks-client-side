import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import IconSiteRacks from "@/Components/Header/IconSiteRacks";
import Logo from "@/Components/Header/Logo";
import React from "react";

const BehindOurLogo = () => {
  return (
    <section className="py-[10vh] max-w-screen-2xl mx-auto px-3 md:px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-16 2xl:gap-32">
        <div className="w-full flex flex-col items-center">
          <div className="sticky top-36">
            <IconSiteRacks logoHeight="500px" logoWidth="500px" />
          </div>
        </div>
        <article className="flex flex-col space-y-12 group items-start">
          <ColumnTitleAndDesc title="Behind the Screen: Our Name">
            <p className="text-text lg:text-lg lg:leading-8">
              Our name ‘SiteRacks’ is the amalgamation of two words that are related to what we do: website and server racks. We host your ‘site’ on our robust and secure cloud-based server ‘racks’ to ensure that your business keeps running smoothly all year long with no disruptions.{" "}
            </p>
          </ColumnTitleAndDesc>

          <Logo logoHeight="70px" logoWidth="400px" />
          <ColumnTitleAndDesc title="Behind the Screen: Our Logo">
            <p className="text-text lg:text-lg lg:leading-8">We’ve put a lot of thought in designing our logo, which truly reflects who we are as a business. If you look carefully, you’ll be able to see a combination of our initial ‘S’ and the server racks that represent our web hosting.</p>

            <p className="text-text lg:text-lg lg:leading-8">
              We’ve also thoughtfully selected the colors for the logo, which are green, grey, and black. The green shows sustainability not only for the planet but also for our end users’ business and hosting. The grey shows our focus, attention to detail, and practicality, while the black
              represents our emphasis on security and sophistication.
            </p>
          </ColumnTitleAndDesc>
        </article>
      </div>
    </section>
  );
};

export default BehindOurLogo;
