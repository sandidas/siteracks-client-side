import CompleteCheckIcon from "../../../public/images/icons/CompleteCheckIcon.svg";
import NegativeCloseIcon from "../../../public/images/icons/NegativeCloseIcon.svg";
import LightCheckIcon from "../../../public/images/icons/LightCheckIcon.svg";

// tool tips
const storageTooltip =
  "Our servers are equipped with high-performance Non-Volatile Memory Express (NVMe) for both files and databases, ensuring lightning-fast loading times for your sites. The storage is allocated per plan, meaning that if you have multiple sites, the storage will be shared among them.";

const sslTooltip = "ssl";
const monthlyVisitsTooltip = "The following is an estimated approximation of the maximum number of website visits that can be accommodated by the hosting plan, assuming all the sites you host are utilizing our out-of-the-box caching as intended.";
const bandwidthTooltip = "As long as your plan adheres to our fair use guidelines, there are no restrictions on your data transfer. The site will not go down if the data transfer limit is over. You can switch higher plan easily.";
const domainTooltip = "ssl";
const nightlyBackupTooltip = "ssl";
const wordpressTransferTooltip = "ssl";
const multiplePhpVersionsTooltip = "ssl";
const emailAccountsTooltip = "ssl";
const wordpressDedicatedExpertTooltip = "ssl";
const siteRacksExpertOptimizedTooltip = "ssl";
const addCollaboratorsTooltip = "ssl";
const dedicatedResourcesTooltip = "ssl";
const wordPressMultisiteTooltip = "ssl";
const WordPressNginxCachingTooltip = "ssl";
const powerfulControlPanelTooltip = "ssl";
const wordpressOptimizedTooltip = "ssl";

export const webHosting = [
  {
    _id: 1,
    title: "Standard Web Hosting",
    slug: "standardWebHosting",
    shortDescription: "Ideal solution for beginners",
    description: "A",
    featured: false,
    additionalMonth: "+3 months FREE ",

    monthlyPackage: {
      regularPrice: 9.1,
      discountedPrice: 10,
      orderLink: "monthlyOrderLink",
    },

    annuallyPackage: {
      regularPrice: 93.6,
      discountedPrice: 10,
      orderLink: "Annual order",
    },

    bienniallyPackage: {
      regularPrice: 151.2,
      discountedPrice: 10,
      orderLink: "binally order",
    },

    trienniallyPackage: {
      regularPrice: 198,
      discountedPrice: 10,
      orderLink: "https://www.google.com/",
    },

    numberOfWebsites: {
      iconColor: "fill-primary",
      bold: "2",
      regular: "Websites",
      toolTip: false,
      status: true,
    },
    storage: {
      iconColor: "fill-red-200",
      bold: "10 GB",
      regular: "NVMe Premium Storage",
      toolTip: storageTooltip,
      status: true,
    },
    monthlyVisits: {
      iconColor: "fill-red-200",
      bold: "~ 100,000",
      regular: "Visits Monthly",
      toolTip: monthlyVisitsTooltip,
      status: true,
    },
    bandwidth: {
      iconColor: "fill-red-200",
      bold: "100 GB ",
      regular: "Bandwidth",
      toolTip: bandwidthTooltip,
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
      toolTip: sslTooltip,
      status: true,
    },
    nightlyBackup: {
      bold: "Free",
      regular: "Nightly Backups",
      toolTip: nightlyBackupTooltip,
      status: true,
    },
    emailAccounts: {
      bold: "Unlimited",
      regular: "Email Accounts",
      toolTip: emailAccountsTooltip,
      status: true,
    },
    domain: {
      bold: "Free",
      regular: ".com Domain",
      toolTip: domainTooltip,
      status: false,
    },
    subDomains: {
      bold: "Unlimited",
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
    unlimitedDatabase: {
      bold: "Unlimited",
      regular: "Database",
      status: true,
    },
    multiplePhpVersions: {
      bold: "Multiple",
      regular: "PHP Versions",
      toolTip: multiplePhpVersionsTooltip,
      status: true,
    },
    scheduleTask: {
      bold: "2",
      regular: "CronJobs",
      status: true,
    },
    wordpressTransfer: {
      bold: "Free",
      regular: "Migration",
      toolTip: wordpressTransferTooltip,
      status: true,
    },
    wordpressDedicatedExpert: {
      bold: "Dedicated",
      regular: "WordPress Expert",
      toolTip: wordpressDedicatedExpertTooltip,
      status: false,
    },
    wordPressAcceleration: {
      bold: "Free",
      regular: "Migration",
      toolTip: wordpressTransferTooltip,
      status: true,
    },
    objectCacheforWordPress: {
      bold: "Free",
      regular: "Migration",
      toolTip: wordpressTransferTooltip,
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
    siteRacksExpertOptimized: {
      bold: "Expert Optimization",
      regular: "by SiteRacks",
      toolTip: siteRacksExpertOptimizedTooltip,
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
      toolTip: addCollaboratorsTooltip,
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
      toolTip: "A",
      status: true,
    },
    nodeJs: {
      bold: "NodeJS",
      regular: "Ready to us",
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
      toolTip: dedicatedResourcesTooltip,
      status: false,
    },

    wordPressMultisite: {
      bold: "WordPress",
      regular: "Multisite",
      toolTip: wordPressMultisiteTooltip,
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
      toolTip: WordPressNginxCachingTooltip,
      status: true,
    },

    WordPressLogs: {
      bold: "WordPress",
      regular: "Logs",
      status: true,
    },

    malwareScanner: {
      bold: "Malware",
      regular: "Scanner",
      status: true,
    },

    powerfulControlPanel: {
      bold: "Powerful",
      regular: "ControlPanel",
      toolTip: powerfulControlPanelTooltip,
      status: true,
    },
    wordpressOptimized: {
      bold: "WordPress",
      regular: "Optimized Server",
      toolTip: wordpressOptimizedTooltip,
      status: false,
    },
  },
];
