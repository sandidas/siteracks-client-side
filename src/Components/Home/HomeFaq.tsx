"use client"; // this is a client component
import React from "react";
import { Accordion, createStyles } from "@mantine/core";
import SectionTitle from "../SectionTitle/SectionTitle";
import FAQCard from "../FAQ/FAQCard";
const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    borderRadius: theme.radius.sm,
  },

  item: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    // backgroundColor: "transparent!important",
    borderBottom: "1px solid",
    borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4],
    position: "relative",
    zIndex: 0,
    transition: "transform 150ms ease",
    padding: "10px 20px",
    marginTop: "10px",
    color: "#8d8d8d",

    "&[data-active]": {
      transform: "scale(1.03)",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
      boxShadow: theme.shadows.md,
      border: "1px solid",
      borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
      padding: "20px",
    },
  },

  chevron: {
    "&[data-rotate]": {
      transform: "rotate(-90deg)",
    },
  },
}));
const HomeFaq = () => {
  const { classes } = useStyles();

  return (
    <section className="py-[10vh]">
      <SectionTitle bottomSpace title="Frequently Asked Questions" />
      <div className="max-w-5xl mx-auto lg:text-xl lg:leading-9">


        <FAQCard title="Do you host eCommerce websites?">
          <p>Absolutely. We host sites that use secure payment gateways for processing online orders and transactions. Our hosting includes regular backups, DDoS protection, and SSL certification.</p>
        </FAQCard>

        <FAQCard title="Do you offer migration services?">
          <p>Yes, we offer a free migration service after getting your order and migration request. Our team will guide you every step of the way, and your website will be transferred within 24 hours.</p>
        </FAQCard>

        <FAQCard title="Why select SiteRacks Hosting as your WordPress websites?">
          <p>
            With SiteRacks, you can access dependable and economical WordPress hosting options that come equipped with one-click installations and the newest version for maximum website functionality. All of your website's content can be easily managed from one central location, giving you unlimited
            possibilities for success through an abundance of themes and add-ons.
          </p>
        </FAQCard>

        <FAQCard title="What are the benefits of transferring my domain, website, or web hosting to SiteRacks?">
          <p>
            There are several factors that contribute to why individuals choose to move their online presence to SiteRacks. One of the key reasons is our highly praised and award-winning customer support. Additionally, our competitive prices, which include a complimentary 1-year extension on
            numerous domain transfers, are another popular factor. Furthermore, transferring your domain, website, or hosting to us allows you to simplify the management of your web presence by having all your products in one place.
          </p>
        </FAQCard>

        <FAQCard title="What is the purpose of having a professional email address?">
          <p>There are numerous compelling reasons to transition from a free email to a domain-based email, but the following are the most prominent three:</p>

         
         
          <ul className="list-disc pl-10">
            <li>A professional address such as hello@yourdomain.com instills more trust in customers compared to an unprofessional address like pizzahousr785@notmail.com.</li>
            <li>World-class security is provided by Professional Email through its use of industry-leading filters for spam and viruses.</li>
            <li>Customized email addresses enhance the promotion of your business. With every email you send, you are providing your web address to both existing customers and potential clients, thereby motivating them to check out your website.</li>
          </ul>
        </FAQCard>
        <FAQCard title="What is the purpose of having a website for your business?">
          <p>Every local business, regardless of its size and scope of operation, requires a website. This is because the internet is the initial destination for individuals seeking information about a particular product or service. A website can benefit any business by:</p>
          <ul className="list-disc pl-10">
            <li>Promote and sell your products and services</li>
            <li>Establish connections with potential clients (while maintaining relationships with current clients)</li>
          </ul>{" "}
         
          The greatest advantage of creating a website is that it is more accessible and cost-effective than you may expect. SiteRacks provides a comprehensive array of web-building tools, as well as hosting, email, and marketing solutions to aid businesses in expanding their online presence.
        </FAQCard>
      </div>
    </section>
  );
};

export default HomeFaq;
