import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import BlogsIcon from "../../../public/images/nav/blogs.svg";
import BusinessHosting from "../../../public/images/nav/businessHosting.svg";
import CustomWebsiteDevelopment from "../../../public/images/nav/customWebsiteDevelopment.svg";
import ForgetPassword from "../../../public/images/nav/forgetPassword.svg";
import KnowledgeBase from "../../../public/images/nav/knowledgeBase.svg";
import Login from "../../../public/images/nav/login.svg";
import OpenSupportTicket from "../../../public/images/nav/openSupportTicket.svg";
import PreManagedVpsHosting from "../../../public/images/nav/preManagedVpsHosting.svg";
import RegisterDomain from "../../../public/images/nav/registerDomain.svg";
import ResellerHosting from "../../../public/images/nav/resellerHosting.svg";
import SiteLockCertificate from "../../../public/images/nav/sitelockCertificate.svg";
import SslCertificates from "../../../public/images/nav/sslCertificates.svg";
import TransferDomain from "../../../public/images/nav/transferDomain.svg";
import WebHosting from "../../../public/images/nav/webHosting.svg";
import WebsiteBackup from "../../../public/images/nav/websiteBackup.svg";
import WildCardCertificate from "../../../public/images/nav/wildCardCertificate.svg";
import WordPressHosting from "../../../public/images/nav/wordPressHosting.svg";
import FacebookIcon from "../../../public/images/nav/facebookIcon.svg";
import Twitter from "../../../public/images/nav/twitterIcon.svg";
import Instagram from "../../../public/images/nav/instagramIcon.svg";

export const hostingMenuItems = [
  {
    icon: WebHosting,
    title: "Web Hosting",
    description: "Scalable, reliable and secure cloud hosting compared to traditional hosting.",
    linkUrl: "web-hosting",
  },
  {
    icon: WordPressHosting,
    title: "WordPress Hosting",
    description: "Specialized features, tools, performance and security optimized for WordPress",
    linkUrl: "wordpress-hosting",
  },
  {
    icon: BusinessHosting,
    title: "Business Hosting",
    description: "Features and resources that needs of online businesses, such as high uptime.",
    linkUrl: "business-hosting",
  },
  {
    icon: PreManagedVpsHosting,
    title: "pre-Managed VPS Hosting Light",
    description: "Offers dedicated resources and complete management services.",
    linkUrl: "pre-managed-vps-hosting-light",
  },
  {
    icon: ResellerHosting,
    title: "Reseller Hosting",
    description: "Build your hosting business empire with SiteRacks reseller hosting.",
    linkUrl: "reseller-hosting",
  },
];

export const domainMenuItems = [
  {
    icon: RegisterDomain,
    title: "Register a New Domain",
    description: "This Pokémon’s cry is very loud and distracting",
    linkUrl: "register-domain",
  },
  {
    icon: TransferDomain,
    title: "Transfer Domain To Us",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "transfer-domain",
  },
  {
    icon: SiteLockCertificate,
    title: "Privacy & Protection for Domains",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "privacy-protection-for-domains",
  },
  {
    icon: RegisterDomain,
    title: "WHOIS",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "domain-whois",
  },
];

export const websiteMenuItems = [
  {
    icon: WordPressHosting,
    title: "WordPress Website Design",
    description: "This Pokémon’s cry is very loud and distracting",
    linkUrl: "wordpress-website-design",
  },
  {
    icon: CustomWebsiteDevelopment,
    title: "Custom Website Development",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "custom-website-development",
  },
];

export const securityMenuItems = [
  {
    icon: WebsiteBackup,
    title: "Website Backups",
    description: "This Pokémon’s cry is very loud and distracting",
    linkUrl: "website-backup",
  },
  {
    icon: SslCertificates,
    title: "SSL Certificates",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "ssl-certificates",
  },
  {
    icon: SiteLockCertificate,
    title: "SiteLock Certificates",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "siteLock-certificates",
  },
  {
    icon: WildCardCertificate,
    title: "Wildcard SSL",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "wildcard-certificates",
  },
];

export const helpMenuItems = [
  // {
  //   icon:  BlogsIcon,
  //   title: "Blogs",
  //   description: "This Pokémon’s cry is very loud and distracting",
  //   linkUrl: "blogs",
  // },
  {
    icon: OpenSupportTicket,
    title: "Open Support Ticket",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "open-support-ticket",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Live Chat",
    description: "The fluid of Smeargle’s tail secretions changes",
    linkUrl: "#liveChat",
  },
  // {
  //   icon: "KnowledgeBase",
  //   title: "Knowledge Base",
  //   description: "The fluid of Smeargle’s tail secretions changes",
  //   linkUrl: "knowldege-base",
  // },
];

export const aboutMenuItems = [
  {
    icon: BlogsIcon,
    title: "About Us",
    description: "",
    linkUrl: "about",
  },
  {
    icon: BlogsIcon,
    title: " Affiliate Program",
    description: "",
    linkUrl: "affiliate",
  },

  {
    icon: BlogsIcon,
    title: "Careers",
    description: "",
    linkUrl: "careers",
  },

  {
    icon: BlogsIcon,
    title: "Contact",
    description: "",
    linkUrl: "contact",
  },
  {
    icon: BlogsIcon,
    title: "Brand Assets",
    description: "",
    linkUrl: "brand-assets",
  },
];

export const tosMenuItems = [
  {
    icon: BlogsIcon,
    title: "Terms and Conditions",
    description: "",
    linkUrl: "terms-and-conditions",
  },
  {
    icon: BlogsIcon,
    title: "Privacy Policy",
    description: "",
    linkUrl: "privacy-policy",
  },
];

export const socialMenuItems = [
  {
    icon: FacebookIcon,
    title: "Facebook",
    description: "",
    linkUrl: "https://www.facebook.com/SiteRacks",
    target: "_blank",
  },
  {
    icon: Twitter,
    title: "Twitter",
    description: "",
    linkUrl: "https://twitter.com/siteracks",
    target: "_blank",
  },
  {
    icon: Instagram,
    title: "Instagram",
    description: "",
    linkUrl: "https://www.instagram.com/siteracks/",
    target: "_blank",
  },
];
