import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    optionsSuccessStatus: 200
}))

app.use(express.json({limit: "20kb"}))
app.use(express.urlencoded({extended: true, limit: "20kb"})) //used for different url config bcz sometimes theres + simetimes % 
app.use(express.static("public")) //used to store images videos files etc like we have in public folder
app.use(cookieParser())
export { app }