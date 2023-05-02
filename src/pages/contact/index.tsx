import LiveChat from '@/Components/LiveChat/LiveChat';
import AskMeContactPage from '@/Components/Pages/Contact/AskMeContactPage';


 
import ContactBanner from '@/Components/Pages/Contact/ContactBanner';
import React from 'react';

const ContactPage = () => {
    return (
        <>
            <ContactBanner />
            <LiveChat />
            <AskMeContactPage />
           
        </>
    );
};

export default ContactPage;