import { Schema, model, models, Document } from "mongoose";

interface IImage extends Document {
    _id: string;
    updatedAt: string;
    createdAt: string;
    filename: string;
    fileUrl: string;
    fileUrl_medium: string;
    fileUrl_small: string;
    referenceId: string;
    referenceType: string;
}
interface IReaction {
    author: Schema.Types.ObjectId;
    authorName?: string;
}

interface ICategory extends Document {
    title: string;
    slug: string;
}


interface IBlogAnswer extends Document {
    text: string;
    author: Schema.Types.ObjectId;
    authorName: string;
    authorImage: string;
    is_public: boolean;
    authorRoles: [number];
    votes: number;
    reactions: {
        likes: IReaction[];
        dislikes: IReaction[];
    };
    createdAt: Date;
}

interface IBlog extends Document {
    subject: string;
    slug: string;
    text: string;
    categories: [String];
    status: boolean; // close or active
    softDelete: boolean;
    author: Schema.Types.ObjectId;
    authorName: string;
    authorImage: string;
    authorRoles: [number];
    lastUpdateBy: {
        author: Schema.Types.ObjectId;
        authorName: string;
        authorImage: string;
        authorRoles: [number];
    },
    tags: string[];

    allowedAnswers: boolean;
    answers: IBlogAnswer[];
    views: number;
    is_public: boolean;
    is_featured: boolean;
    request_for_public: boolean;
    isAuthorAllowedToEdit: boolean;
    reactions: {
        likes: IReaction[];
        dislikes: IReaction[];
        saves: IReaction[];
    };
    lastReplyBy: string,
    seoTitle: string,
    metaDescription: string,
    metaKeywords: string,
    metaOgTitle: string,
    metaOgDescription: string,
    metaOgImage: string,
    featuredImage: IImage,
    createdAt: Date;
    updatedAt: Date;

}

const ImageSchema = new Schema<IImage>({
    filename: {
        type: String,
    },
    fileUrl: {
        type: String,
    },
    fileUrl_medium: {
        type: String,
    },
    fileUrl_small: {
        type: String,
    },
    referenceId: {
        type: String,
    },
    referenceType: {
        type: String,
    },
    _id: String,
    updatedAt: String,
    createdAt: String,
});

const CategorySchema = new Schema<ICategory>({
    title: {
        type: String,
        required: true,
    },
    slug: String,
}, { timestamps: true });

const ReactionSchema = new Schema<IReaction>({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User', // replace with your user schema name
        required: true,
    },
    authorName: String,
}, { timestamps: true });



const AnswerSchema = new Schema<IBlogAnswer>({
    text: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User', // replace with your user schema name
        required: true,
    },
    authorName: {
        type: String,
        default: 'Anonymous', // replace with your
    },
    authorImage: String,
    authorRoles: {
        type: [Number],
        default: [2001],
    },
    votes: {
        type: Number,
        default: 0,
    },
    reactions: {
        likes: [ReactionSchema],
        dislikes: [ReactionSchema],
    }, is_public: {
        type: Boolean,
        default: false, // draft or published
    },
}, { timestamps: true });

const BlogSchema = new Schema<IBlog>({
    subject: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    categories: {
        type: [String],
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User', // replace with your user schema name
        required: true,
    },
    authorName: {
        type: String,
        default: 'Anonymous', // replace with your
    },
    authorImage: String,
    authorRoles: {
        type: [Number],
        default: [2001],
    },
    lastUpdateBy: {
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User', // replace with your user schema name
        },
        authorName: {
            type: String,
            default: 'Anonymous', // replace with your
        },
        authorImage: String,
        authorRoles: {
            type: [Number],
            default: [2001],
        },
    },
    isAuthorAllowedToEdit: {
        type: Boolean,
        default: true,
    },
    tags: [{
        type: String,
    }],
    allowedAnswers: {
        type: Boolean,
        default: true,
    },
    answers: [AnswerSchema],
    views: {
        type: Number,
        default: 0,
    },
    reactions: {
        likes: [ReactionSchema],
        dislikes: [ReactionSchema],
        saves: [ReactionSchema],
    },
    request_for_public: {
        type: Boolean,
        default: false,
    },
    is_public: {
        type: Boolean,
        default: false, // draft or published
    },
    is_featured: {
        type: Boolean,
        default: false, // draft or published
    },
    status: {
        type: Boolean,
        default: true, // true: active or close.
    },
    softDelete: {
        type: Boolean,
        default: false,
    },
    lastReplyBy: String,
    featuredImage: {
        type: ImageSchema
    },
    seoTitle: String,
    metaDescription: String,
    metaKeywords: String,
    metaOgTitle: String,
    metaOgDescription: String,
    metaOgImage: String,

}, { timestamps: true });

const Blog = models.Blog || model('Blog', BlogSchema);
export default Blog;