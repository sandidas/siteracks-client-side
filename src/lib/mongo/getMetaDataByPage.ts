
import Seo from "@/models/Seo";
import dbConnect from "./dbConnect";

let seo: any;

async function init() {
    if (seo) return;
    try {
        const client = await dbConnect();
        seo = client.model('Seo');
    } catch (error) {
        console.error("Failed to establish database connection:", error);
        throw error;
    }
}

(async () => {
    await init();
})();
// dbConnect()

const getMetaDataByPage = async (pageSlug: string) => {
    try {
        const result = await Seo.findOne({
            pageSlug: pageSlug
        });
        return result;
    } catch (error) {
        console.error("Error fetching seo:", error);
        throw error;
    }
};

export default getMetaDataByPage;
