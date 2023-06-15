import dbConnect from '@/lib/mongo/dbConnect';
import apiJwtGuard from '@/middleware/apiJwtGuard';
import Blog from '@/models/Blog';
import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';

type Data = {
    skip?: number;
    blogs?: any;
    nextCursor?: any;
    metaData?: IHeadData;
    error?: string | null;
}
// /api/pages/blogs?cursor=${pageParam}&limit=${limit}&keyword=${keyword}
// /api/pages/blogs?cursor=${pageParam}&limit=${limit}&keyword=${keyword}
// api/pages/blogs?cursor=0&limit=10&keyword=undefined
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        // check token
        // const authHeader = req.headers['authorization'];
        // const token = authHeader && authHeader.split(' ')[1];
        // const verification = token && await apiJwtGuard(token);
        // if (!verification) {
        //     res.status(401).json({ error: 'Nothing!' });
        // } else {

        // }


        await dbConnect();





        const { limit } = req.query as { limit: string }; // Number of blog/posts per page
        const existCursor = req.query.cursor; // Number of blog/posts per page

        const { keyword } = req.query as { keyword?: string }; // Keyword for search query

        console.log("One blog");
        // const cursor = req.query.cursor ? new mongoose.Types.ObjectId(req.query.cursor as string) : null;

        let cursor = existCursor !== "0" ? existCursor : null;


        let query = cursor
            ? Blog.find({
                $and: [
                    { _id: { $lt: cursor } },
                    // { is_public: true, softDelete: false },
                ],
            })
                .sort({ _id: -1 })
                .limit(parseInt(limit))
            : Blog.find({
                // is_public: true,
                // softDelete: false,
            })
                .sort({ _id: -1 })
                .limit(parseInt(limit));

        // SEARCH CONDITION
        // if (keyword !== undefined && keyword !== null && keyword !== '') {
        //     const regex = new RegExp(keyword, 'i');
        //     query = query.find({
        //         $or: [
        //             { subject: { $regex: regex } },
        //             { text: { $regex: regex } },
        //             { authorName: { $regex: regex } },
        //             { tags: { $regex: regex } },
        //             { categories: { $regex: regex } },
        //         ],
        //         is_public: true,
        //         softDelete: false,
        //     });
        // }
        // # SEARCH CONDITION

        const results = await query.exec();
        const lastItem = results[results.length - 1];
        const nextCursor = lastItem ? lastItem._id.toString() : null;

        // Calculate the skip value
        // let skip = 0;
        // if (cursor) {
        //     const count = await Blog.countDocuments({
        //         _id: { $lt: cursor },
        //         is_public: true,
        //         softDelete: false,
        //     });
        //     skip = Math.max(0, count - parseInt(limit));
        // }

        // Return the data and the total number of documents
        res.status(200).json({ blogs: results, nextCursor: nextCursor });



    } catch (error) {
        console.error("Error fetching packages:", error);
        res.status(500).json({ error: 'Internal Error' });
    }
};


