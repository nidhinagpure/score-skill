import React from 'react'
import axios from "axios";
import { useState } from 'react'
import { useEffect } from 'react';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    const loadCourses = async () => {
      const response = await axios.get(`${import.meta.evn.VITE_API_URL}`/courses

      );
      setCourses(response.data.data);
    };

    useEffect(() => {
     loadCourses() 
    }, []);

  return (
    <div>
      
    </div>
  )
}

export default Courses;