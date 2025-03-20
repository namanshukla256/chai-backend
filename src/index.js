import dotenv from "dotenv";
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})

connectDB()




// import express from 'express'
// const app = express()

// //iffies
// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.MOGNODB_URI}/${DB_NAME}`)
//         app.on("error", (error)=> {
//             console.log("ERRR:", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     } catch(error) {
//         console.log("Error: ", error);
//         throw err
//     }
// })()