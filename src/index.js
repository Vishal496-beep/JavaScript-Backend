// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';


dotenv.config({
   path: './env'
})

connectDB()
.then(() => {
   app.listen(process.env.PORT || 8000, () => {
      console.log(`Service is running at port: ${process.env.PORT}`);
      app.on("ERRORRR",(error) => {
         console.log('db is not connected!!!!!!!!',error);
         
      })
   })
})
.catch((err) => {
   console.log("MONGO DB connection failed!!!", err);
   
})





















//iife concept ||| always use async await or try catch for databse connection

// (async () => {
//    try {
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//    app.on("ERRRROR",(error) => {
//       console.log("ERROR: ", error);
//       throw error
//    })
//    app.listen(process.env.PORT, () => {
//      console.log(`app is listening on port ${process.env.PORT}`);
     
//    })
//    } catch (error) {
//     console.error("ERROR:", error)
//     throw error
//    }
// })()