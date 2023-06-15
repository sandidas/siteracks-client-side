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
    try {

        // SECURITY WALL
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        const verification = token && await apiJwtGuard(token);
        if (!verification) {
            res.status(401).json({ error: 'Nothing!' });
        } else {
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

            const metaData = await Seo.findOne({
                pageSlug: "home"
            });

            //  console.log("GOD HELP ME: ", result);
            if (result.length > 0) {
                res.status(200).json({ data: result, metaData });
            } else {
                res.status(500).json({ error: 'SiteRacks Hosting' });
            }
        }

    } catch (error) {
        console.error("Error fetching packages:", error);
        res.status(500).json({ error: 'SiteRacks Hosting' });
    }
};


