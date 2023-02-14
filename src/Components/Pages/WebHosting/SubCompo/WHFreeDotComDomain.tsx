import React from "react";
import DomainIcon from "../../../../../public/images/domainIcon.svg";
import DomainGlobeIcon from "../../../../../public/images/domainGlobeIcon.svg";

const WHFreeDotComDomain = () => {
  return (
    <div className="space-y-8">
      <div className="flex space-x-5 xl:space-x-10">
        <div>
          <DomainGlobeIcon className="w-28 h-28 fill-text" />
        </div>
        <p className="text-text text-base lg:leading-7">
          At our SiteRacks, we understand the importance of having a strong online presence for your business. That's why we are offering a free .com domain with our annual plan. This domain will allow you to establish your brand and increase your visibility on the web, which is essential for the
          growth and success of your business.
        </p>
      </div>

      <p className="text-text text-base lg:leading-7">
        Our annual plan includes various features and benefits that will help you establish a robust online presence, including website hosting, email hosting, and technical support. These plans also allow you to choose from a wide range of templates and designs, allowing you to customize your
        website to meet your specific needs and preferences.
      </p>
      <div className="flex space-x-5 xl:space-x-10">
        <div>
          <DomainIcon className="w-28 h-28 fill-text" />
        </div>
        <p className="text-text text-base lg:leading-7">
          So, if you're looking to establish a solid online presence for your business, our annual plan is the perfect solution. With a free .com domain and various features and benefits, you'll have everything you need to succeed online. So why wait? Get started today and take your business to the
          next level!
        </p>
      </div>
    </div>
  );
};

export default WHFreeDotComDomain;
