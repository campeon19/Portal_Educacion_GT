import React from 'react'
import BecasCard from '../Becas/Becas'
import imgHeader from '../Becas/Assets/becas_header.jpg'
import './BecasScreen.css'

export default function Becas() {
    return (
        <div>
            <div className='container-size'>
                <img className='img-header' src={imgHeader} />
            </div>
            <div>
                <BecasCard />
                <BecasCard />
                <BecasCard />
                <BecasCard />
            </div>
        </div>
    )
}