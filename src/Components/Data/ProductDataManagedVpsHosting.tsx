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
import { productPricingData } from "./ProductPricing";

const startUpManagedVPSHosting: IPackages | any = productPricingData[3].managedVpsHosting?.child?.startUpManagedVPSHosting;
const enhanceManagedVPSHosting: IPackages | any = productPricingData[3].managedVpsHosting?.child?.enhanceManagedVPSHosting;
const growBigManagedVPSHosting: IPackages | any = productPricingData[3].managedVpsHosting?.child?.growBigManagedVPSHosting;
const expandManagedVPSHosting: IPackages | any = productPricingData[3].managedVpsHosting?.child?.expandManagedVPSHosting;

export const managedVPSHostingData = [
  {
    ...startUpManagedVPSHosting,
    _id: 1,
    title: "StartUp - pre-Managed VPS",
    slug: "startUpPreManagedVpsHosting",
    shortDescription: "A perfect way to launch Web App, WordPress, Custom CMS, and other sites.",
    description: "A",
    featured: false,
    additionalMonth: "+2 months FREE ",

    preInstalledOS: {
      bold: "Ready",
      regular: "OS (Ubuntu/CentOS)",
      toolTip: false,
      status: true,
    },

    preInstalledCP: {
      bold: "Ready",
      regular: "Control Panel (cPanel/Plesk)",
      toolTip: false,
      status: true,
    },

    integratedFirewall: {
      bold: "Firewall",
      regular: "Integrated",
      toolTip: false,
      status: true,
    },
    rootAccess: {
      bold: "No",
      regular: "Root Access (Self-management)",
      toolTip: false,
      status: true,
    },

    fullyManaged: {
      bold: "100%",
      regular: "Fully Managed",
      toolTip: false,
      status: true,
    },

    numberOfWebsites: {
      bold: "Unlimited",
      regular: "Websites",
      toolTip: false,
      status: true,
    },
    storage: {
      iconColor: "fill-green-200",
      bold: "20 GB",
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
      iconColor: "fill-red-200",
      bold: "2 GB",
      regular: "RAM",
      status: true,
    },

    scheduleTask: {
      bold: "Unlimted",
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
      status: true,
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
      regular: "Optimized Server",
      toolTip: wordpressOptimizedTooltip,
      status: true,
    },
    objectCacheforWordPress: {
      bold: "Object Cache",
      regular: "for WordPress",
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

    dedicatedResources: {
      bold: "Dedicated",
      regular: "Resources",
      toolTip: dedicatedResourcesTooltip,
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
  },
  {
    ...enhanceManagedVPSHosting,
    _id: 2,
    title: "Enhance - pre-Managed VPS",
    slug: "enhanceManagedVPSHosting",
    shortDescription: "Enhance your server resources to increase visitors' experience.",
    description: "A",
    featured: false,
    additionalMonth: "+2 months FREE ",
    numberOfWebsites: {
      bold: "Unlimited",
      regular: "Websites",
      toolTip: false,
      status: true,
    },
    storage: {
      iconColor: "fill-green-200",
      bold: "40 GB",
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

    preInstalledOS: {
      bold: "Ready",
      regular: "OS (Ubuntu/CentOS)",
      toolTip: false,
      status: true,
    },

    preInstalledCP: {
      bold: "Ready",
      regular: "Control Panel (cPanel/Plesk)",
      toolTip: false,
      status: true,
    },

    integratedFirewall: {
      bold: "Firewall",
      regular: "Integrated",
      toolTip: false,
      status: true,
    },
    rootAccess: {
      bold: "No",
      regular: "Root Access (Self-management)",
      toolTip: false,
      status: true,
    },

    fullyManaged: {
      bold: "100%",
      regular: "Fully Managed",
      toolTip: false,
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
      bold: "Unlimited",
      regular: "Subdomains",
      status: true,
    },
    cpuCores: {
      icon: LightCheckIcon,
      iconColor: "fill-red-200",
      bold: "2 CPU",
      regular: "Cores",
      status: true,
    },
    ram: {
      bold: "4 GB",
      regular: "RAM",
      status: true,
    },

    scheduleTask: {
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
      status: true,
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
      regular: "Optimized Server",
      toolTip: wordpressOptimizedTooltip,
      status: true,
    },
    objectCacheforWordPress: {
      bold: "Object Cache",
      regular: "for WordPress",
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

    dedicatedResources: {
      bold: "Dedicated",
      regular: "Resources",
      toolTip: dedicatedResourcesTooltip,
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
  },
  {
    _id: 3,
    title: "GrowBig - pre-Managed VPS",
    slug: "growBigManagedVPSHosting",
    shortDescription: "GrowBig your site with limitless visitors, traffic, and bandwidth.",
    description: "A",
    featured: true,
    additionalMonth: "+3 months FREE ",

    ...growBigManagedVPSHosting,

    numberOfWebsites: {
      bold: "Unlimited",
      regular: "Websites",
      toolTip: false,
      status: true,
    },
    storage: {
      bold: "100 GB",
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
      iconColor: "fill-green-200",
      bold: "2 CPU",
      regular: "Cores",
      status: true,
    },
    ram: {
      bold: "6 GB",
      regular: "RAM",
      status: true,
    },
    preInstalledOS: {
      bold: "Ready",
      regular: "OS (Ubuntu/CentOS)",
      toolTip: false,
      status: true,
    },

    preInstalledCP: {
      bold: "Ready",
      regular: "Control Panel (cPanel/Plesk)",
      toolTip: false,
      status: true,
    },

    integratedFirewall: {
      bold: "Firewall",
      regular: "Integrated",
      toolTip: false,
      status: true,
    },
    rootAccess: {
      bold: "No",
      regular: "Root Access (Self-management)",
      toolTip: false,
      status: true,
    },

    fullyManaged: {
      bold: "100%",
      regular: "Fully Managed",
      toolTip: false,
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
      regular: "Optimized Server",
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
      regular: "ControlPanel",
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
    title: "Expend - pre-Managed VPS",
    slug: "expandManagedVPSHosting",
    shortDescription: "Expand your business empire with a higher level of server resources.",
    description: "A",
    featured: false,
    additionalMonth: "+3 months FREE ",

    ...expandManagedVPSHosting,

    numberOfWebsites: {
      bold: "Unlimited",
      regular: "Websites",
      toolTip: false,
      status: true,
    },
    storage: {
      bold: "160 GB",
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
      bold: "4 CPU",
      regular: "Cores",
      status: true,
    },
    ram: {
      bold: "6 GB",
      regular: "RAM",
      status: true,
    },

    preInstalledOS: {
      bold: "Ready",
      regular: "OS (Ubuntu/CentOS)",
      toolTip: false,
      status: true,
    },

    preInstalledCP: {
      bold: "Ready",
      regular: "Control Panel (cPanel/Plesk)",
      toolTip: false,
      status: true,
    },

    integratedFirewall: {
      bold: "Firewall",
      regular: "Integrated",
      toolTip: false,
      status: true,
    },
    rootAccess: {
      bold: "No",
      regular: "Root Access (Self-management)",
      toolTip: false,
      status: true,
    },

    fullyManaged: {
      bold: "100%",
      regular: "Fully Managed",
      toolTip: false,
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
      regular: "Optimized Server",
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
      regular: "ControlPanel",
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
