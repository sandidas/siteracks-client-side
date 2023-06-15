import dbConnect from '@/lib/mongo/dbConnect';
import apiJwtGuard from '@/middleware/apiJwtGuard';
import Page from '@/models/Page';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    data?: any;
    pages?: any;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        // check token
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        const verification = token && await apiJwtGuard(token);
        if (!verification) {
            res.status(401).json({ data: 'Nothing!' });
        } else {
            // http://localhost:3000/api/pages/pages

            await dbConnect();
            const result = await Page.find({
                status: true
            }).select('-lastUpdateBy -status -createdAt -updatedAt');

            if (result) {
                res.status(200).json({ pages: result });
            } else {
                res.status(500).json({ data: 'Data not found' });
            }
        }
    } catch (error) {
        console.error("Error fetching packages:", error);
        res.status(500).json({ data: 'Internal Error' });
    }
};


