import Package from "@/models/Package";
import Seo from "@/models/Seo";
import dbConnect from "../dbConnect";

const getPackage = async (nameSlug: string, seoPageSlug: string) => {
    try {
        let metaData
        // DB CONNECTION
        await dbConnect();

        // = = = = = = = = = = 
        // PACKAGE QUERY
        // = = = = = = = = = = 
        const result = await Package.findOne({ nameSlug: nameSlug });

        // = = = = = = = = = = 
        // META DATA QUERY
        // = = = = = = = = = = 
        metaData = await Seo.findOne({
            pageSlug: seoPageSlug
        });
        if (!metaData) {

            metaData = await Seo.findOne({
                pageSlug: "default"
            });
            if (!metaData) {
                metaData = {
                    pageTitle: "SiteRacks Hosting | Your Web Hosting Provider",
                    metaDescription: "Looking for reliable and affordable web hosting services? SiteRacks has got you covered! Our team of experts provides fast and secure hosting solutions that keep your website up and running 24/7. Choose from our range of hosting packages, including shared hosting, VPS, and dedicated servers. Get started today and experience the SiteRacks difference!",
                    metaKeywords: "web hosting, website hosting, hosting services, shared hosting, VPS hosting, dedicated servers, reliable hosting, affordable hosting, fast hosting, secure hosting, 24/7 support, website uptime, domain names, cPanel, SSL certificates",
                    metaOgTitle: "Best Web Hosting Company - SiteRacks",
                    metaOgDescription: "Looking for reliable and affordable web hosting services? SiteRacks has got you covered! Our team of experts provides fast and secure hosting solutions that keep your website up and running 24/7. Choose from our range of hosting packages, including shared hosting, VPS, and dedicated servers. Get started today and experience the SiteRacks difference!",
                    metaOgUrl: "https://siteracks.com/",
                    metaOgImage: "https://siteracks-content.s3.us-west-2.amazonaws.com/SiteRacksHostingYourHostingCompany.jpg",
                }
            }
        }


        // = = = = = = = = = = 
        // # RESPONSE
        // = = = = = = = = = = 

        if (result) {
            return { data: result, metaData }

        } else {
            false
        }



    } catch (error) {
        console.error("Error fetching packages:", error);
        return false;
    }
}

export default getPackage;