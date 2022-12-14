import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import fileUpload from "express-fileupload"
import mongoose from "mongoose"
import userRouter from "./routes/userRouter.js";
import uploadRouter from "./routes/uploadRouter.js";

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

// Connect Monggose
const URI = process.env.DB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},err => {
    if(err) throw err
    console.log("Connected to mongodb")
})



app.use('/api/v1/user/',userRouter)
app.use('/api/v1/',uploadRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})