import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import CareerBanner from "@/Components/Pages/Careers/CareerBanner";
import CareerOpenPositions from "@/Components/Pages/Careers/CareerOpenPositions";
import CareerPerksAndBenefits from "@/Components/Pages/Careers/CareerPerksAndBenefits";
import { getMetaData } from "@/Helpers/AxiosMetaData";
import { GetStaticPropsContext } from "next";
import React, { FC } from "react";
interface IProps {
  metaData: IHeadData;
}

const Careers: FC<IProps> = ({ metaData }) => {
  return (
    <>
      <MetaDataComponent metaData={metaData} />
      <main>
        <section className="bg-surface pb-[8vh] md:pt-[12vh]">
          <CareerBanner />
        </section>

        <section className="py-[8vh]">
          <CareerPerksAndBenefits />
        </section>

        <section className="py-[8vh] bg-surface">
          <CareerOpenPositions />
        </section>
      </main>
    </>
  );
};

export default Careers;

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = "careers"; // CHANGE THIS SLUG
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
