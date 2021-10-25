import React, { useState } from "react";
import Course from "../CourseCard/Course";
import "./CourseContainer.css";

function CourseContainer({ courses }) {
  return (
    <div className="courses-countainer">
      {courses.map((course) => {
        return <Course course={course} />;
      })}
    </div>
  );
}

export default CourseContainer;
