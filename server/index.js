import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Courses from "./models/Courses.js";
import dotenv from "dotenv";
dotenv.config(); // envarement vairiables access


const app = express(); // import in starting line only 
app.use(express.json()); // handle to frontend for postman tool
app.use(cors());


const ConnectedDB = async () => { // connection on backend to database
    const connectionURL = await mongoose.connect(process.env.MONGODB_URL); // env

    if (connectionURL) {
        console.log("MongoDB connected successfully");
    }
}; // data has save in mongodb , firstly make model schema



app.get("/courses", async (req, res) => { // To read the data 

    const CoursesRead = await Courses.find();

    return res.status(200).json({
        success:true,
        data:CoursesRead,
        message:"Data fetch successfully"
    });
});


app.post("/courses", async (req, res) => {
    const { title, info, click } = req.body; // Read the data from req.body //

    const newCourses = new Courses({
        title,
        info,
        click,
    });

    const saveCourses = await newCourses.save();
     
    /*const newCourses = {
        title,
        info,
        click
    }; // create object
    
    SUB_COURSES.push(newCourses); // push the object to empty array */

    return res.status(201).json({
        success:true,
        data: saveCourses,
        message:"Courses added successfully",
    });
});


 app.get("/health",(req, res) => {
    res.status(200).json({message:"Server is running"});
 });


const PORT = process.env.PORT || 500;

app.listen(PORT, () => {
    console.log(`Server is runing n ${PORT}`);
   ConnectedDB();
});
