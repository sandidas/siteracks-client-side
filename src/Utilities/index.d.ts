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
        typeSlug: string;
        productTitle?: string;
        productDescription?: string;
        productId: number;
        featured?: boolean;

        additionalMonths?: string;
        promoCode?: string;
        additionalDiscount: number;


        additionalMonths2YearsPackage?: string;
        promoCode2YearsPackage?: string;
        additionalDiscount2YearsPackage: number;

        additionalMonths3YearsPackage?: string;
        promoCode3YearsPackage?: string;
        additionalDiscount3YearsPackage: number;


        monthlyPrice: number;
        annuallyPrice: number;
        bienniallyPrice: number;
        trienniallyPrice: number;
        features: [IProductPackageFeatures]
    }
    // THIS IS THE PACKAGE / PRODUCT MAIN INTERFACE
    interface IProduct {
        _id?: string;
        nameSlug: string;
        preTitle?: string;
        title?: string;
        shortDescription?: string;
        customBGClassName?: string;
        customIconClassName?: string;
        customTitleClassName?: string;
        customTextClassName?: string;
        customPriceCLassName?: string;
        icon?: string;
        order?: number;
        seePlansLink?: string;
        packages: [IProductPackage];

    }
    // getPriceForBanner API Call
    interface IGetPriceForBanner {
        serviceName: string;
        serviceType: string;
    }
    // SEO DATA
    interface IHeadData {
        _id?: string;
        siteName?: string;
        pageSlug?: string;
        pageTitle?: string;
        metaDescription: string;
        metaKeywords: string;
        metaAuthor: string;
        metaOgDescription: string;
        metaOgImage?: string;
        metaOgTitle?: string;
        metaOgUrl?: string;
        shareTitle?: string;
        // add more properties as needed
    };

    // =================== 
    //  PAGE INTERFACE GLOBAL
    // =================== 

    interface IPage {
        _id?: string;
        pageTitle: string | null | undefined;
        pageSlug?: string;
        featuredImage?: string;
        pageContent?: string;
        status?: boolean;
        lastUpdateBy?: {
            userName: string,
            userEmail: string,
            userId: string,
        };
    }

    // = = = = = = = = = = 
    // BLOG INTERFACE
    // = = = = = = = = = = 
    interface ICategory {
        title: string;
        slug: string;
    }

    interface IReaction {
        author: string;
        authorName?: string;
    }

    interface IBlogAnswer {
        _id: string;
        text: string;
        author: string; // Schema.Types.ObjectId;
        authorName: string;
        authorImage: string;
        authorRoles: number[];
        votes: number;
        reactions: {
            likes: IReaction[];
            dislikes: IReaction[];
        };
        createdAt: Date;
    }

    // = = = = = = = = = = 
    // IMAGES
    // = = = = = = = = = = 
    interface IImage {
        _id: string;
        source?: string;// this is related
        filename: string;
        fileUrl: string;
        fileUrl_medium: string;
        fileUrl_small: string;
        referenceId: string;
        referenceType: string;
        createdAt?: Date;
        updatedAt?: Date;
    }


    interface IBlog {
        _id: string;
        subject: string;
        slug: string;
        text: string;
        categories: string[];
        status: boolean; // close or active
        softDelete: boolean;
        author: Schema.Types.ObjectId;
        authorName: string;
        authorImage: string;
        authorRoles: number[];
        tags: string[];
        allowedAnswers: boolean;
        isAuthorAllowedToEdit: boolean;
        lastUpdateBy: {
            author: Schema.Types.ObjectId;
            authorName: string;
            authorImage: string;
            authorRoles: number[];
        };
        answers: IBlogAnswer[];
        views: number;
        is_public: boolean;
        is_featured: boolean;
        request_for_public: boolean;
        reactions: {
            likes: IReaction[];
            dislikes: IReaction[];
            saves: IReaction[];
        };
        seoTitle: string;
        metaDescription: string;
        metaKeywords: string;
        metaOgTitle: string;
        metaOgDescription: string;
        metaOgImage: string;
        featuredImage: IImage;
        createdAt: Date;
        updatedAt: Date;
    }


}