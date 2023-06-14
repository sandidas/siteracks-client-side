// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '@/lib/mongo/dbConnect';
import Seo from '@/models/Seo';
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
        const result = await Seo.find().lean();
        //  console.log("GOD HELP ME: ", result);
        if (result.length > 0) {
            res.status(200).json({ data: result });
        }
    } catch (error) {
        console.error("Error fetching packages:", error);
        res.status(500).json({ data: 'SiteRacks Hosting' });
    }
};


