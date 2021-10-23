import React from 'react'
import './Becas.css'
import logo from './Assets/logo_uvg.png'

export default function Becas() {
    return (
        <div className='container'>
            <div className='beca-card'>
                <div className='row'>
                    <div className='col mx-auto text-center'>
                        <h2 className='font-size-h2-title' >Becas UVG</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col text-center'>
                        <img className='img-fluid size-img' src={logo} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col mx-auto text-center'>
                        <p>Creemos en el talento y en las oportunidades que puedan desarrollarlo hasta cumplir grandes objetivos. Nuestro propósito es que cualquier joven talentoso pueda lograr sus metas sin limitaciones y cambiar positivamente el mundo por medio de proyectos de impacto.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col mx-auto text-center'>
                        <h4>Enterate de como optar a esta beca aqui</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}