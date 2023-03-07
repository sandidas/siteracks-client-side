export { };

declare global {
    interface Window {
        recaptchaVerifier: {};
        confirmationResult: {};
    }
    interface IProductChildItems {
        icon: any;
        iconColor:string;
        bold: string;
        regular: string;
        toolTip: string;
        status: boolean;
    }
    interface IProductChildItemsPackages {
        regularPrice: number;
        discountedPrice: number;
        orderLink: string;
    }
    interface IProduct {
        _id: number;
        title: string;
        shortDescription: string;
        description: string;
        featured:boolean;

        monthlyPackage: IProductChildItemsPackages;
        annuallyPackage: IProductChildItemsPackages;
        bienniallyPackage: IProductChildItemsPackages;
        trienniallyPackage: IProductChildItemsPackages;


        //  Top feature comparison 
        numberOfWebsites: IProductChildItems;
        storage: IProductChildItems;
        monthlyVisits: IProductChildItems;
        bandwidth: IProductChildItems;
        freeWPInstallation: IProductChildItems;
        wpAutoUpdates: IProductChildItems;
        ssl: IProductChildItems;
        nightlyBackup: boolean;
        emailAccounts: IProductChildItems;
        domain: IProductChildItems;

        // additional Important features
        subDomains: IProductChildItems;
        cpuCores: IProductChildItems;
        ram: IProductChildItems;
        unlimitedDatabase: boolean;
        multiplePhpVersions: boolean;
        scheduleTask: boolean;

        // More WordPress Options 
        wordpressTransfer: IProductChildItems;
        wordpressDedicatedExpert: IProductChildItems;
        // additional Security features
        googleAuth: boolean;
        folderProtection: boolean;
        DDoSProtection: IProductChildItems;
        webApplicationFirewall: boolean;

        //  Service and Support 
        moneyBack: IProductChildItems;
        siteRacksExpertOptimized: boolean;
        logs: boolean;
        addCollaborators: IProductChildItems;
        dnsManagement: boolean;
        // More  Technical Features
        sshAccess: boolean;
        ftpAccess: boolean;
        gitSupport: boolean;
        nodeJs: boolean;
        laravelTools: boolean;
        apacheNginx: boolean;
        dedicatedIPAddress: boolean;
    }
}