"use client"; // this is a client component

import React from "react";
import Image from "next/image";
import sunviProfilePhoto from "../../../public/images/sunviProfile.jpg";
import { Rating } from "@mantine/core";

const HomeReview = () => {
  return (
    <section className="py-[8vh]">
      <div className="flex flex-col pb-20 mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl text-title md:leading-tight font-bold">What Our Customers Are Saying</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-5 mx-auto max-w-7xl">
        
        <div className="col-span-3"></div>
        <div className="col-span-9 md:bg-surface rounded-lg py-10 md:py-20 md:px-10 gap-10 shadow-md grid grid-cols-1 md:grid-cols-8">
            
          <div className="md:-ml-64 md:col-span-2">
            <Image src={sunviProfilePhoto} alt="Feedback" width={500} height={500} className="rounded-lg shadow-md" />
          </div>

          <div className="space-y-8 max-w-2xl  md:col-span-6">
            <h3 className="text-title font-bold text-3xl max-w-2xl">
              SiteRacks helps us to improve our productivity and customer experience.
            </h3>
            <p className="text-text">
              SiteRacks website was easy to navigate, and the sign-up process was quick and seamless. The control panel is user-friendly, and I can set up my website quickly. The 24/7 customer support is fantastic; they are always available to help with any questions or issues I may have. The
              loading speed of my website is fast, and I have not experienced any downtime so far. Overall, I highly recommend SiteRacks Web Hosting to anyone looking for a reliable and affordable web hosting solution.
            </p>
            <div className="flex items-center justify-between pt-5">
              <div>
                <p className="text-text">SiteRacks User</p>
              </div>
              <div>
                <Rating value={5} fractions={2} readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeReview;
