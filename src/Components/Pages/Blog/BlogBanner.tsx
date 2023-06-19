import React from "react";

const BlogBanner = () => {
  return (
    <div className="max-w-3xl mx-auto px-3 md:px-5 pb-[8vh] pt-[12vh]">
      {/* left column  */}
      <div className="text-center flex flex-col items-center space-y-7">
        <div>
          <h1 className="text-4xl lg:text-6xl md:leading-tight lg:leading-tight text-title font-bold">BLOG</h1>
        </div>
        <p className="text-text lg:text-xl lg:leading-9">Your ultimate resource for web hosting and online presence, providing expert insights and trends to empower your digital journey.</p>
      </div>
    </div>
  );
};

export default BlogBanner;
