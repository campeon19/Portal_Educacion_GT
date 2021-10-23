import React,{useState} from 'react';
import Course from '../CourseCard/Course';
import './CourseContainer.css'

import math from './assets/calculus.jpg'
import physics from './assets/physics.jpg'
import language from './assets/communication.jpg'
import chemistry from './assets/chemistry.jfif'
import biology from './assets/biology.jpg'

const cursos = [
    {id:0, tema:'math', nombre: 'Calculo 1', brief: 'Aprende limites, derivadas e integrales. Además de optimización de funciones', picture:math},
    {id:1, tema:'math', nombre: 'Precalculo', brief: 'Aprende reglas de exponentes, logaritmicas y a resolver ecuaciones trigonometricas', picture:math},
    {id:2, tema:'physics', nombre: 'Fisica fundamental', brief: 'Aprende acerca de los vectores, que significan y como aplicarlos', picture:physics},
    {id:3, tema:'language', nombre: 'Comunicacion', brief: 'Aprende redacción, ortografía, gramática y a comunicarte efectivamente', picture:language},
    {id:4, tema:'chemistry', nombre: 'Química general', brief: 'Aprende acerca reacciones básicas, el átomo y estequeometría', picture:chemistry},
    {id:5, tema:'biology', nombre: 'Biología básica', brief: 'Aprende acerca de la celula, microorganismos y la fotosintesis', picture:biology}
]
function CourseContainer() {
    const [courses, setCourses] = useState(cursos);

    return (
        <div className='courses-countainer'>
            {
                courses.map((course)=>{
                    return <Course course={course}/>
                })
            }
        </div>
    )
}

export default CourseContainer
