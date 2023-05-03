import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import BannerBackup from "@/Components/Pages/Backup/BannerBackup";
import FeaturesOfCodeGuardBackup from "@/Components/Pages/Backup/FeaturesOfCodeGuardBackup";
import { getMetaData } from "@/Helpers/AxiosMetaData";
import { GetStaticPropsContext } from "next";
import React, { FC } from "react";
interface IProps {
  metaData: IHeadData;
}
const BackupPage: FC<IProps> = ({ metaData }) => {
  return (
    <>
    <MetaDataComponent metaData={metaData} />
        <main>
             <BannerBackup />
             <FeaturesOfCodeGuardBackup />

        </main>
    </>
  );
};

export default BackupPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = "backup";
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
