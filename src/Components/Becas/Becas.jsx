import React from 'react'
import './Becas.css'


export default function Becas(props) {
    return (
        <div className='container'>
            <div className='beca-card'>
                <div className='row'>
                    <div className='col mx-auto text-center'>
                        <h2 className='font-size-h2-title' >{props.beca.titulo}</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col text-center'>
                        <img className='img-fluid size-img' src={props.beca.img} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col mx-auto text-center'>
                        <p>{props.beca.description}</p>
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