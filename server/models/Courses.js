import { Schema, model } from "mongoose";

const CoursesModel = new Schema({
    title:String,
    info:String,
});

const Courses = model("Courses", CoursesModel );




export default Courses;