import {Schema, model, models} from "mongoose";

const PageSchema = new Schema({

    pageTitle: {
        type: String,
        default: "New Page",
    },
    pageSlug: {
        type: String,
        default: "new-page",
        unique: true,
    },
    featuredImage: {
        type: String,
        default: null,
    },
    pageContent: {
        type: String,
        default: null,
    },
    status: {
        type: Boolean,
        default: false,
    },
    lastUpdateBy: {
        userName: String,
        userEmail: String,
        userId: String,
        // providerId: String,
    }


}, { timestamps: true });

const Page = models.Page || model("Page", PageSchema);
export default Page;