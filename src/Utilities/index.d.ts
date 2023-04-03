export { };

declare global {
    declare const Tawk_API: any; // this is for Tawk_API 
    interface Window {
        Tawk_API: any;
    }
    interface Window {
        recaptchaVerifier: {};
        confirmationResult: {};
    }

    // THIS IS FEATURES FOR EVERY PACKAGE. EX. MONTHLY, YEARLY, etc.
    interface IProductPackageFeatures {
        displayOrder?: number,
        topFeatured?: boolean,
        iconColor?: string | null,
        toolTip?: null | string,
        status?: boolean,
        bold?: string,
        regular?: string,
        lineBreak?: boolean,
        lineBreakTitle?: string | null
        tableTitle?: string | null
        tableDescription?: string | null
    }
    // THIS IS THE PACKAGE / PRODUCT'S CHILD INTERFACE
    interface IProductPackage {
        typeSlug?: string;
        productTitle?: string;
        productDescription?: string;
        productId: number;
        featured?: boolean;
        additionalMonths?: string;
        promoCode?: string;
        additionalDiscount?: number;
        monthlyPrice: number;
        annuallyPrice: number;
        bienniallyPrice: number;
        trienniallyPrice: number;
        features: [IProductPackageFeatures]
    }
    // THIS IS THE PACKAGE / PRODUCT MAIN INTERFACE
    interface IProduct {
        _id?: string;
        nameSlug?: string;
        preTitle?: string;
        title?: string;
        shortDescription?: string;
        customBGClassName?: string;
        customIconClassName?: string;
        customTitleClassName?: string;
        customTextClassName?: string;
        customPriceCLassName?: string;
        icon?: string;
        seePlansLink?: string;
        packages: [IProductPackage];

    }
    // getPriceForBanner API Call
    interface IGetPriceForBanner {
        serviceName: string;
        serviceType: string;
    }
}