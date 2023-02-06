"use client"; // this is a client component
import React from "react";
import { Accordion, createStyles } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    borderRadius: theme.radius.sm,
  },

  item: {
     backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    // backgroundColor: "transparent!important",
    borderBottom: "1px solid",
    borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4],
    position: "relative",
    zIndex: 0,
    transition: "transform 150ms ease",
    padding: "10px 20px",
    marginTop: "10px",

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
    <section className="py-[8vh]">
      <div className="flex flex-col gap-5 text-center max-w-5xl mx-auto">
        <h2 className="font-poppins text-4xl md:text-5xl text-title md:leading-tight font-bold">Frequently Asked Questions</h2>
      </div>

      <div className="py-[5vh] max-w-7xl mx-auto text-xl">
        <Accordion defaultValue="customization" classNames={classes} className={classes.root}>
          <Accordion.Item value="customization">
            <Accordion.Control className="text-2xl py-5">What is business email hosting?</Accordion.Control>
            <Accordion.Panel>
              Email hosting is a dedicated email inbox that you pay to store on a provider’s server. Dedicated and reliable email hosting provides you with custom domains along with several privacy, accessibility, and compatibility benefits for a reasonably low cost.{" "}
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="paidFree">
            <Accordion.Control className="text-2xl py-5">Paid vs. free hosting; what should I choose?</Accordion.Control>
            <Accordion.Panel>
              With paid hosting services, you get the ability to customize your domain name and email address completely. This helps legitimize your business and provides a level of trust to users with whom you interact. Moreover, you can enjoy better privacy and security with a premium hosting
              plan, and with SiteRacks, you have 24/7 support at your disposal through multiple methods.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="eCommerce">
            <Accordion.Control className="text-2xl py-5">Do you host eCommerce websites?</Accordion.Control>
            <Accordion.Panel>Absolutely. We host sites that use secure payment gateways for processing online orders and transactions. Our hosting includes regular backups, DDoS protection, and SSL certification.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="migrationService">
            <Accordion.Control className="text-2xl py-5">Do you offer migration services?</Accordion.Control>
            <Accordion.Panel>Yes, we offer a free migration service after getting your order and migration request. Our team will guide you every step of the way, and your website will be transferred within 24 hours.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="computerOs">
            <Accordion.Control className="text-2xl py-5">Does my hosting choice depend on my computer’s operating system?</Accordion.Control>
            <Accordion.Panel>Not at all. Your hosting account doesn’t depend on your computer's operating system. You can use SiteRacks hosting whether your computer's operating system is Windows, Linux, Mac, or any other option.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="wordPressWebsites">
            <Accordion.Control className="text-2xl py-5">Why select SiteRacks as your WordPress websites?</Accordion.Control>
            <Accordion.Panel>
            With SiteRacks, you can access dependable and economical WordPress hosting options that come equipped with one-click installations and the newest version for maximum website functionality. All of your website's content can be easily managed from one central location, giving you unlimited possibilities for success through an abundance of themes and add-ons.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="transferDomain">
            <Accordion.Control className="text-2xl py-5">What are the benefits of transferring my domain, website, or web hosting to SiteRacks?</Accordion.Control>
            <Accordion.Panel>
            There are several factors that contribute to why individuals choose to move their online presence to SiteRacks. One of the key reasons is our highly praised and award-winning customer support. Additionally, our competitive prices, which include a complimentary 1-year extension on numerous domain transfers, are another popular factor. Furthermore, transferring your domain, website, or hosting to us allows you to simplify the management of your web presence by having all your products in one place.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="professionalEmail">
            <Accordion.Control className="text-2xl py-5">What is the purpose of having a professional email address?</Accordion.Control>
            <Accordion.Panel>
              <p>There are numerous compelling reasons to transition from a free email to a domain-based email, but the following are the most prominent three:</p>
              <p><br />
                <ul className="list-disc pl-5">
                  <li>
                  A professional address such as hello@yourdomain.com instills more trust in customers compared to an unprofessional address like pizzahousr785@notmail.com.
                  </li>
                  <li>
                  World-class security is provided by Professional Email through its use of industry-leading filters for spam and viruses.
                  </li>
                  <li>
                  Customized email addresses enhance the promotion of your business. With every email you send, you are providing your web address to both existing customers and potential clients, thereby motivating them to check out your website.
                  </li>
                </ul> <br />
              </p>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="businessWebsite">
            <Accordion.Control className="text-2xl py-5">What is the purpose of having a website for your business?</Accordion.Control>
            <Accordion.Panel>
            <p>Every local business, regardless of its size and scope of operation, requires a website. This is because the internet is the initial destination for individuals seeking information about a particular product or service. A website can benefit any business by:</p> <br />
            <ul className="list-disc pl-5">
              <li>Promote and sell your products and services</li>
              <li>Establish connections with potential clients (while maintaining relationships with current clients)</li>
            </ul> <br />
            <p>The greatest advantage of creating a website is that it is more accessible and cost-effective than you may expect. SiteRacks provides a comprehensive array of web-building tools, as well as hosting, email, and marketing solutions to aid businesses in expanding their online presence.</p>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default HomeFaq;
