import React from 'react'
import './BecasInfo.css'
import logoUVG from '../Becas/Assets/logoUVG.jpg'
import logo2 from '../Becas/Assets/becaFJBG.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export default function BecasInfo() {
    return (
        <div className='background-style'>
            <div className='container border-container'>
                <div className='img-info'>
                    <img className='img-info2' src={logoUVG}/>
                </div>
                <div className='title-info'>
                    <h1>Becas UVG</h1>
                </div>
                <div className='paragraph-info'>
                    <p>Creemos en el talento y en las oportunidades que puedan desarrollarlo hasta cumplir grandes objetivos. Nuestro propósito es que cualquier joven talentoso pueda lograr sus metas sin limitaciones y cambiar positivamente el mundo por medio de proyectos de impacto. Para ello, contamos con el apoyo de fundaciones, organizaciones y filántropos que aportan a nuestro programa de becas.</p>
                    <p>Al ser admitidos en UVG, nuestros futuros estudiantes tienen la posibilidad de aplicar a varias opciones financieras para estudiar una de nuestras carreras. Pueden aplicar a una beca o un crédito, o una combinación de ambos, así como ser beneficiarios de la Beca por liderazgo en ciencias para la Licenciatura en Matemática Aplicada o la Licenciatura en Química. </p>
                    <p>Para iniciar el proceso de solicitud de ayuda financiera, los futuros estudiantes deben llenar un formulario en el portal de Admisiones en línea, en donde han llevado el seguimiento de su proceso de admisión, e incluir la papelería requerida tomando en cuenta las fechas establecidas. Al ser admitidos, la opción para solicitar la ayuda financiera estará habilitada automáticamente. Mientras más pronto apliquen durante el año, tendrán mayores posibilidades de acceder al programa.</p>
                </div>
                <div className ='subtitle-info'>
                    <h3>Opciones de becas y creditos</h3>
                </div>
                <div className='centrar-info-img'>
                    <div className='row espaciado-img'>
                        <div className='col-sm'>
                            <img src='https://res.cloudinary.com/webuvg/image/upload/f_auto,q_auto,w_340,c_scale,fl_lossy,dpr_1.25/v1588216462/WEB/Admisiones/ayuda_financiera/Beca.png'/>
                        </div>
                        <div className='col-sm'>
                            <img src='https://res.cloudinary.com/webuvg/image/upload/f_auto,q_auto,w_340,c_scale,fl_lossy,dpr_1.25/v1588216462/WEB/Admisiones/ayuda_financiera/Cr%C3%A9dito.png' />
                        </div>
                    </div>
                    <div className='row espaciado-img'>
                        <div className='col-sm'>
                                <img src='https://res.cloudinary.com/webuvg/image/upload/f_auto,q_auto,w_340,c_scale,fl_lossy,dpr_1.25/v1621631277/WEB/Admisiones/ayuda_financiera/Quick_Facts_becas_liderazgo.jpg' />
                        </div>
                        <div className='col-sm'>
                            <img src='https://res.cloudinary.com/webuvg/image/upload/f_auto,q_auto,w_340,c_scale,fl_lossy,dpr_1.25/v1588216462/WEB/Admisiones/ayuda_financiera/cr%C3%A9ditos_BI.png'/>
                        </div>
                    </div>
                    <div className='row espaciado-img'>
                        <div className='col-sm'>
                            <img src='https://res.cloudinary.com/webuvg/image/upload/f_auto,q_auto,w_340,c_scale,fl_lossy,dpr_1.25/v1625854158/WEB/Admisiones/ayuda_financiera/quickfact_beca_potenciaT.jpg' />
                        </div>
                    </div>
                </div>
                <div className ='subtitle-info'>
                    <h3>Proceso para aplicar</h3>
                </div>
                <div className='paragraph-info'>
                    <ol>
                        <li><h5>Completa tu proceso de admision</h5><p>Es requisito haber completado tu prueba de admisión y haber sido admitido</p></li>
                        <li><h5>Completa el formulario de ayuda financiera</h5><p>Cuando estés admitido se te habilitará de forma automática en el portal de Admisiones la opción para aplicar a la ayuda financiera. Debes completar el formulario.</p></li>
                        <li>
                            <h5>Al formulario de ayudas financieras debes adjuntar los siguientes documentos</h5>
                            <ul>
                                <li><p>Solicitante: fotocopia de DPI o partida de nacimiento si es menor de edad y copia de recibo de agua, luz o teléfono.</p></li>
                                <li><p>Padre, madre: copia de recibo de agua, luz o teléfono, fotocopia de DPI de ambos padres y constancia de ingresos y declaración de ISR de ambos padres si los dos trabajan.</p></li>
                            </ul>
                        </li>
                        <li><h5>Analizaremos tu expediente</h5><p>Tu proceso puede requerir una entrevista o visita domiciliar</p></li>
                        <li><h5>Te notificaremos la resolución del comité como un preanálisis</h5><p>Para hacer efectiva y aplicar la ayuda que te comunicamos, debes completar tu proceso de inscripción</p></li>
                    </ol>     
                </div>
                <div className ='link-info'>
                    <a href='https://www.uvg.edu.gt/admisiones/ayuda-financiera/' target="_blank">Conoce más visitando la página de la UVG</a>
                </div>
            </div>
        </div>
    )
}