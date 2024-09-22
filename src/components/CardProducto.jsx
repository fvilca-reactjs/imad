import React from 'react'
import ButtonVerMas from './ButtonVerMas'
import CounterImage from './CounterImage'

import '../scss/componentes/card_producto.scss'
import '../scss/componentes/card_producto_.scss'


export default function CardProducto({ image, title, number }) {
    return (
        <div className='card-container--producto'>
            <div className='producto-card--title'>{title}</div>

            <div className='producto-card--image' style={{ backgroundImage: `url(${image})` }} >

                <div className="card2col-counter--image">
                    <CounterImage number={number} />
                </div>

            </div>

            <div className="vermas-container">
                <div className="square"></div>
                VER 
            </div>
        </div>
    )
}
