import Courses from "./../models/Courses.js";


const getCourses = async (req, res) => { // To read the data 
    const CoursesRead = await Courses.find();

    return res.status(200).json({
    success:true,
    data:CoursesRead,
    message:"Data fetch successfully"
    });
};

const postCourses = async (req, res) => {
    const { title, info, click } = req.body; // Read the data from req.body //

    const newCourses = new Courses({
        title,
        info,
        click,
    });

    const saveCourses = await newCourses.save();
     
    return res.status(201).json({
        success:true,
        data: saveCourses,
        message:"Courses added successfully",
    });
};

export { getCourses, postCourses }



























































/*import Courses from "./../models/Courses.js";

const get_Courses = async (req, res) => {

    const couread = await Courses.find();

    return res.status(200).json({
        success: true,
        data:  couread,
        message: "courses fetch successfully",
    });
};

 const post_Courses = async (req, res) => {
    const { title, info } = req.body;
 
    const newCourses = new Courses({ // the data is come from courses.js file //
        title,
        info
    });

    const saveCourses = await newCourses.save(); // save the data 

    return res.status(200).json({
        success: true,
        data: saveCourses, // return save data
        message: "courses fetch successfully",
    });
};


export { get_Courses, post_Courses } */