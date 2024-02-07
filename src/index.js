import dotenv from "dotenv";
import { mongoose } from "mongoose";
import connectDb from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDb();

// async function connectDb() {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//   } catch (error) {
//     console.log("ERROR", error);
//     throw err;
//   }
// }

// connectDb();
