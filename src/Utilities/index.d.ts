export { };

declare global {
    interface Window {
        recaptchaVerifier: {};
        confirmationResult: {};
    }
    interface IProductChildItems {
        icon: string;
        bold: string;
        regular: string;
        toolTip: string;
        status: boolean;
    }
    interface IProduct {
        _id: string;
        title: string;
        shortDescription: string;
        description: string;

        monthlyPrice: number;
        annuallyPrice: number;
        bienniallyPrice: number;
        trienniallyPrice: number;

        monthlyDiscountedPrice: number;
        annuallyDiscountedPrice: number;
        bienniallyDiscountedPrice: number;
        trienniallyDiscountedPrice: number;

        monthlyOrderLink: string;
        annuallyOrderLink: string;
        bienniallyOrderLink: string;
        trienniallyOrderLink: string;

        //  Top feature comparison 
        numberOfWebsites: string;
        storage: IProductChildItems;
        monthlyVisits: IProductChildItems;
        bandwidth: IProductChildItems;
        freeWPInstallation: IProductChildItems;
        wpAutoUpdates: IProductChildItems;
        ssl: IProductChildItems;
        nightlyBackup: IProductChildItems;
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