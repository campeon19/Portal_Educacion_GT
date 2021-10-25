import React from 'react'
import './Becas.css'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'

export default function Becas(props) {
    const history = useHistory();
    const becaClickHandler = () =>{
        console.log(props.beca.id)
        if(props.beca.id == 0){
            history.push({
                pathname: `/becas/Beca_UVG`
            });
        } else if(props.beca.id == 1){
            history.push({
                pathname: `/becas/Beca_FJBG`
            });
        }
    }

    return (
        <div className='container'>
            <div className='beca-card' onClick={becaClickHandler}>
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