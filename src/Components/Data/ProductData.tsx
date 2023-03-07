import CompleteCheckIcon from "../../../public/images/icons/CompleteCheckIcon.svg";
import NegativeCloseIcon from "../../../public/images/icons/NegativeCloseIcon.svg";
import LightCheckIcon from "../../../public/images/icons/LightCheckIcon.svg";

// tool tips
const storageTooltip =
  "Our servers are equipped with high-performance Non-Volatile Memory Express (NVMe) for both files and databases, ensuring lightning-fast loading times for your sites. The storage is allocated per plan, meaning that if you have multiple sites, the storage will be shared among them.";

const sslTooltip = "ssl";
const monthlyVisitsTooltip = "ssl";
const bandwidthTooltip = "ssl";
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

export const webHosting = [
  {
    _id: 1,
    title: "WordPress Standard",
    slug: "wordPressStandard",
    shortDescription: "Ideal solution for beginners",
    description: "A",
    featured: true,

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
      iconColor: "fill-green-200",
      bold: "10 GB",
      regular: "NVMe Premium Storage",
      toolTip: storageTooltip,
      status: true,
    },
    monthlyVisits: {
      iconColor: "fill-green-200",
      bold: "~ 100,000",
      regular: "Visits Monthly",
      toolTip: "The following is an estimated approximation of the maximum number of website visits that can be accommodated by the hosting plan, assuming all the sites you host are utilizing our out-of-the-box caching as intended.",
      status: true,
    },
    bandwidth: {
      iconColor: "fill-green-200",
      bold: "100 GB ",
      regular: "Bandwidth",
      toolTip: "As long as your plan adheres to our fair use guidelines, there are no restrictions on your data transfer. The site will not go down if the data transfer limit is over. You can switch higher plan easily.",
      status: true,
    },
    freeWPInstallation: {
      bold: "Free ",
      regular: "WP Installation",
      status: true,
    },
    wpAutoUpdates: {
      bold: "WordPress",
      regular: "Autoupdates",
      status: true,
    },
    ssl: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    nightlyBackup: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    emailAccounts: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    domain: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    subDomains: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    cpuCores: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    ram: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    unlimitedDatabase: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    multiplePhpVersions: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    scheduleTask: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    wordpressTransfer: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    wordpressDedicatedExpert: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    googleAuth: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    folderProtection: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    DDoSProtection: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    webApplicationFirewall: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    moneyBack: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    siteRacksExpertOptimized: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    logs: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    addCollaborators: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    dnsManagement: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    sshAccess: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    ftpAccess: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    gitSupport: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    nodeJs: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    laravelTools: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
    apacheNginx: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },

    dedicatedIPAddress: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },

    dedicatedResources: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },

    wordPressMultisite: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },

    WordPressStagingTool: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },

    WordPressDebugging: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },

    WordPressNginxCaching: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },

    WordPressLogs: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },

    malwareScanner: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },

    powerfulControlPanel: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "~",
      regular: "A",
      toolTip: "A",
      status: true,
    },
  },
];
