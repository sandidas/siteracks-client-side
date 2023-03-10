import CompleteCheckIcon from "../../../public/images/icons/CompleteCheckIcon.svg";
import NegativeCloseIcon from "../../../public/images/icons/NegativeCloseIcon.svg";
import LightCheckIcon from "../../../public/images/icons/LightCheckIcon.svg";

import {
  addCollaboratorsTooltip,
  bandwidthTooltip,
  dedicatedResourcesTooltip,
  domainTooltip,
  emailAccountsTooltip,
  monthlyVisitsTooltip,
  multiplePhpVersionsTooltip,
  nightlyBackupTooltip,
  powerfulControlPanelTooltip,
  siteRacksExpertOptimizedTooltip,
  sslTooltip,
  storageTooltip,
  wordpressDedicatedExpertTooltip,
  wordPressMultisiteTooltip,
  WordPressNginxCachingTooltip,
  wordpressOptimizedTooltip,
  wordpressTransferTooltip,
} from "./ProductDataWebHosting";

import { findServiceByNameAndType } from "../Hooks/ApiCall";

const startUpResellerHosting: IPackages | any = findServiceByNameAndType("resellerHosting", "startUpResellerHosting");
const enhanceResellerHosting: IPackages | any = findServiceByNameAndType("resellerHosting", "enhanceResellerHosting");
const growBigResellerHosting: IPackages | any = findServiceByNameAndType("resellerHosting", "growBigResellerHosting");
const expandResellerHosting: IPackages | any = findServiceByNameAndType("resellerHosting", "expandResellerHosting");

