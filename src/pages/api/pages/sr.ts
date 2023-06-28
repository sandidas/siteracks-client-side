// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '@/lib/mongo/dbConnect';
import apiJwtGuard from '@/middleware/apiJwtGuard';
import Package from '@/models/Package';
import Seo from '@/models/Seo';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    data?: IProduct[];
    metaData?: IHeadData;
    error?: string | null;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {


    // // SECURITY WALL
    // const authHeader = req.headers['authorization'];
    // const token = authHeader && authHeader.split(' ')[1];
    // const verification = token && await apiJwtGuard(token);
    // // console.log("verification", verification);
    // if (!verification) {
    //     res.status(401).json({ error: 'Nothing!' });
    // }

    // else {
    //     // SECURITY PASSED
    // }
    // // # SECURITY WALL


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
        result.sort((a, b) => a.order - b.order);

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
            res.status(200).json({ data: result, metaData });
        } else {
            res.status(500).json({ error: 'SiteRacks Hosting' });
        }


    } catch (error) {
        console.error("Error fetching packages:", error);
        res.status(500).json({ error: 'SiteRacks Hosting' });
    }


};


