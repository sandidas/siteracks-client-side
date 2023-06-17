import LiveChat from "@/Components/LiveChat/LiveChat";
import MetaDataComponent from "@/Components/Meta/MetaDataComponent";
import AskMeContactPage from "@/Components/Pages/Contact/AskMeContactPage";
import ContactBanner from "@/Components/Pages/Contact/ContactBanner";
import ExistingClientLogin from "@/Components/Pages/Contact/ExistingClientLogin";
import UseAxiosAdmin from "@/Helpers/UseAxiosAdmin";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import React, { FC } from "react";
import jwt from "jsonwebtoken";
interface IProps {
  formattedDate?: any;
  metaData?: IHeadData;
}

const ContactPage: FC<IProps> = ({ formattedDate }) => {
  console.log("formattedDate ", formattedDate);
  return (
    <>
      {/* {metaData && <MetaDataComponent metaData={metaData} />} */}
      <main>
        <ContactBanner />
        <ExistingClientLogin />
        <LiveChat />
        <AskMeContactPage />
      </main>
    </>
  );
};
export default ContactPage;

// export async function getServerSideProps() {
//   const renderDate = Date.now();
//   const formattedDate = new Intl.DateTimeFormat("en-US", {
//     dateStyle: "long",
//     timeStyle: "long",
//   }).format(renderDate);
//   console.log(`SSR ran on ${formattedDate}. This will be logged in CloudWatch.`);
//   return { props: { formattedDate } };
// }

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const tokenSecret = process.env.ACCESS_TOKEN_SECRET as string;
  const apiKey = jwt.sign({}, tokenSecret);

  try {
    const seoPageSlug = "contact";

    const response = await UseAxiosAdmin({
      axiosInstance: axios,
      method: "get",
      url: `/api/pages/seo?seoPageSlug=${seoPageSlug}`,
      header: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    // console.log("metaData", response);
    if (response?.data) {
      const metaData = response?.data;
      return {
        props: {
          metaData,
        },
      };
    }
    return { props: { isError: true } };
  } catch (error) {
    // console.error(error);
    return { props: { isError: true } };
  }
}

// export async function getStaticProps(context: GetStaticPropsContext) {
//     const slug = "contact";
//     const metaData = await getMetaData(slug);

//     if (!metaData) {
//       // Return a default value if metaData is undefined
//       return {
//         props: {
//           metaData: {
//             // title: "Default Title",
//             // description: "Default description",
//             // // ...other default values
//           },
//         },
//
//       };
//     }

//     return {
//       props: {
//         metaData,
//       },
//
//     };
//   }
