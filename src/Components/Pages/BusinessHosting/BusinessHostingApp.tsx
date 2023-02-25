import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import React from "react";
import DrupalLogo from "../../../../public/images/logos/drupalLogo.svg";
import JoomlaLogo from "../../../../public/images/logos/joomlaLogo.svg";
import LaravelLogo from "../../../../public/images/logos/laravelLogo.svg";
import MagentoLogo from "../../../../public/images/logos/magentoLogo.svg";
import NodejsLogo from "../../../../public/images/logos/nodejsLogo.svg";
import ReactLogo from "../../../../public/images/logos/reactLogo.svg";
import WooCommerceLogo from "../../../../public/images/logos/wooCommerceLogo.svg";
import WordPressLogo from "../../../../public/images/logos/wordPressLogo.svg";

const BusinessHostingApp = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-3 md:px-5">
        <SectionTitle smallTitleSize bottomSpace title="Designed to power your favorite apps" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-7">

            
          <div>
            <DrupalLogo className="w-full h-24 md:px-10 px-2" />
          </div>

          <div>
            <JoomlaLogo className="w-full h-24 md:px-10 px-2" />
          </div>

          <div>
            <LaravelLogo className="w-full h-24 md:px-10 px-2" />
          </div>

          <div>
            <MagentoLogo className="w-full h-24 md:px-10 px-2" />
          </div>

          <div>
            <NodejsLogo className="w-full h-24 md:px-10 px-2" />
          </div>

          <div>
            <ReactLogo className="w-full h-24 md:px-10 px-2" />
          </div>

          <div>
            <WooCommerceLogo className="w-full h-24 md:px-10 px-2" />
          </div>
 

          <div>
            <WordPressLogo className="w-full h-24 md:px-10 px-2" />
          </div>
 


        </div>
      </div>
    </>
  );
};

export default BusinessHostingApp;
