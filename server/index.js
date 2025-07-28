import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import Courses from "./models/Courses";

const app = express();
app.use(express.json());
app.use(cors());



const connectionDB = async () => {
    const conUrl = await mongoose.connect(process.env.MongoDbUrl);
    
if (conUrl) {
    console.log("MongoDB Connected successfully");
}

};


const courses = []; // temp empty array //

app.get("/courses", (req, res) => {
    return res.status(200).json({
        success: true,
        data: courses,
        message: "courses fetch successfully",
    });
});


app.post("/courses", async (req, res) => {
    const { title, info } = req.body;
 
    const newCourses = new Courses({
        title,
        info
    });

    const saveCourses = await newCourses.save();

    return res.status(200).json({
        success: true,
        data: saveCourses,
        message: "courses fetch successfully",
    });
});



app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server is running" });
})


const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Server is runing n ${PORT}`);
    connectionDB()
    

})