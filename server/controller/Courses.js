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