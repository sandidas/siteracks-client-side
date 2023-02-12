import React from "react";
import OpenSupportTicketIcon from "../../../../../public/images/nav/openSupportTicket.svg";

const WHDedicatedSupport = () => {
  return (
    <div className="space-y-8">
      <div className="flex space-x-5 xl:space-x-10">
        <div>
          <OpenSupportTicketIcon className="w-28 h-28 fill-text" />
        </div>
        <p className="text-text text-base lg:leading-7">
          We are providing dedicated expert support to our customers. Our team consists of highly skilled and experienced professionals knowledgeable in their respective fields. They are available 24/7 to answer any questions or concerns you may have. Whether you need help with setting up your
          account, troubleshooting technical issues, or need advice on how to get the most out of our service, our dedicated support team is here to help.
        </p>
      </div>

      <p className="text-text text-base lg:leading-7">
        Our goal is to ensure that you have a positive experience with our service and that all your needs are met in a timely and efficient manner. We understand that technology can sometimes be frustrating and confusing, but our expert support makes it easy for you. Our team is equipped with the
        latest tools and resources to help you resolve any issues you may face, no matter how complex they may be.
      </p>

      <div className="flex space-x-5 xl:space-x-10">
        <div><OpenSupportTicketIcon className="w-28 h-28 fill-text" /></div>
        <p className="text-text text-base lg:leading-7">
          We believe in providing personalized support to every one of our customers. Our support team takes the time to understand your individual needs and provides customized solutions tailored specifically to your situation. With our dedicated support, you can be assured that you will receive
          the highest level of customer service and technical expertise.
        </p>
      </div>

      <p className="text-text text-base lg:leading-7">So if you're looking for an expert support team that genuinely cares about your needs, look no further. We are here to help and ensure you get the most out of our service.</p>
    </div>
  );
};

export default WHDedicatedSupport;
