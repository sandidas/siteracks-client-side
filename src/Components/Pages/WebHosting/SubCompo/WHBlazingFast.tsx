import React from "react";
// import DomainGlobeIcon from "../../../../../public/images/icons/domainGlobeIcon.svg";

const WHBlazingFast = () => {
  return (
    <div className="space-y-8">
      <div className="flex space-x-5 xl:space-x-10">
        {/* <div>
          <DomainGlobeIcon className="w-28 h-28 fill-text" />
        </div> */}
        <p className="text-text text-base lg:leading-7">
          Our SiteRacks technology's heart lies in a commitment to performance, reliability, and scalability. Our servers are designed to deliver the best possible experience to our users, leveraging the latest and greatest in cloud computing technology.
        </p>
      </div>

      <p className="text-text text-base lg:leading-7">
        We have built our servers on the Digital Ocean and AWS platforms, two of the industry's most widely recognized and respected cloud providers. These platforms offer a range of advanced features, such as high-performance storage options, advanced network architecture, and robust security
        measures.
      </p>
      <div className="flex space-x-5 xl:space-x-10">
        {/* <div>
          <DomainGlobeIcon className="w-28 h-28 fill-text" />
        </div> */}
        <p className="text-text text-base lg:leading-7">
          In addition to these foundational components, we have implemented several custom speed optimizations to ensure that our servers are as fast and responsive as possible. These optimizations run the gamut from disk I/O acceleration to memory caching and compression to optimized routing and
          data transfer. By combining these optimizations with the power and scalability of Digital Ocean and AWS, we have created a powerful and highly-optimized computing platform that delivers results for our users.
        </p>
      </div>
    </div>
  );
};

export default WHBlazingFast;
