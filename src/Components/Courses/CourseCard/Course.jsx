import React from 'react';
import './Course.css';
import calculus from '../assets/calculus.jpg'
function Course(props) {
    return (
        <div className ='course-card'>
            <div className="container h-100 full-width">
    <div className="row align-items-center">
        <div className="col mx-auto text-center">
                <h3>{props.course.nombre}</h3>
            
        </div>
    </div>
    <div className="row align-items-center">
        <div className="col mx-auto">
                <img className="inner-card-image " src={props.course.picture}/>
            
        </div>
    </div>
    <div className="row align-items-center ">
        <div className="col mx-auto lead text-center">
                {props.course.brief}
            
        </div>
    </div>
</div>
        </div>
    )
}


export default Course

