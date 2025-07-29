import axios from "axios";
import { useState, useEffect } from 'react'

import CoursesCards from "./../components/CoursesCards";

function Courses  () {
    const [courses, setCourses] = useState([]);

    const loadCourses = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/courses`

      );
      setCourses(response.data.data);
    };

    useEffect(() => {
     loadCourses() 
    }, []);

  return (
    <div>
        <h1 className="pt-30 text-center font-bold text-4xl">Available <span className='font-bold text-blue-400 underline'>COURSES</span> </h1>
        <div className="mt-4 sm:mt-4 md:mt-10 lg:mt-14 flex flex-row flex-wrap justify-center items-stretch gap-4 sm:gap-4 lg:gap-8  ">
          {courses.map((courseobj) => {
            const { _id, title, info, click,image} = courseobj;
            return(
              <CoursesCards 
              key={_id}
              _id={_id}
              title={title}
              info={info}
              click={click}
              image={image}
            />
          );
        })}
        </div>
      </div>
  )
}

export default Courses;