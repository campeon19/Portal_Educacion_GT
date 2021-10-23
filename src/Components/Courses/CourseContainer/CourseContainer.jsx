import React,{useState} from 'react';
import Course from '../CourseCard/Course';
import './CourseContainer.css'




function CourseContainer({courses, pictures}) {
    

    return (
        <div className='courses-countainer'>
            {
                courses.map((course)=>{
                    return <Course course={{...course, picture: pictures[course.tema]}}/>
                })
            }
        </div>
    )
}

export default CourseContainer
