import CompleteCheckIcon from "../../../public/images/icons/CompleteCheckIcon.svg";
import NegativeCloseIcon from "../../../public/images/icons/NegativeCloseIcon.svg";
import LightCheckIcon from "../../../public/images/icons/LightCheckIcon.svg";
import { findServiceByNameAndType } from "../Hooks/ApiCall";

// tool tips
export const storageTooltip =
  "Our servers are equipped with high-performance Non-Volatile Memory Express (NVMe) for both files and databases, ensuring lightning-fast loading times for your sites. The storage is allocated per plan, meaning that if you have multiple sites, the storage will be shared among them.";

export const sslTooltip = "ssl";
export const monthlyVisitsTooltip = "The following is an estimated approximation of the maximum number of website visits that can be accommodated by the hosting plan, assuming all the sites you host are utilizing our out-of-the-box caching as intended.";
export const bandwidthTooltip = "As long as your plan adheres to our fair use guidelines, there are no restrictions on your data transfer. The site will not go down if the data transfer limit is over. You can switch higher plan easily.";
export const domainTooltip = "ssl";
export const nightlyBackupTooltip = "ssl";
export const wordpressTransferTooltip = "ssl";
export const multiplePhpVersionsTooltip = "ssl";
export const emailAccountsTooltip = "ssl";
export const wordpressDedicatedExpertTooltip = "ssl";
export const siteRacksExpertOptimizedTooltip = "ssl";
export const addCollaboratorsTooltip = "ssl";
export const dedicatedResourcesTooltip = "ssl";
export const wordPressMultisiteTooltip = "ssl";
export const WordPressNginxCachingTooltip = "ssl";
export const powerfulControlPanelTooltip = "ssl";
export const wordpressOptimizedTooltip = "ssl";

const standardWebhosting: IPackages | any = findServiceByNameAndType("sharedWebHosting", "standardWebhosting");
const premiumWebHosting: IPackages | any = findServiceByNameAndType("sharedWebHosting", "premiumWebHosting");
const ultimateWebHosting: IPackages | any = findServiceByNameAndType("sharedWebHosting", "ultimateWebHosting");

