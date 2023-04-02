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
    interface IPackageFeatures {
        displayOrder?: number,
        topFeatured?: any,
        iconColor?: string | null,
        toolTip?: null | string,
        status?: boolean, bold?: string,
        regular?: string,
        lineBreak?: boolean,
        lineBreakTitle?: string | null
    }

    interface IPackages {
        monthlyPrice: number;
        annuallyPrice: number;
        bienniallyPrice: number;
        trienniallyPrice: number;
    }

    interface IProduct {
        _id: number;
        title?: string;
        slug?: string;
        shortDescription?: string;
        description?: string;
        featured?: boolean;
        additionalMonth?: string | boolean;

        productId?: number;
        promoCode?: string;
        additionalDiscount?: number;
        monthlyPrice: number;
        annuallyPrice: number;
        bienniallyPrice: number;
        trienniallyPrice: number;


    }

    // THIS IS THE PACKAGE / PRODUCT'S CHILD INTERFACE
    interface IProductPricingChildItems {
        typeSlug: string;
        productTitle: string;
        productDescription: string;
        productId: number;
        promoCode?: string;
        additionalDiscount?: number;
        monthlyPrice: number;
        annuallyPrice: number;
        bienniallyPrice: number;
        trienniallyPrice: number;
    }
    // THIS IS THE PACKAGE / PRODUCT MAIN INTERFACE
    interface IProductPricing {
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