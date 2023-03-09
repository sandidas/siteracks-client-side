import React, { FC } from "react";
import ProductCardFeatureItem from "./ProductCardFeatureItem";
import Link from "next/link";
interface IProps {
  product: IProduct;
  className?: string;
  showAllFeature?: boolean;
}

const ProductCardManagedVpsHostingItems: FC<IProps> = ({ product, showAllFeature }) => {
  return (
    <>
      {/* items */}
      <div className="space-y-3 xl:space-y-6" id={product?.slug}>
        <div className="space-y-1">
          <div className="pb-5">
            <h3 className="font-bold text-text text-base pb-3">Top Features</h3>
            <ProductCardFeatureItem feature={product?.numberOfWebsites} />
            <ProductCardFeatureItem feature={product?.storage} />
            <ProductCardFeatureItem feature={product?.bandwidth} />
            <ProductCardFeatureItem feature={product?.cpuCores} />
            <ProductCardFeatureItem feature={product?.ram} />

            <ProductCardFeatureItem feature={product?.freeWPInstallation} />
            <ProductCardFeatureItem feature={product?.ssl} />
            <ProductCardFeatureItem feature={product?.nightlyBackup} />
            <ProductCardFeatureItem feature={product?.emailAccounts} />
            <ProductCardFeatureItem feature={product?.domain} />
            <ProductCardFeatureItem feature={product?.DDoSProtection} />
            <ProductCardFeatureItem feature={product?.wordpressTransfer} />
            <ProductCardFeatureItem feature={product?.wordpressDedicatedExpert} />
            <ProductCardFeatureItem feature={product?.wordpressOptimized} />
          </div>
          <div className={`space-y-3 xl:space-y-5 transition ${showAllFeature ? "opacity-100" : "hidden opacity-0"}`}>
            <div>
              <h3 className="font-bold text-text text-base pb-3">Performance</h3>
              <ProductCardFeatureItem feature={product?.dedicatedResources} />
              <ProductCardFeatureItem feature={product?.siteRacksExpertOptimized} />
            </div>

            <div>
              <h3 className="font-bold text-text text-base pb-3">More WordPress Features </h3>

              <ProductCardFeatureItem feature={product?.wpAutoUpdates} />
              <ProductCardFeatureItem feature={product?.wordPressMultisite} />
              <ProductCardFeatureItem feature={product?.WordPressStagingTool} />
              <ProductCardFeatureItem feature={product?.WordPressDebugging} />
              <ProductCardFeatureItem feature={product?.WordPressNginxCaching} />
              <ProductCardFeatureItem feature={product?.wordPressAcceleration} />
              <ProductCardFeatureItem feature={product?.objectCacheforWordPress} />
              <ProductCardFeatureItem feature={product?.WordPressLogs} />
            </div>

            <div>
              <h3 className="font-bold text-text text-base pb-3">More Security Features </h3>
              <ProductCardFeatureItem feature={product?.malwareScanner} />
              <ProductCardFeatureItem feature={product?.googleAuth} />
              <ProductCardFeatureItem feature={product?.folderProtection} />
              <ProductCardFeatureItem feature={product?.webApplicationFirewall} />
            </div>

            <div>
              <h3 className="font-bold text-text text-base pb-3">Additional Important Features </h3>
              <ProductCardFeatureItem feature={product?.multiplePhpVersions} />
              <ProductCardFeatureItem feature={product?.subDomains} />
              <ProductCardFeatureItem feature={product?.unlimitedDatabase} />
              <ProductCardFeatureItem feature={product?.scheduleTask} />
            </div>

            <div>
              <h3 className="font-bold text-text text-base pb-3">More Technical Features </h3>
              <ProductCardFeatureItem feature={product?.sshAccess} />
              <ProductCardFeatureItem feature={product?.ftpAccess} />
              <ProductCardFeatureItem feature={product?.gitSupport} />
              <ProductCardFeatureItem feature={product?.nodeJs} />
              <ProductCardFeatureItem feature={product?.laravelTools} />
              <ProductCardFeatureItem feature={product?.apacheNginx} />
              
            </div>

            <div>
              <h3 className="font-bold text-text text-base pb-3">Additional </h3>
              <ProductCardFeatureItem feature={product?.moneyBack} />
              <ProductCardFeatureItem feature={product?.addCollaborators} />
              <ProductCardFeatureItem feature={product?.dnsManagement} />
              <ProductCardFeatureItem feature={product?.powerfulControlPanel} />
            </div>
          </div>
        </div>
      </div>
      {/* # items */}
    </>
  );
};

export default ProductCardManagedVpsHostingItems;
