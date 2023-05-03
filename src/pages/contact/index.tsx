import LiveChat from '@/Components/LiveChat/LiveChat';
import MetaDataComponent from '@/Components/Meta/MetaDataComponent';
import AskMeContactPage from '@/Components/Pages/Contact/AskMeContactPage';


 
import ContactBanner from '@/Components/Pages/Contact/ContactBanner';
import ExistingClientLogin from '@/Components/Pages/Contact/ExistingClientLogin';
import { getMetaData } from '@/Helpers/AxiosMetaData';
import { GetStaticPropsContext } from 'next';
import React, { FC } from "react";
interface IProps {
    metaData: IHeadData;
  }

const ContactPage: FC<IProps> = ({ metaData }) => {
    return (
        <>
        <MetaDataComponent metaData={metaData} />
        <main>
            <ContactBanner />
            <ExistingClientLogin />
            <LiveChat />
            <AskMeContactPage />
            </main>
        </>
    );
};

export async function getStaticProps(context: GetStaticPropsContext) {
    const slug = "contact";
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
  

export default ContactPage;