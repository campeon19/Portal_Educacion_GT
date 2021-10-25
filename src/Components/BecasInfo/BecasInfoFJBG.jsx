import React from 'react'
import './BecasInfo.css'
import logoUVG from '../Becas/Assets/logoUVG.jpg'
import logo2 from '../Becas/Assets/becaFJBG.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBook, faGlobeAmericas, faHandsHelping, faPenSquare, faSun, faTools, faUser } from '@fortawesome/free-solid-svg-icons';


export default function BecasInfo() {
    return (
        <div className='background-style'>
            <div className='container border-container'>
                <div className='img-info'>
                    <img className='img-info2' src={logo2}/>
                </div>
                <div className='title-info'>
                    <h1>Becas Fundacion Juan Bautista Gutierrez</h1>
                </div>
                <div className ='subtitle-info'>
                    <h3>Historia</h3>
                </div>
                <div className='paragraph-info'>
                    <p>El programa nació en el año 2000, en una labor de cooperación de las Olimpiadas de la Ciencia a Nivel Nacional, donde Doña Isabel Gutiérrez de Bosch (Q.E.P.D), presidente de la FJBG en ese momento, conoció a un joven guatemalteco originario de la Esperanza Quetzaltenango, quien fuera ganador ese año de la medalla del Primer lugar en Química. Después de una sencilla pregunta: ¿Dime, seguirás estudiando en la universidad siendo el mejor químico de Guatemala, qué orgullo? A lo que él respondió: “No seguiré estudiando en la universidad, porque debo trabajar con mi papá quien es ayudante de albañil para contribuir a la economía de mi familia”. </p>
                    <p>La respuesta movió los cimientos de Doña Isabel y puso frente a sus ojos la realidad de millones de jóvenes guatemaltecos talentosos quienes por diversas razones no pueden realizar con sus propios medios el sueño de tener un título académico universitario, jóvenes líderes emergentes, con toda la fuerza, toda la inteligencia, todo el potencial para sumarse a la productividad y al desarrollo de nuestro país  </p>
                    <p>“Los beneficiados con una beca son jóvenes que saben identificar las oportunidades y asumir el riesgo y la presión que esto conlleva, son emprendedores en potencia, que ven en las carreras universitarias la oportunidad de lograr un sueño.” </p>
                </div>
                <div className='second-container'>
                    <div className ='subtitle-info'>
                        <h3>Perfil del becado</h3>
                    </div>
                    <div className='paragraph-info'>
                        <ul>
                            <li><h6>Ser de recursos económicos limitados</h6></li>
                            <li><h6>Cursar el último año del Área de Diversificado</h6></li>
                            <li><h6>Tener como mínimo 85 puntos de promedio académico desde 3ro. Básico hasta el último año de diversificado (4º. 5º. o 6º.)</h6></li>
                            <li><h6>No haber iniciado estudios a nivel universitario con anterioridad.</h6></li>
                            <li><h6>Poseer un alto grado de disciplina, motivación y compromiso para participar en cada una de las actividades que promueva la Fundación y que integran el Programa de Becas Universitarias, así como finalizar sus estudios con excelencia.</h6></li>
                            <li><h6>Tener disposición de estudiar en los Campus y/o Sedes de las universidades a las que puede aplicar dentro del Programa de Becas.</h6></li>
                        </ul>    
                    </div>
                </div>
                <div className ='subtitle-info'>
                    <h3>¿Qué ofrecen?</h3>
                </div>
                <div className='paragraph-info'>
                    <ul className='ul-style'>
                        <li><h5><FontAwesomeIcon icon={faPenSquare}></FontAwesomeIcon> Pago de matrícula completa y mensualidades por la duración de la carrera</h5></li>
                        <li><h5><FontAwesomeIcon icon={faBook}></FontAwesomeIcon> Estipendio mensual, apoyo para cuota de libros y pago de trámites de graduación.</h5></li>
                        <li><h5><FontAwesomeIcon icon={faGlobeAmericas}></FontAwesomeIcon> Nivelación de inglés según requerimiento de la universidad</h5></li>       
                    </ul>
                </div>
                <div className ='subtitle-info'>
                    <h3>Beneficios Adicionales</h3>
                </div>
                <div className='paragraph-info'>
                    <ul className='ul-style'>
                        <li><h5><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Ser parte de la Asociación de Becados Isabel Gutiérrez de Bosch - ASIGBO</h5></li>
                        <li><h5><FontAwesomeIcon icon={faSun}></FontAwesomeIcon> Campamento anual</h5></li>
                        <li><h5><FontAwesomeIcon icon={faTools}></FontAwesomeIcon> Desayunos y talleres de formación</h5></li>
                        <li><h5><FontAwesomeIcon icon={faHandsHelping}></FontAwesomeIcon> Programa de Coaching</h5></li>      
                    </ul>
                </div>
                <div className ='subtitle-info'>
                    <h3>¿Cómo hacen el proceso?</h3>
                </div>
                <div className='paragraph-info'>
                    <ul className='ul-style2'>
                        <li><h5>Febrero - Abril: Lanzamiento e inicio de convocatoria.</h5></li>
                        <li><h5>Abril - Mayo: Selección de jóvenes que cumplen el 100% de los requisitos solicitados.</h5></li>
                        <li><h5>Mayo - Julio: Evaluación de pruebas de aptitudes, personalidad y valores.</h5></li>
                        <li><h5>Agosto - Septiembre: Entrevista psicológica y estudios socioeconómicos.</h5></li>
                        <li><h5>Octubre: Entrevista final.</h5></li>
                        <li><h5>Noviembre: Entrega de beca.</h5></li>
                    </ul>
                </div>
                <div className ='link-info'>
                    <a href='https://www.fundacionjbg.org/becas-universitarias/' target="_blank">Conoce más visitando la página de la Fundación Juan Bautista Gutierrez</a>
                </div>
            </div>
        </div>
    )
}