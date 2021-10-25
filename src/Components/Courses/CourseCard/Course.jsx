import React from "react";
import { useHistory } from "react-router-dom";
import "./Course.css";

function Course(props) {
  const history = useHistory();
  const courseClickHandler = () => {
    console.log("me han tocado chaval");
    history.push({
      pathname: `/courses/` + props.course.id,
    });
  };
  return (
    <div className="course-card">
      <div onClick={courseClickHandler} className="container h-100 full-width">
        <div className="row align-items-center">
          <div className="col mx-auto text-center">
            <h3>{props.course.nombre}</h3>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col mx-auto">
            <img className="inner-card-image " src={props.course.picture} />
          </div>
        </div>
        <div className="row align-items-center ">
          <div className="col mx-auto lead text-center">
            {props.course.brief}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
