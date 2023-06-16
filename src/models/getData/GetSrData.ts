import dbConnect from "@/lib/mongo/dbConnect";
import Package from "../Package";
import Seo from "../Seo";


const GetSrData = async () => {
    try {

        // SECURITY WALL
        // const authHeader = req.headers['authorization'];
        // const token = authHeader && authHeader.split(' ')[1];
        // const verification = token && await apiJwtGuard(token);
        // console.log("verification", verification);
        // if (!verification) {
        //     res.status(401).json({ error: 'Nothing!' });
        // } else { }
        // SECURITY PASSED

        await dbConnect();
        const result = await Package.find({}, {
            _id: 0,
            __v: 0,
            "packages._id": 0,
            "packages.features": 0,
            "packages.productTitle": 0,
            "packages.productDescription": 0,
            "packages.productId": 0,
            "packages.featured": 0,
            "packages.additionalMonths": 0,
            "packages.promoCode": 0,
        }).lean();

        let metaData = await Seo.findOne({
            pageSlug: "home"
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

        //  console.log("GOD HELP ME: ", result);
        if (result.length > 0) {
            return { data: result, metaData };
        } else {
            return { error: 'SiteRacks Hosting' };
        }


    } catch (error) {
        console.error("Error fetching packages:", error);
        return { error: 'SiteRacks Hosting' };
    }
}

export default GetSrData;