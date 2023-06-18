// import { ChatBubbleBottomCenterIcon, ChatBubbleLeftRightIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import BlogsIcon from "../../../public/images/nav/blogs.svg";
import BusinessHosting from "../../../public/images/nav/businessHosting.svg";
import CustomWebsiteDevelopment from "../../../public/images/nav/customWebsiteDevelopment.svg";
// import ForgetPassword from "../../../public/images/nav/forgetPassword.svg";
// import KnowledgeBase from "../../../public/images/nav/knowledgeBase.svg";
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
// import WildCardCertificate from "../../../public/images/nav/wildCardCertificate.svg";
import WordPressHosting from "../../../public/images/nav/wordPressHosting.svg";
import FacebookIcon from "../../../public/images/nav/facebookIcon.svg";
import Twitter from "../../../public/images/nav/twitterIcon.svg";
import Instagram from "../../../public/images/nav/instagramIcon.svg";
import AskMeIcon from "../../../public/images/nav/AskMeIcon.svg";

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
    description: "The process of purchasing and acquiring a new domain (website) address on the internet.",
    linkUrl: "https://my.siteracks.com/cart.php?a=add&domain=register",
  },
  {
    icon: TransferDomain,
    title: "Transfer Domain To Us",
    description: "Transferring a domain involves moving the registration of a domain from old registrar to SiteRacks.",
    linkUrl: "https://my.siteracks.com/cart.php?a=add&domain=transfer",
  },
  // {
  //   icon: SiteLockCertificate,
  //   title: "Privacy & Protection for Domains",
  //   description: "The service of hiding personal contact information associated with a domain registration to prevent it from being publicly accessible",
  //   linkUrl: "privacy-protection-for-domains",
  // },
  // {
  //   icon: RegisterDomain,
  //   title: "WHOIS",
  //   description: "A public database that stores information about the owner and registration details of a domain name",
  //   linkUrl: "domain-whois",
  // },
];

export const websiteMenuItems = [
  {
    icon: WordPressHosting,
    title: "WordPress Website Design",
    description: "The process of creating a website using the WordPress platform as the content management system",
    linkUrl: "wordpress-website-design",
  },
  {
    icon: CustomWebsiteDevelopment,
    title: "Custom Website Development",
    description: "The process of creating a unique, tailored website from scratch, often involving coding and programming to meet specific business or individual needs",
    linkUrl: "/custom-website-development",
  },
];

export const securityMenuItems = [
  {
    icon: WebsiteBackup,
    title: "Website Backups",
    description: "The process of creating copies of website files, databases, and content to prevent data loss in case of a website crash or other unforeseen events.",
    linkUrl: "/backup",
  },
  {
    icon: SslCertificates,
    title: "SSL Certificates",
    description: "Digital certificates that encrypt and authenticate data transmitted between a web server and a browser, ensuring secure online communication.",
    linkUrl: "ssl-certificates",
  },
  {
    icon: SiteLockCertificate,
    title: "Website Security",
    description: "Security certifications that scan websites for vulnerabilities, malware, and other threats and provide protection against them.",
    linkUrl: "/website-security",
  },
  // {
  //   icon: WildCardCertificate,
  //   title: "Wildcard SSL",
  //   description: "A type of SSL certificate that secures a domain and its subdomains with a single certificate.",
  //   linkUrl: "wildcard-certificates",
  // },
];

export const helpMenuItems = [
  {
    icon: OpenSupportTicket,
    title: "Open Support Ticket",
    description: "A request for assistance or support from SiteRacks, often submitted through our support portal",
    linkUrl: "https://my.siteracks.com/index.php?rp=/login",
  },
  // {
  //   icon: ChatBubbleLeftRightIcon,
  //   title: "Live Chat",
  //   description: "Customer support service that allows our website users to chat in real-time with a customer support agent to receive assistance or support.",
  //   linkUrl: "/#liveChat",
  // },
  {
    icon: AskMeIcon,
    title: "Ask Me",
    description: "is your go-to support platform! Whether you're an existing or new client, you can ask us anything about website related",
    linkUrl: "https://askme.siteracks.com",
  },
  {
    icon: BlogsIcon,
    title: "Blogs",
    description: "Your ultimate resource for web hosting and trends to empower your digital journey.",
    linkUrl: "/blog",
  },
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
    linkUrl: "https://www.instagram.com/siterackshosting/",
    target: "_blank",
  },
];
