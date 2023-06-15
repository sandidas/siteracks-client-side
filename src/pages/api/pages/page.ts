import dbConnect from '@/lib/mongo/dbConnect';
import apiJwtGuard from '@/middleware/apiJwtGuard';
import Page from '@/models/Page';
import Seo from '@/models/Seo';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    data?: IPage;
    metaData?: IHeadData;
    error?: string | null;

}

// http://localhost:3000/api/pages/page?pageSlug=terms-and-conditions&seoPageSlug=terms-and-conditions

// http://localhost:3000/api/pages/page?pageSlug=sharedWebHosting&seoPageSlug=home

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
            let metaData;
            const { pageSlug, seoPageSlug } = req.query;

            if (!pageSlug || !seoPageSlug) {
                res.status(500).json({ error: 'Query data not found' });
            }

            await dbConnect();
            const result = await Page.findOne({
                pageSlug: pageSlug
            }).select('-lastUpdateBy -status');


            metaData = await Seo.findOne({
                pageSlug: seoPageSlug
            });
            if (!metaData) {
                metaData = {}
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


