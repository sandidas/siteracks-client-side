import React from "react";
import AmazonIcon from "../../../public/images/icons/amazonIcon.svg";
import DigitaloceanIcon from "../../../public/images/icons/digitaloceanIcon.svg";

const WHPremiumCloudServers = () => {
  return (
    <div className="space-y-8">
      <div className="lg:flex xl:space-x-10">
        <div className="py-3">
          <AmazonIcon className="w-28 h-28 fill-text" />
        </div>
        <p className="text-text text-base lg:leading-7">When you choose SiteRacks, stay relaxed, knowing that your data is stored in our highly reliable data centers. This means you get optimal performance for your website or web app, equipping it to deliver superior customer experiences.</p>
      </div>

      <div className="lg:flex xl:space-x-10">
        <div className="py-3">
          <DigitaloceanIcon className="w-28 h-28 fill-text" />
        </div>
        <p className="text-text text-base lg:leading-7">Enjoy better latency and lesser downtime while keeping your account and data always secured. Our platform is built with Premium AWS Cloud and Digital Ocean Cloud servers.</p>
      </div>
    </div>
  );
};

export default WHPremiumCloudServers;
