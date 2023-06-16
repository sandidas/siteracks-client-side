import dbConnect from '@/lib/mongo/dbConnect';
import apiJwtGuard from '@/middleware/apiJwtGuard';
import Page from '@/models/Page';
import Seo from '@/models/Seo';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    data?: IPage[];
    metaData?: IHeadData;
    error?: string | null;
}


// = = = = = = = = = = 
// QUERY FOR TERMS AND CONDITIONS PAGES 
// = = = = = = = = = = 

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        let metaData;
        // check token
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        const verification = token && await apiJwtGuard(token);
        if (!verification) {
            res.status(401).json({ error: 'Nothing!' });
        } else {
            // http://localhost:3000/api/pages/pages

            await dbConnect();
            const { seoPageSlug } = req.query;

            const result = await Page.find({
                status: true
            }).select('-lastUpdateBy -status -createdAt -updatedAt');



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




            if (result) {
                res.status(200).json({ data: result, metaData });
            } else {
                res.status(500).json({ error: 'Data not found' });
            }
        }
    } catch (error) {
        console.error("Error fetching packages:", error);
        res.status(500).json({ error: 'Internal Error' });
    }
};


