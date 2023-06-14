import Package from "@/models/Package";
import dbConnect from "./dbConnect";


let packages: any;

async function init() {
  if (packages) return;
  try {
    const client = await dbConnect();
    packages = client.model('Packages');
  } catch (error) {
    console.error("Failed to establish database connection:", error);
    throw error;
  }
}

(async () => {
  await init();
})();
// dbConnect()

const getPackages = async () => {
  try {
    const result = await Package.find({}, {
      // _id: 0,
      // __v: 0,
      "packages._id": 0,
      "packages.features": 0,
      "packages.productTitle": 0,
      "packages.productDescription": 0,
      "packages.productId": 0,
      "packages.featured": 0,
      "packages.additionalMonths": 0,
      "packages.promoCode": 0,
    }).lean();
    //  console.log("GOD HELP ME: ", result);
    return result;
  } catch (error) {
    console.error("Error fetching packages:", error);
    throw error;
  }
};

export default getPackages;