export const resellerHostingData = [
  {
    ...startUpResellerHosting,
    _id: 1,
    title: "StartUp Reseller Hosting",
    slug: "startUpResellerHosting",
    shortDescription: "A great package to launch your hosting business by hosting your client websites.",
    description: "A",
    featured: false,
    additionalMonth: "",

    clientAccount: {
      iconColor: "fill-red-200",
      bold: "50",
      regular: "Client Accounts",
      toolTip: false,
      status: true,
    },
    freeWhmcs: {
      iconColor: "fill-primary",
      bold: "Free",
      regular: "WHMCS",
      toolTip: false,
      status: false,
    },
    numberOfWebsites: {
      iconColor: "fill-primary",
      bold: "Unlimited",
      regular: "Websites",
      toolTip: false,
      status: true,
    },
    storage: {
      iconColor: "fill-green-200",
      bold: "60 GB",
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
      bold: "1 TB",
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
      status: true,
    },
    subDomains: {
      iconColor: "fill-red-200",
      bold: "Unlimited",
      regular: "Subdomains",
      status: true,
    },
    cpuCores: {
      icon: LightCheckIcon,
      iconColor: "fill-red-200",
      bold: "1 CPU",
      regular: "Core",
      status: true,
    },
    ram: {
      icon: LightCheckIcon,
      iconColor: "fill-green-200",
      bold: "2 GB",
      regular: "RAM",
      status: true,
    },

    scheduleTask: {
      iconColor: "fill-red-200",
      bold: "Unlimited",
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
      bold: "WordPress",
      regular: "Acceleration",
      status: true,
    },

    wordPressMultisite: {
      bold: "WordPress",
      regular: "Multisite",
      toolTip: wordPressMultisiteTooltip,
      status: true,
    },

    WordPressStagingTool: {
      bold: "WordPress",
      regular: "Staging Tool",
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
      toolTip: WordPressNginxCachingTooltip,
      status: true,
    },

    WordPressLogs: {
      bold: "WordPress",
      regular: "Logs",
      status: true,
    },
    wordpressOptimized: {
      bold: "WordPress",
      regular: "Optimized",
      toolTip: wordpressOptimizedTooltip,
      status: false,
    },
    objectCacheforWordPress: {
      bold: "Object Cache",
      regular: "for WordPress",
      toolTip: wordpressTransferTooltip,
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
      bold: "Unlimited",
      regular: "Databases",
      status: true,
    },
    multiplePhpVersions: {
      bold: "Multiple",
      regular: "PHP Versions",
      toolTip: multiplePhpVersionsTooltip,
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
      toolTip: addCollaboratorsTooltip,
      status: false,
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
      toolTip: dedicatedResourcesTooltip,
      status: false,
    },
    malwareScanner: {
      bold: "Malware",
      regular: "Scanner",
      status: true,
    },

    powerfulControlPanel: {
      bold: "Powerful",
      regular: "Plesk Control Panel",
      toolTip: powerfulControlPanelTooltip,
      status: true,
    },
  },
  {
    _id: 2,
    title: "Enhance Reseller Hosting",
    slug: "enhanceResellerHosting",
    shortDescription: "Get the power to create and manage websites with Free WHMCS",
    description: "A",
    featured: false,
    additionalMonth: "+3 months FREE ",

    ...enhanceResellerHosting,

    clientAccount: {
      iconColor: "fill-green-200",
      bold: "70",
      regular: "Client Accounts",
      toolTip: false,
      status: true,
    },
    freeWhmcs: {
      bold: "Free",
      regular: "WHMCS",
      toolTip: false,
      status: true,
    },
    numberOfWebsites: {
      iconColor: "fill-primary",
      bold: "Unlimited",
      regular: "Websites",
      toolTip: false,
      status: true,
    },
    storage: {
      iconColor: "fill-green-200",
      bold: "80 GB",
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
      iconColor: "fill-green-200",
      bold: "2 TB",
      regular: "Bandwidth",
      toolTip: bandwidthTooltip,
      status: true,
    },

    cpuCores: {
      icon: LightCheckIcon,
      iconColor: "fill-red-200",
      bold: "1 CPU",
      regular: "Core",
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
      toolTip: wordpressDedicatedExpertTooltip,
      status: false,
    },
    wordPressAcceleration: {
      bold: "WordPress",
      regular: "Acceleration",
      status: true,
    },
    wordpressOptimized: {
      bold: "WordPress",
      regular: "Optimized",
      toolTip: wordpressOptimizedTooltip,
      status: true,
    },
    objectCacheforWordPress: {
      bold: "Object Cache",
      regular: "for WordPress",
      toolTip: wordpressTransferTooltip,
      status: true,
    },
    siteRacksExpertOptimized: {
      bold: "Expert Optimization",
      regular: "by SiteRacks",
      toolTip: siteRacksExpertOptimizedTooltip,
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
      bold: "WordPress",
      regular: "Staging Tool",
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
      toolTip: multiplePhpVersionsTooltip,
      status: true,
    },
    wordpressTransfer: {
      bold: "Free",
      regular: "Migration",
      toolTip: wordpressTransferTooltip,
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
      toolTip: WordPressNginxCachingTooltip,
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
      regular: "Plesk Control Panel",
      toolTip: powerfulControlPanelTooltip,
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
  },
  {
    _id: 3,
    title: "GrowBig Reseller Hosting",
    slug: "growBigResellerHosting",
    shortDescription: "Unlock unlimited earning potential by upgrading your hosting resource.",
    description: "A",
    featured: true,
    additionalMonth: "+3 months FREE ",

    ...growBigResellerHosting,

    clientAccount: {
      bold: "110",
      regular: "Client Accounts",
      toolTip: false,
      status: true,
    },
    freeWhmcs: {
      bold: "Free",
      regular: "WHMCS",
      toolTip: false,
      status: true,
    },

    numberOfWebsites: {
      iconColor: "fill-primary",
      bold: "Unlimited",
      regular: "Websites",
      toolTip: false,
      status: true,
    },
    storage: {
      iconColor: "fill-green-300",
      bold: "150 GB",
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
      bold: "Unlimited",
      regular: "Bandwidth",
      toolTip: bandwidthTooltip,
      status: true,
    },

    cpuCores: {
      bold: "2 CPU",
      regular: "Cores",
      status: true,
    },
    ram: {
      bold: "4 GB",
      regular: "RAM",
      status: true,
    },
    wordpressDedicatedExpert: {
      bold: "Dedicated",
      regular: "WordPress Expert",
      toolTip: wordpressDedicatedExpertTooltip,
      status: true,
    },
    wordPressAcceleration: {
      bold: "WordPress",
      regular: "Acceleration",
      status: true,
    },
    wordpressOptimized: {
      bold: "WordPress",
      regular: "Optimized",
      toolTip: wordpressOptimizedTooltip,
      status: true,
    },
    objectCacheforWordPress: {
      bold: "Object Cache",
      regular: "for WordPress",
      toolTip: wordpressTransferTooltip,
      status: true,
    },
    siteRacksExpertOptimized: {
      bold: "Expert Optimization",
      regular: "by SiteRacks",
      toolTip: siteRacksExpertOptimizedTooltip,
      status: true,
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
      bold: "WordPress",
      regular: "Staging Tool",
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
      toolTip: multiplePhpVersionsTooltip,
      status: true,
    },
    wordpressTransfer: {
      bold: "Free",
      regular: "Migration",
      toolTip: wordpressTransferTooltip,
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
      toolTip: WordPressNginxCachingTooltip,
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
      regular: "Plesk Control Panel",
      toolTip: powerfulControlPanelTooltip,
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
  },
  {
    _id: 4,
    title: "Expand Reseller Hosting",
    slug: "expandResellerHosting",
    shortDescription: "Expand your reseller hosting business to the next level.",
    description: "A",
    featured: false,
    additionalMonth: "+3 months FREE ",

    ...expandResellerHosting,

    numberOfWebsites: {
      iconColor: "fill-primary",
      bold: "Unlimited",
      regular: "Websites",
      toolTip: false,
      status: true,
    },
    clientAccount: {
      iconColor: "fill-primary",
      bold: "160",
      regular: "Client Accounts",
      toolTip: false,
      status: true,
    },
    freeWhmcs: {
      bold: "Free",
      regular: "Whmcs",
      toolTip: false,
      status: true,
    },

    storage: {
      bold: "200 GB",
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
      bold: "Unlimited",
      regular: "Bandwidth",
      toolTip: bandwidthTooltip,
      status: true,
    },

    cpuCores: {
      bold: "2 CPU",
      regular: "Cores",
      status: true,
    },
    ram: {
      bold: "4 GB",
      regular: "RAM",
      status: true,
    },
    wordpressDedicatedExpert: {
      bold: "Dedicated",
      regular: "WordPress Expert",
      toolTip: wordpressDedicatedExpertTooltip,
      status: true,
    },
    wordPressAcceleration: {
      bold: "WordPress",
      regular: "Acceleration",
      status: true,
    },
    wordpressOptimized: {
      bold: "WordPress",
      regular: "Optimized",
      toolTip: wordpressOptimizedTooltip,
      status: true,
    },
    objectCacheforWordPress: {
      bold: "Object Cache",
      regular: "for WordPress",
      toolTip: wordpressTransferTooltip,
      status: true,
    },
    siteRacksExpertOptimized: {
      bold: "Expert Optimization",
      regular: "by SiteRacks",
      toolTip: siteRacksExpertOptimizedTooltip,
      status: true,
    },
    dedicatedResources: {
      bold: "Dedicated",
      regular: "Resources",
      toolTip: dedicatedResourcesTooltip,
      status: true,
    },
    wordPressMultisite: {
      bold: "WordPress",
      regular: "Multisite",
      toolTip: wordPressMultisiteTooltip,
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
      toolTip: emailAccountsTooltip,
      status: true,
    },
    domain: {
      bold: "Free",
      regular: ".com Domain",
      toolTip: domainTooltip,
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
      toolTip: multiplePhpVersionsTooltip,
      status: true,
    },
    wordpressTransfer: {
      bold: "Free",
      regular: "Migration",
      toolTip: wordpressTransferTooltip,
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
      toolTip: WordPressNginxCachingTooltip,
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
      regular: "Plesk Control Panel",
      toolTip: powerfulControlPanelTooltip,
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
  },
];
