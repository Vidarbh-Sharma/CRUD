import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoutes.js";



const app=express();

app.use(bodyParser.json());
dotenv.config();
const PORT=process.env.PORT||8000;
const MONGOURL=process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
    console.log("database ")
    app.listen(PORT,()=>{
        console.log(`server runnig ${PORT}`);
    })
})
.catch((error)=> console.log(error));

//app.use("/api/user",route);

app.use("/api/user",route);