import dbConnect from '@/lib/mongo/dbConnect';
import apiJwtGuard from '@/middleware/apiJwtGuard';
import Package from '@/models/Package';
import Seo from '@/models/Seo';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    data?: any;
    product?: any;
    metaData?: any;

}
// http://localhost:3000/api/pages/package?nameSlug=managedVpsHosting&seoPageSlug=preManagedVpsHostingLight

// http://localhost:3000/api/pages/package?nameSlug=sharedWebHosting&seoPageSlug=home
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        let metaData


        // SECURITY WALL
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        const verification = token && await apiJwtGuard(token);
        if (!verification) {
            res.status(401).json({ data: 'Nothing!' });
        } else {
            // SECURITY PASSED

            const { nameSlug, seoPageSlug } = req.query;
            // console.log("nameSlug", nameSlug);

            if (!nameSlug || !seoPageSlug) {
                res.status(500).json({ data: 'Query data not found' });
            }


            // sharedWebHosting
            await dbConnect();
            const result = await Package.findOne({ nameSlug: nameSlug });
            // console.log("Data print:", result);
            metaData = await Seo.findOne({
                pageSlug: seoPageSlug
            });
            if (!metaData) {
                metaData = {}
            }

            if (result) {
                res.status(200).json({ product: result, metaData });
            } else {
                res.status(500).json({ data: 'Data not found' });
            }

        }

    } catch (error) {
        console.error("Error fetching packages:", error);
        res.status(500).json({ data: 'Internal Error' });
    }
};


