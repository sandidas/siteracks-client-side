import Package from "@/models/Package";
import dbConnect from "./dbConnect";


// let client;
// let packages;

// async function init() {
//   if (packages) return;
//   try {
//     client = await dbConnect();
//     packages = client.db().collection('packages');
//   } catch (error) {
//     console.error("Failed to establish database connection:", error);
//     throw error;
//   }
// }

// (async () => {
//   await init();
// })();
dbConnect()

const getPackages = async () => {
  try {
    const result = await Package.find();
    console.log("GOD HELP ME: ", result);
    return result;
  } catch (error) {
    console.error("Error fetching packages:", error);
    throw error;
  }
};

export default getPackages;
