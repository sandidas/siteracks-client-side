export { };

declare global {
    interface Window {
        recaptchaVerifier: {};
        confirmationResult: {};
    }
    interface IProductChildItems {
        icon?: any;
        iconColor?: string;
        bold?: string;
        regular?: string;
        toolTip?: string | boolean;
        status?: boolean;
    }
    interface IProductChildItemsPackages {
        regularPrice: number;
        discountedPrice: number;
        orderLink: string;
    }
    interface IProduct {
        _id: number;
        title: string;
        slug: string;
        shortDescription: string;
        description: string;
        featured: boolean;

        monthlyPackage: IProductChildItemsPackages;
        annuallyPackage: IProductChildItemsPackages;
        bienniallyPackage: IProductChildItemsPackages;
        trienniallyPackage: IProductChildItemsPackages;


        //  Top feature comparison 
        numberOfWebsites: IProductChildItems;
        storage: IProductChildItems;
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
        dedicatedResources: IProductChildItems;
        ram: IProductChildItems;
        unlimitedDatabase: IProductChildItems;
        multiplePhpVersions: IProductChildItems;
        scheduleTask: IProductChildItems;

        // More WordPress Options 
        wordpressTransfer: IProductChildItems;
        wordpressDedicatedExpert: IProductChildItems;
        wordPressMultisite: IProductChildItems;
        WordPressStagingTool: IProductChildItems;
        WordPressDebugging: IProductChildItems;
        WordPressNginxCaching: IProductChildItems;
        WordPressLogs: IProductChildItems;
        // additional Security features
        malwareScanner: IProductChildItems;
        googleAuth: IProductChildItems;
        folderProtection: IProductChildItems;
        DDoSProtection: IProductChildItems;
        webApplicationFirewall: IProductChildItems;

        //  Service and Support 
        moneyBack: IProductChildItems;
        siteRacksExpertOptimized: IProductChildItems;
        logs: IProductChildItems;
        addCollaborators: IProductChildItems;
        dnsManagement: IProductChildItems;
        // More  Technical Features
        sshAccess: IProductChildItems;
        ftpAccess: IProductChildItems;
        gitSupport: IProductChildItems;
        nodeJs: IProductChildItems;
        laravelTools: IProductChildItems;
        apacheNginx: IProductChildItems;
        dedicatedIPAddress: IProductChildItems;
        monthlyVisits: IProductChildItems;
        powerfulControlPanel: IProductChildItems;
    }
}