export const webHostingData = [
  {
    _id: 1,
    title: "Standard Web Hosting",
    slug: "standardWebHosting",
    shortDescription: "A great starter package with a matching domain, free email, and free SSL, provided that the plan's terms are 12 months or longer.",
    description: "A",
    featured: false,
    additionalMonth: "+2 months FREE ",

    ...standardWebhosting,

    numberOfWebsites: {
      iconColor: "fill-red-200",
      bold: "2",
      regular: "Websites",
      toolTip: null,
      status: true,
    },
    storage: {
      iconColor: "fill-red-200",
      bold: "10 GB",
      regular: "NVMe Premium Storage",
      toolTip: null,
      status: true,
    },
    monthlyVisits: {
      iconColor: "fill-red-200",
      bold: "~ 100,000",
      regular: "Visits Monthly",
      toolTip: null,
      status: true,
    },
    bandwidth: {
      iconColor: "fill-red-200",
      bold: "100 GB",
      regular: "Bandwidth",
      toolTip: null,
      status: true,
    },
    freeWPInstallation: {
      bold: "Free ",
      regular: "1-Click WP Installation",
      status: true,
    },
    wpAutoUpdates: {
      bold: "Automatic",
      regular: "WordPress Updates",
      status: true,
    },
    ssl: {
      bold: "Free",
      regular: "SSL Certificate",
      toolTip: null,
      status: true,
    },
    nightlyBackup: {
      bold: "Free",
      regular: "Nightly Backups",
      toolTip: null,
      status: true,
    },
    emailAccounts: {
      iconColor: "fill-red-200",
      bold: "50",
      regular: "Email Accounts",
      toolTip: null,
      status: true,
    },
    domain: {
      bold: "Free",
      regular: ".com Domain",
      toolTip: null,
      status: false,
    },
    subDomains: {
      iconColor: "fill-red-200",
      bold: "2",
      regular: "Subdomains",
      status: true,
    },
    cpuCores: {
      icon: LightCheckIcon,
      iconColor: "fill-red-200",
      bold: "1 CPU",
      regular: "Cores",
      status: true,
    },
    ram: {
      icon: LightCheckIcon,
      iconColor: "fill-red-200",
      bold: "1 GB",
      regular: "RAM",
      status: true,
    },

    scheduleTask: {
      iconColor: "fill-red-200",
      bold: "2",
      regular: "CronJobs",
      status: true,
    },
    wordpressTransfer: {
      bold: "Free",
      regular: "Migration",
      toolTip: null,
      status: true,
    },
    wordpressDedicatedExpert: {
      bold: "Dedicated",
      regular: "WordPress Expert",
      toolTip: null,
      status: false,
    },
    wordPressAcceleration: {
      bold: "WordPress",
      regular: "Acceleration",
      status: true,
    },

    wordPressMultisite: {
      bold: "WordPress",
      regular: "Multisite",
      toolTip: null,
      status: true,
    },

    WordPressStagingTool: {
      icon: LightCheckIcon,
      iconColor: "fill-red-200",
      bold: "WordPress",
      regular: "Staging Tool",
      status: false,
    },

    WordPressDebugging: {
      bold: "WordPress",
      regular: "Debugger",
      status: true,
    },

    WordPressNginxCaching: {
      bold: "Nginx",
      regular: "Cache",
      toolTip: null,
      status: true,
    },

    WordPressLogs: {
      bold: "WordPress",
      regular: "Logs",
      status: true,
    },
    wordpressOptimized: {
      bold: "WordPress",
      regular: "Optimized Server",
      toolTip: null,
      status: false,
    },
    objectCacheforWordPress: {
      bold: "Object Cache",
      regular: "for WordPress",
      toolTip: null,
      status: false,
    },
    googleAuth: {
      bold: "Built-in",
      regular: "Google Authentication",
      status: true,
    },
    folderProtection: {
      bold: "Folder",
      regular: "Protection",
      status: true,
    },
    DDoSProtection: {
      bold: "DDoS",
      regular: "Protection",
      status: true,
    },
    webApplicationFirewall: {
      bold: "Web Application",
      regular: "Firewall",
      status: true,
    },
    unlimitedDatabase: {
      iconColor: "fill-red-200",
      bold: "4",
      regular: "Databases",
      status: true,
    },
    multiplePhpVersions: {
      bold: "Multiple",
      regular: "PHP Versions",
      toolTip: null,
      status: true,
    },
    moneyBack: {
      bold: "30 Days",
      regular: "Money Back Guarantee",
      status: true,
    },
    siteRacksExpertOptimized: {
      bold: "Expert Optimization",
      regular: "by SiteRacks",
      toolTip: null,
      status: false,
    },
    logs: {
      bold: "Server",
      regular: "Logs",
      status: true,
    },
    addCollaborators: {
      bold: "Collaborators",
      regular: "Tools",
      toolTip: null,
      status: true,
    },
    dnsManagement: {
      bold: "DNS",
      regular: "Management",
      status: true,
    },
    sshAccess: {
      bold: "SSH",
      regular: "Access",
      status: true,
    },
    ftpAccess: {
      bold: "FTP",
      regular: "Access",
      status: true,
    },
    gitSupport: {
      bold: "GIT",
      regular: "Access",
      toolTip: null,
      status: true,
    },
    nodeJs: {
      bold: "NodeJS",
      regular: "Ready",
      status: true,
    },
    laravelTools: {
      bold: "Laravel",
      regular: "Toolkit",
      status: true,
    },
    apacheNginx: {
      bold: "Apache/Nginx",
      regular: "Support",
      status: true,
    },

    dedicatedIPAddress: {
      bold: "Dedicated",
      regular: "IP Address",
      status: false,
    },

    dedicatedResources: {
      bold: "Dedicated",
      regular: "Resources",
      toolTip: null,
      status: false,
    },
    malwareScanner: {
      bold: "Malware",
      regular: "Scanner",
      status: true,
    },

    powerfulControlPanel: {
      bold: "Powerful",
      regular: "ControlPanel",
      toolTip: null,
      status: true,
    },
  },
  {
    _id: 2,
    title: "Premium Web Hosting",
    slug: "premiumWebHosting",
    shortDescription: "A great package for multiple websites with a matching domain, free email, and free SSL, provided that the plan's terms are 12 months or longer.",
    description: "A",
    featured: true,
    additionalMonth: "+3 months FREE ",
    // ...productPricing?.sharedWebHosting?.child?.premiumWebHosting,
    ...premiumWebHosting,

    numberOfWebsites: {
      iconColor: "fill-primary",
      bold: "Unlimited",
      regular: "Websites",
      toolTip: null,
      status: true,
    },
    storage: {
      iconColor: "fill-green-100",
      bold: "40 GB",
      regular: "NVMe Premium Storage",
      toolTip: null,
      status: true,
    },
    monthlyVisits: {
      iconColor: "fill-red-200",
      bold: "~ 100,000",
      regular: "Visits Monthly",
      toolTip: null,
      status: true,
    },
    bandwidth: {
      bold: "Unlimited",
      regular: "Bandwidth",
      toolTip: null,
      status: true,
    },

    cpuCores: {
      icon: LightCheckIcon,
      iconColor: "fill-red-200",
      bold: "1 CPU",
      regular: "Cores",
      status: true,
    },
    ram: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "2 GB",
      regular: "RAM",
      status: true,
    },
    wordpressDedicatedExpert: {
      bold: "Dedicated",
      regular: "WordPress Expert",
      toolTip: null,
      status: false,
    },
    wordPressAcceleration: {
      bold: "WordPress",
      regular: "Acceleration",
      status: true,
    },
    wordpressOptimized: {
      bold: "WordPress",
      regular: "Optimized Server",
      toolTip: null,
      status: false,
    },
    objectCacheforWordPress: {
      bold: "Object Cache",
      regular: "for WordPress",
      toolTip: null,
      status: false,
    },
    siteRacksExpertOptimized: {
      bold: "Expert Optimization",
      regular: "by SiteRacks",
      toolTip: null,
      status: true,
    },
    dedicatedResources: {
      bold: "Dedicated",
      regular: "Resources",
      toolTip: null,
      status: false,
    },
    wordPressMultisite: {
      bold: "WordPress",
      regular: "Multisite",
      toolTip: null,
      status: true,
    },

    WordPressStagingTool: {
      bold: "WordPress",
      regular: "Staging Tool",
      status: true,
    },
    emailAccounts: {
      bold: "Unlimited",
      regular: "Email Accounts",
      toolTip: null,
      status: true,
    },
    domain: {
      bold: "Free",
      regular: ".com Domain",
      toolTip: null,
      status: true,
    },
    scheduleTask: {
      bold: "Unlimited",
      regular: "CronJobs",
      status: true,
    },
    subDomains: {
      bold: "Unlimited",
      regular: "Subdomains",
      status: true,
    },
    unlimitedDatabase: {
      bold: "Unlimited",
      regular: "Database",
      status: true,
    },
    multiplePhpVersions: {
      bold: "Multiple",
      regular: "PHP Versions",
      toolTip: null,
      status: true,
    },
    wordpressTransfer: {
      bold: "Free",
      regular: "Migration",
      toolTip: null,
      status: true,
    },

    WordPressDebugging: {
      bold: "WordPress",
      regular: "Debugger",
      status: true,
    },

    WordPressNginxCaching: {
      bold: "Nginx",
      regular: "Cache",
      toolTip: null,
      status: true,
    },

    WordPressLogs: {
      bold: "WordPress",
      regular: "Logs",
      status: true,
    },

    googleAuth: {
      bold: "Built-in",
      regular: "Google Authentication",
      status: true,
    },
    folderProtection: {
      bold: "Folder",
      regular: "Protection",
      status: true,
    },
    DDoSProtection: {
      bold: "DDoS",
      regular: "Protection",
      status: true,
    },
    webApplicationFirewall: {
      bold: "Web Application",
      regular: "Firewall",
      status: true,
    },
    moneyBack: {
      bold: "30 Days",
      regular: "Money Back Guarantee",
      status: true,
    },
    logs: {
      bold: "Server",
      regular: "Logs",
      status: true,
    },
    addCollaborators: {
      bold: "Collaborators",
      regular: "Tools",
      toolTip: null,
      status: true,
    },
    dnsManagement: {
      bold: "DNS",
      regular: "Management",
      status: true,
    },
    sshAccess: {
      bold: "SSH",
      regular: "Access",
      status: true,
    },
    ftpAccess: {
      bold: "FTP",
      regular: "Access",
      status: true,
    },
    gitSupport: {
      bold: "GIT",
      regular: "Access",
      toolTip: null,
      status: true,
    },
    nodeJs: {
      bold: "NodeJS",
      regular: "Ready",
      status: true,
    },
    laravelTools: {
      bold: "Laravel",
      regular: "Toolkit",
      status: true,
    },
    apacheNginx: {
      bold: "Apache/Nginx",
      regular: "Support",
      status: true,
    },

    dedicatedIPAddress: {
      bold: "Dedicated",
      regular: "IP Address",
      status: false,
    },

    malwareScanner: {
      bold: "Malware",
      regular: "Scanner",
      status: true,
    },

    powerfulControlPanel: {
      bold: "Powerful",
      regular: "ControlPanel",
      toolTip: null,
      status: true,
    },
    freeWPInstallation: {
      bold: "Free ",
      regular: "1-Click WP Installation",
      status: true,
    },
    wpAutoUpdates: {
      bold: "Automatic",
      regular: "WordPress Updates",
      status: true,
    },
    ssl: {
      bold: "Free",
      regular: "SSL Certificate",
      toolTip: null,
      status: true,
    },
    nightlyBackup: {
      bold: "Free",
      regular: "Nightly Backups",
      toolTip: null,
      status: true,
    },
  },

  {
    _id: 3,
    title: "Ultimate Web Hosting",
    slug: "ultimateWebHosting",
    shortDescription: "Ideal package with upgraded server resources for multiple websites with a matching domain, free email, and free SSL, provided that the plan's terms are 12 months or longer.",
    description: "A",
    featured: false,
    additionalMonth: "+3 months FREE ",

    ...ultimateWebHosting,

    numberOfWebsites: {
      iconColor: "fill-primary",
      bold: "Unlimited",
      regular: "Websites",
      toolTip: null,
      status: true,
    },
    storage: {
      bold: "80 GB",
      regular: "NVMe Premium Storage",
      toolTip: null,
      status: true,
    },
    monthlyVisits: {
      iconColor: "fill-red-200",
      bold: "~ 100,000",
      regular: "Visits Monthly",
      toolTip: null,
      status: true,
    },
    bandwidth: {
      bold: "Unlimited",
      regular: "Bandwidth",
      toolTip: null,
      status: true,
    },

    cpuCores: {
      icon: LightCheckIcon,
      iconColor: "fill-red-200",
      bold: "1 CPU",
      regular: "Cores",
      status: true,
    },
    ram: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "2 GB",
      regular: "RAM",
      status: true,
    },
    wordpressDedicatedExpert: {
      bold: "Dedicated",
      regular: "WordPress Expert",
      toolTip: null,
      status: true,
    },
    wordPressAcceleration: {
      bold: "WordPress",
      regular: "Acceleration",
      status: true,
    },
    wordpressOptimized: {
      bold: "WordPress",
      regular: "Optimized Server",
      toolTip: null,
      status: false,
    },
    objectCacheforWordPress: {
      bold: "Object Cache",
      regular: "for WordPress",
      toolTip: null,
      status: true,
    },
    siteRacksExpertOptimized: {
      bold: "Expert Optimization",
      regular: "by SiteRacks",
      toolTip: null,
      status: true,
    },
    dedicatedResources: {
      bold: "Dedicated",
      regular: "Resources",
      toolTip: null,
      status: false,
    },
    wordPressMultisite: {
      bold: "WordPress",
      regular: "Multisite",
      toolTip: null,
      status: true,
    },

    WordPressStagingTool: {
      bold: "WordPress",
      regular: "Staging Tool",
      status: true,
    },
    emailAccounts: {
      bold: "Unlimited",
      regular: "Email Accounts",
      toolTip: null,
      status: true,
    },
    domain: {
      bold: "Free",
      regular: ".com Domain",
      toolTip: null,
      status: true,
    },
    scheduleTask: {
      bold: "Unlimited",
      regular: "CronJobs",
      status: true,
    },
    subDomains: {
      bold: "Unlimited",
      regular: "Subdomains",
      status: true,
    },
    unlimitedDatabase: {
      bold: "Unlimited",
      regular: "Database",
      status: true,
    },
    multiplePhpVersions: {
      bold: "Multiple",
      regular: "PHP Versions",
      toolTip: null,
      status: true,
    },
    wordpressTransfer: {
      bold: "Free",
      regular: "Migration",
      toolTip: null,
      status: true,
    },

    WordPressDebugging: {
      bold: "WordPress",
      regular: "Debugger",
      status: true,
    },

    WordPressNginxCaching: {
      bold: "Nginx",
      regular: "Cache",
      toolTip: null,
      status: true,
    },

    WordPressLogs: {
      bold: "WordPress",
      regular: "Logs",
      status: true,
    },

    googleAuth: {
      bold: "Built-in",
      regular: "Google Authentication",
      status: true,
    },
    folderProtection: {
      bold: "Folder",
      regular: "Protection",
      status: true,
    },
    DDoSProtection: {
      bold: "DDoS",
      regular: "Protection",
      status: true,
    },
    webApplicationFirewall: {
      bold: "Web Application",
      regular: "Firewall",
      status: true,
    },
    moneyBack: {
      bold: "30 Days",
      regular: "Money Back Guarantee",
      status: true,
    },
    logs: {
      bold: "Server",
      regular: "Logs",
      status: true,
    },
    addCollaborators: {
      bold: "Collaborators",
      regular: "Tools",
      toolTip: null,
      status: true,
    },
    dnsManagement: {
      bold: "DNS",
      regular: "Management",
      status: true,
    },
    sshAccess: {
      bold: "SSH",
      regular: "Access",
      status: true,
    },
    ftpAccess: {
      bold: "FTP",
      regular: "Access",
      status: true,
    },
    gitSupport: {
      bold: "GIT",
      regular: "Access",
      toolTip: null,
      status: true,
    },
    nodeJs: {
      bold: "NodeJS",
      regular: "Ready",
      status: true,
    },
    laravelTools: {
      bold: "Laravel",
      regular: "Toolkit",
      status: true,
    },
    apacheNginx: {
      bold: "Apache/Nginx",
      regular: "Support",
      status: true,
    },

    dedicatedIPAddress: {
      bold: "Dedicated",
      regular: "IP Address",
      status: false,
    },

    malwareScanner: {
      bold: "Malware",
      regular: "Scanner",
      status: true,
    },

    powerfulControlPanel: {
      bold: "Powerful",
      regular: "ControlPanel",
      toolTip: null,
      status: true,
    },
    freeWPInstallation: {
      bold: "Free ",
      regular: "1-Click WP Installation",
      status: true,
    },
    wpAutoUpdates: {
      bold: "Automatic",
      regular: "WordPress Updates",
      status: true,
    },
    ssl: {
      bold: "Free",
      regular: "SSL Certificate",
      toolTip: null,
      status: true,
    },
    nightlyBackup: {
      bold: "Free",
      regular: "Nightly Backups",
      toolTip: null,
      status: true,
    },
  },
];
