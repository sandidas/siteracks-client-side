import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import AboutBanner from "@/Components/Pages/AboutUs/AboutBanner";
import BehindOurLogo from "@/Components/Pages/AboutUs/BehindOurLogo";
import BoostProductivity from "@/Components/Pages/AboutUs/BoostProductivity";
import OurCoreValues from "@/Components/Pages/AboutUs/OurCoreValues";
import WhoWeAre from "@/Components/Pages/AboutUs/WhoWeAre";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import { getMetaData } from "@/Helpers/AxiosMetaData";
import { GetStaticPropsContext } from "next";
import React, { FC } from "react";
interface IProps {
  metaData: IHeadData;
}

const About: FC<IProps> = ({ metaData }) => {
  return (
    <>
      <MetaDataComponent metaData={metaData} />
      <main>
        <section className="bg-surface">
          <AboutBanner />
        </section>
        <WhoWeAre />
        <OurCoreValues />
        <BehindOurLogo />
        <BoostProductivity />
        <section className="py-[8vh] max-w-screen-2xl mx-auto">
          <SectionTitle supTitle="Your search for" title="lightning-fast hosting" subTitle="with excellent support ends here" />
        </section>
      </main>
    </>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = "about";
  const metaData = await getMetaData(slug);

  if (!metaData) {
    // Return a default value if metaData is undefined
    return {
      props: {
        metaData: {
          // title: "Default Title",
          // description: "Default description",
          // // ...other default values
        },
      },
      revalidate: 86400, // 3600 = 1 hour
    };
  }

  return {
    props: {
      metaData,
    },
    revalidate: 86400, // 3600 = 1 hour
  };
}

export default About;
