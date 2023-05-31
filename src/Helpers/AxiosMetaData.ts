import axios from "axios";
interface IMetaDataCache {
    [slug: string]: {
        data: IHeadData;
        updatedAt: number;
    };
}

const CACHE_TTL = 60 * 60 * 24000; // 24 hours in milliseconds
const metaDataCache: IMetaDataCache = {};

export const getMetaData = async (slug: string) => {
    try {
        // Check if the metadata is already in the cache
        const cachedMetaData = metaDataCache[slug];
        if (cachedMetaData && Date.now() - cachedMetaData.updatedAt < CACHE_TTL) {
            return cachedMetaData.data;
        }

        // If the metadata is not in the cache or has expired, fetch it from the database
        const API_URL = `${process.env.API_URL}/api/seo/fetch-all`;
        const response = await axios.get(API_URL);
        const results = response?.data?.data;
        const metaData = results?.find((service: IHeadData) => service.pageSlug === slug && service.siteName === "siteRacksMainSite");

        // Cache the retrieved metadata
        metaDataCache[slug] = {
            data: metaData,
            updatedAt: Date.now(),
        };

        return metaData;
    } catch (error) {
        console.error(`Error fetching metadata for slug ${slug}: ${error}`);
        // Return default data
        return {
            // pageTitle: 'Default Title',
            // metaDescription: 'Default Description',
            // ...
        };
    }
}