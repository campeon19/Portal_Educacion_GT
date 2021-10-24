import React from 'react'
import './BecasInfo.css'
import logoUVG from '../Becas/Assets/logoUVG.jpg'
import logo2 from '../Becas/Assets/becaFJBG.jpg'


export default function BecasInfo() {
    return (
        <div className='container'>
            <div className='img-info'>
                <img className='img-info2' src={logoUVG}/>
            </div>
            <div className='title-info'>
                <h1>Becas UVG</h1>
            </div>
            <div className ='subtitle-info'>
                <h3>Historia</h3>
            </div>
            <div>
                <p>Creemos en el talento y en las oportunidades que puedan desarrollarlo hasta cumplir grandes objetivos. Nuestro propósito es que cualquier joven talentoso pueda lograr sus metas sin limitaciones y cambiar positivamente el mundo por medio de proyectos de impacto. Para ello, contamos con el apoyo de fundaciones, organizaciones y filántropos que aportan a nuestro programa de becas.</p>
                <p>Al ser admitidos en UVG, nuestros futuros estudiantes tienen la posibilidad de aplicar a varias opciones financieras para estudiar una de nuestras carreras. Pueden aplicar a una beca o un crédito, o una combinación de ambos, así como ser beneficiarios de la Beca por liderazgo en ciencias para la Licenciatura en Matemática Aplicada o la Licenciatura en Química. </p>
                <p>Para iniciar el proceso de solicitud de ayuda financiera, los futuros estudiantes deben llenar un formulario en el portal de Admisiones en línea, en donde han llevado el seguimiento de su proceso de admisión, e incluir la papelería requerida tomando en cuenta las fechas establecidas. Al ser admitidos, la opción para solicitar la ayuda financiera estará habilitada automáticamente. Mientras más pronto apliquen durante el año, tendrán mayores posibilidades de acceder al programa.</p>
            </div>
            <div>

            </div>
        </div>
    )
}