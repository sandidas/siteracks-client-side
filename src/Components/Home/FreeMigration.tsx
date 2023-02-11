import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import React from "react";
import WelcomeIcon from "../../../public/images/welcomeIcon.svg";
import ColumnTitleAndDesc from "../ColumnTitleAndDesc/ColumnTitleAndDesc";

const FreeMigration = () => {
  return (
    <section className="py-[10vh] bg-surface">
      <div className="max-w-screen-2xl mx-auto px-3 md:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-[2vh]  gap-3 md:5 xl:gap-16 2xl:gap-32">
          {/* image container  */}
          <div className="flex flex-col justify-center items-center bg-surface">
            <div className="w-full">
              {/* image  */}
              <WelcomeIcon className="h-fit w-full fill-primary" />
            </div>
          </div>

          <div className="flex flex-col justify-center items-start space-y-12 group">
            {/* dynamic components */}
            <ColumnTitleAndDesc title={`Free Migration`} subTitle={`a hassle-free solution`}>
              <p className="text-text lg:text-xl lg:leading-9">
                Our website migration service offers a hassle-free solution for transferring your website to our blazing-fast hosting service platform. Our team of experts will handle the entire process, including backup and restoring DNS updates, and website configuration.{" "}
              </p>
              <p className="text-text lg:text-xl lg:leading-9">
                Whether you need to move a simple blog or a complex e-commerce site, we guarantee a smooth and seamless transition with no downtime. We aim to ensure your website is up and running on the new platform with all the necessary features, functionalities, and configurations. With our free
                website migration service, you can focus on growing your business while we handle the technical details.
              </p>
            </ColumnTitleAndDesc>

            <Button size="xl" className="bg-primary shadow-md transition ease-in-out duration-500  group-hover:text-white group-hover:bg-secondary">
              Get Started
              <ArrowLongRightIcon className="h-10 w-10 text-text pl-2 hidden group-hover:block" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeMigration;
