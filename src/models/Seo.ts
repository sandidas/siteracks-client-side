import { Schema, model, models } from "mongoose";

const SeoSchema = new Schema({
    siteName: {
        type: String,
        required: true,
    },
    pageSlug: {
        type: String,
        required: true,
        unique: true,
    },
    pageTitle: {
        type: String,
        required: true,
    },
    metaDescription: {
        type: String,
        default: '',
    },
    metaKeywords: {
        type: String,
        default: '',
    },
    metaAuthor: {
        type: String,
        default: '',
    },
    metaOgDescription: {
        type: String,
        default: '',
    },
    metaOgImage: {
        type: String,
        default: '',
    },
    metaOgTitle: {
        type: String,
        default: '',
    },
    metaOgUrl: {
        type: String,
        default: '',
    },
    shareTitle: {
        type: String,
        default: '',
    },

});

const Seo = models.Seo || model('Seo', SeoSchema);
export default Seo;