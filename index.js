import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRouter from "./routes/postMessage.js"
const app=express();
const PORT=process.env.PORT||4040;




app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

app.use("/posts",postRouter);

mongoose.connect('mongodb+srv://nini1234:niniko1234@cluster0.dnowldg.mongodb.net/memories?retryWrites=true&w=majority')
.then(response=>{
    app.listen(PORT,console.log(`app is listening to the port ${PORT}`))
})
.catch(err=>{
    console.log(`${err} did not connect`)
})

