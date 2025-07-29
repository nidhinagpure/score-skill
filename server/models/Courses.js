import { Schema, model } from "mongoose";

const CourseSchema = new Schema({
    title:String,
    info:String,
    click:String,
}); // schema stucture //

const Courses = model ("Courses", CourseSchema );
// model 

export default Courses;  