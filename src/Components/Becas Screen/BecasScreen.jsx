import React, { useEffect, useState } from 'react'
import BecasCard from '../Becas/Becas'
import imgHeader from '../Becas/Assets/becas_header.jpg'
import imgHeader2 from '../Becas/Assets/becas3.jpg'
import './BecasScreen.css'
import { fetchBecas } from '../../util/http';

import uvg from '../Becas/Assets/logoUVG.jpg'
import fjbg from '../Becas/Assets/becaFJBG.jpg'
import Course from '../Courses/CourseCard/Course'

const info = [
    {id:0, titulo: "Becas UVG", img: uvg, description: "Para iniciar el proceso de solicitud de ayuda financiera, los futuros estudiantes deben llenar un formulario en el portal de Admisiones en línea, en donde han llevado el seguimiento de su proceso de admisión, e incluir la papelería requerida tomando en cuenta las fechas establecidas. Al ser admitidos, la opción para solicitar la ayuda financiera estará habilitada automáticamente. Mientras más pronto apliquen durante el año, tendrán mayores posibilidades de acceder al programa."},
    {id:1, titulo: "Becas Fundacion Juan Bautista Guitierrez", img: fjbg, description: "El programa nació en el año 2000, en una labor de cooperación de las Olimpiadas de la Ciencia a Nivel Nacional, donde Doña Isabel Gutiérrez de Bosch (Q.E.P.D), presidente de la FJBG en ese momento, conoció a un joven guatemalteco originario de la Esperanza Quetzaltenango, quien fuera ganador ese año de la medalla del Primer lugar en Química ..."}
]




export default function Becas() {
    const [becas, setbecas] = useState([])

    // fetchBecas(1).then((datos) =>{
    //     setbecas(data.map((beca, index) =>{
    //         {...beca, id:index}
    //     }))
    // })

    useEffect(() =>{
        fetchBecas().then(
            (datos) =>{
                setbecas(datos.map((beca, index) =>{
                    return {id:index, ...beca}
                }))
            }
        )
    }, [])

    console.log(becas)

    return (
        <div>
            <div className='container-size'>
                <img className='img-header' src={imgHeader2}/>  
                <div className='title-style'>
                </div>
            </div>
            <div className='title-style'>
                <h1>Informacion de Becas disponibles para Guatemaltecos</h1>
            </div>
            <div>
                {
                    becas.map((beca) =>{
                        return <BecasCard beca={beca} />
                    })
                }
            </div>
        </div>
    )
}