import FeatureCard from "@/Components/Card/FeatureCard";
import ColumnTitleAndDesc from "@/Components/ColumnTitleAndDesc/ColumnTitleAndDesc";
import Image from "next/image";
import React from "react";

const BrandAssetsDoDont = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-16 2xl:gap-32">
      <div className="col-span-12 xl:col-span-4">
        <ColumnTitleAndDesc title="LOGO MISUSE">
          <p className="text-text lg:text-xl lg:leading-9">
            It is important that the appearance of the logo remains consistent. The logo should not be misinterpreted, modified, or added to. No attempt should be made to alter the logo in any way. Its orientation, color and composition should remain as indicated in this document.
          </p>
        </ColumnTitleAndDesc>
      </div>

      <div className="col-span-12 xl:col-span-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard noStyle customClass="items-center">
          <div className="space-y-3 text-center">
              <Image className="rounded-md" src="images/brandAssets/gradient.jpg" alt="Do Not Remove Element" width={300} height={200} />
              <h3 className="text-title text-base">
                <span className="text-primary font-bold">Do Not </span>
                Use Gradient
              </h3>
            </div>
            
            {/* footer */}
          </FeatureCard>

          <FeatureCard noStyle customClass="items-center">
            <div className="space-y-3 text-center">
              <Image className="rounded-md" src="images/brandAssets/element.jpg" alt="Do Not Remove Element" width={300} height={200} />
              <h3 className="text-title text-base">
                <span className="text-primary font-bold">Do Not </span>
                Remove Element
              </h3>
            </div>
            
            {/* footer */}
          </FeatureCard>

          <FeatureCard noStyle customClass="items-center">
            <div className="space-y-3 text-center">
              <Image className="rounded-md" src="images/brandAssets/pattern.jpg" alt="Do Not Remove Element" width={300} height={200} />
              <h3 className="text-title text-base">
                <span className="text-primary font-bold">Do Not </span>
                Use As A Pattern
              </h3>
            </div>
            
            {/* footer */}
          </FeatureCard>

          <FeatureCard noStyle customClass="items-center">
            <div className="space-y-3 text-center">
              <Image className="rounded-md" src="images/brandAssets/stretch.jpg" alt="Do Not Remove Element" width={300} height={200} />
              <h3 className="text-title text-base">
                <span className="text-primary font-bold">Do Not </span>
                Use As A Stretch
              </h3>
            </div>
            
            {/* footer */}
          </FeatureCard>

          <FeatureCard noStyle customClass="items-center">
            <div className="space-y-3 text-center">
              <Image className="rounded-md" src="images/brandAssets/similar.jpg" alt="Do Not Remove Element" width={300} height={200} />
              <h3 className="text-title text-base">
                <span className="text-primary font-bold">Do Not </span>
                Use Similar Background Color
              </h3>
            </div>
            
            {/* footer */}
          </FeatureCard>

          <FeatureCard noStyle customClass="items-center">
            <div className="space-y-3 text-center">
              <Image className="rounded-md" src="images/brandAssets/stroke.jpg" alt="Do Not Remove Element" width={300} height={200} />
              <h3 className="text-title text-base">
                <span className="text-primary font-bold">Do Not </span>
                Use Colored Stroke
              </h3>
            </div>
            
            {/* footer */}
          </FeatureCard>
        </div>
      </div>
    </div>
  );
};

export default BrandAssetsDoDont;
