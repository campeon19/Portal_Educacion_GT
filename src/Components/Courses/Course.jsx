import React from 'react';
import './Course.css';
import calculus from './assets/calculus.jpg'
function Course() {
    return (
        <div className ='course-card'>
            <div class="course-card container h-100 full-width">
    <div class="row align-items-center">
        <div class="col mx-auto text-center">
                <h3>Calculo 11</h3>
            
        </div>
    </div>
    <div class="row align-items-center">
        <div class="col mx-auto">
                <img className="inner-card-image " src={calculus}/>
            
        </div>
    </div>
    <div class="row align-items-center ">
        <div class="col mx-auto lead text-center">
                Limites integrales y derivadas, ademas de fundamentos de aplicaciones y optimizacion
            
        </div>
    </div>
</div>
        </div>
    )
}

export default Course

