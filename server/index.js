import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { get_Courses, post_Courses } form "./controller/Courses.js";

dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());

const connectionDB = async () => {
    const conUrl = await mongoose.connect(process.env.MongoDbUrl);
    
if (conUrl) {
    console.log("MongoDB Connected successfully");
}
};


app.get("/courses", get_Courses);
app.post("/courses", post_Courses);
app.get("/health", health_get);


const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Server is runing n ${PORT}`);
    connectionDB()
    

})