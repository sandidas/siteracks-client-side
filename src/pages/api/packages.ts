// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '@/lib/mongo/dbConnect';
import Package from '@/models/Package';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    data?: any;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
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
        //  console.log("GOD HELP ME: ", result);
        if (result.length > 0) {
            res.status(200).json({ data: result });
        }
    } catch (error) {
        console.error("Error fetching packages:", error);
        res.status(500).json({ data: 'SiteRacks Hosting' });
    }
};


