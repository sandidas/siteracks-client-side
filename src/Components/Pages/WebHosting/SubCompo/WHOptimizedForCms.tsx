import React from "react";
import BusinessGraphIcon from "../../../../../public/images/icons/businessGraphIcon.svg";
import ServerBusiness from "../../../../../public/images/icons/serverBusiness.svg";

const WHOptimizedForCms = () => {
  return (
    <div className="space-y-8">
      <div className="lg:flex xl:space-x-10">
        <div className="py-3">
          <BusinessGraphIcon className="w-28 h-28 fill-text" />
        </div>
        <p className="text-text text-base lg:leading-7">
          At our SiteRacks, we understand the importance of having a well-functioning web hosting platform for your business. Whether you run an e-commerce store, a business website, or a web application, your online presence is critical to your success. That's why we've created cloud servers that
          are optimized specifically for these types of needs.
        </p>
      </div>

      <p className="text-text text-base lg:leading-7">
        Our cloud servers are designed to deliver fast, reliable, and secure hosting services to meet the demanding requirements of your online business. With our optimized cloud servers, you can be sure that your website will load quickly and your customers will have a smooth browsing experience.
        This can help increase customer satisfaction and drive more sales for your business.
      </p>
      <div className="lg:flex xl:space-x-10">
        <div className="py-3">
          <ServerBusiness className="w-28 h-28 fill-text" />
        </div>
        <p className="text-text text-base lg:leading-7">
          In addition, our cloud servers are designed to handle high traffic volumes, ensuring that your website will remain online and accessible even during peak periods. With our 24/7 monitoring and support, you can rest assured that your website will be up and running smoothly at all times.
        </p>
        <p className="text-text text-base lg:leading-7">
          So, if you're looking to maximize your online store or website, look no further. Our optimized cloud servers are the perfect solution for your WordPress, business website, web application, and e-commerce needs. Get in touch with us today to learn more about our cloud hosting services and
          how we can help you boost your online business.
        </p>
      </div>
    </div>
  );
};

export default WHOptimizedForCms;
