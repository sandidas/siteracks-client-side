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
        additionalDiscount: number;
        orderLink: string;
    }
    interface IPackages {
        monthlyPackage: IProductChildItemsPackages;
        annuallyPackage: IProductChildItemsPackages;
        bienniallyPackage: IProductChildItemsPackages;
        trienniallyPackage: IProductChildItemsPackages;
    }

    interface IProduct {
        _id: number;
        title?: string;
        slug?: string;
        shortDescription?: string;
        description?: string;
        featured?: boolean;
        additionalMonth?: string | boolean;

        monthlyPackage: IProductChildItemsPackages;
        annuallyPackage: IProductChildItemsPackages;
        bienniallyPackage: IProductChildItemsPackages;
        trienniallyPackage: IProductChildItemsPackages;


        //  Top feature comparison 
        numberOfWebsites: IProductChildItems;
        storage: IProductChildItems;
        bandwidth: IProductChildItems;
        freeWPInstallation: IProductChildItems;
        wordpressOptimized: IProductChildItems;

        wpAutoUpdates: IProductChildItems;
        ssl: IProductChildItems;
        nightlyBackup: IProductChildItems;
        emailAccounts: IProductChildItems;
        domain: IProductChildItems;

        // managed vps features
        preInstalledOS?: IProductChildItems;
        preInstalledCP?: IProductChildItems;
        integratedFirewall?: IProductChildItems;
        rootAccess?: IProductChildItems;
        fullyManaged?: IProductChildItems;

        // reseller hosting features

        clientAccount?: IProductChildItems;
        freeWhmcs?: IProductChildItems;



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
        wordPressAcceleration: IProductChildItems;
        objectCacheforWordPress: IProductChildItems;
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

    // Product Pricing Options
    interface IProductPricingChildItems {
        typeSlug: string;
        monthlyPackage: IProductChildItemsPackages;
        annuallyPackage: IProductChildItemsPackages;
        bienniallyPackage: IProductChildItemsPackages;
        trienniallyPackage: IProductChildItemsPackages;
    }
    interface IProductPricing {
        nameSlug?: string;
        preTitle?: string | undefined | boolean;
        title?: string;
        shortDescription?: string;
        customBGClassName?: string;
        customIconClassName?: string;
        customTitleClassName?: string;
        customTextClassName?: string;
        customPriceCLassName?: string;
        icon?: string;
        featured?: boolean;
        seePlansLink?: string;
        child: IProductPricingChildItems[];
    }

    // getPriceForBanner API Call
    interface IGetPriceForBanner {
        serviceName: string;
        serviceType: string;
    }
}