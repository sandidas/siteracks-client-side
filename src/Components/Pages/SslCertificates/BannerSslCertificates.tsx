import React from 'react';
import SSLSvg from "../../../../public/images/webHosting/sll-banner.svg";

const BannerSslCertificates = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-3 md:px-5 grid grid-cols-1 md:grid-cols-2 pt-[8vh] md:pt-[12vh] pb-[8vh] gap-16 md:5 xl:gap-16 2xl:gap-32">
      {/* left column  */}
      <div className="flex flex-col justify-center items-start space-y-4 group">
        <h1 className="flex flex-col md:leading-tight lg:leading-tight text-title font-bold">
          <span className='text-xl lg:text-2xl'>SSL Certificates</span>
          <span className='text-5xl lg:text-6xl'>Show your visitors that you are reliable and genuine.</span>
          {/*  */}
        </h1>
        <p className="text-text lg:text-xl lg:leading-9">All of our packages include a FREE SSL certificate, and if you prefer a more advanced SSL certificate, you can upgrade at any time.</p>
      </div>

      {/* right column  */}
      <div className="flex flex-col justify-start items-center w-full">
        <SSLSvg className="w-full h-fit" />
      </div>
    </div>
    );
};

export default BannerSslCertificates;