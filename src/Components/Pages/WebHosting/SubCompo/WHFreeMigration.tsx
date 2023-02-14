import React from "react";
import FreeMigrationIcon from "../../../../../public/images/nav/transferDomain.svg";

const WHFreeMigration = () => {
  return (
    <div className="space-y-8">
      <div className="lg:flex xl:space-x-10">
        <div className="py-3">
          <FreeMigrationIcon className="w-28 h-28 fill-text" />
        </div>

        <p className="text-text text-base lg:leading-7">
          We proudly offer free website migration services for all our clients. Moving your website from your old hosting provider to SiteRacks can be daunting, but we understand the importance of a smooth and hassle-free transition. Our team of experts has extensive experience in website migration
          and is well-equipped to handle any type of website, big or small.
        </p>
      </div>

      <p className="text-text text-base lg:leading-7">
        Our free website migration services include transferring all your files, databases, and emails, ensuring that your website runs smoothly on our servers. We aim to make the transition as seamless as possible, so you can focus on running your business without worrying about technicalities. Our
        team will also ensure that your website's design and functionality are preserved, so you won't have to worry about disruptions to your website's performance.
      </p>
    </div>
  );
};

export default WHFreeMigration;
