import FAQCard from '@/Components/FAQ/FAQCard';
import SectionTitle from '@/Components/SectionTitle/SectionTitle';
import React from 'react';

const AffiliateFaq = () => {
    return (
        <>
            <SectionTitle bottomSpace title="FAQs about SiteRacks Affiliate Program" />

                    
        <FAQCard title="What is the SiteRacks affiliate program?">
          <p>
          SiteRacks affiliate program pays you a competitive commission for every new customer you send to our website. You don’t have to pay any fees to join, and getting started is very easy, so there’s no risk to you.
          </p>
        </FAQCard>
                   
        <FAQCard title="How can I become an affiliate?">
          <p>
          You don’t need to fill out lengthy forms or wait for any approval call. Just sign up for a SiteRacks affiliate account on our website and fill in the required details to access your affiliate panel.
          </p>
        </FAQCard>
                   
        <FAQCard title="How much can I earn as a SiteRacks affiliate?">
          <p>
          You can earn high-paying commissions based on the efforts you put into your affiliate business. Some of our top-performing affiliates make a consistent monthly income just by promoting our hosting services on their website.
          </p>
        </FAQCard>


        </>
    );
};

export default AffiliateFaq;