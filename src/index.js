import dotenv from "dotenv";
import { mongoose } from "mongoose";
import connectDb from "./db/index.js";
import {app} from "./app.js"

dotenv.config({
  path: "./env",
});

connectDb()
.then(()=>{
    app.listen(process.env.PORT|| 8000,()=>{
        console.log(`App is running on port${process.env.PORT}`)
    })
})
.catch((Err)=>{
    console.log('Mongodb connection failed', Err)
})

// async function connectDb() {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//   } catch (error) {
//     console.log("ERROR", error);
//     throw err;
//   }
// }

// connectDb();
