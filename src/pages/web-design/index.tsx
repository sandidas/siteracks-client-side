import { getMetaData } from "@/Helpers/AxiosMetaData";
import { GetStaticPropsContext } from "next";
import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import React, { FC } from "react";
interface IProps {
  metaData: IHeadData;
}

const WebDesign: FC<IProps> = ({ metaData }) => {
  return (
    <>
      <MetaDataComponent metaData={metaData} />

      <main>
        <div className="mx-auto max-w-screen-2xl px-5 text-center py-44">
          <span className="font-thin text-5xl">COMING SOON</span>
        </div>
      </main>
    </>
  );
};

export default WebDesign;

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = "webDesign";
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
