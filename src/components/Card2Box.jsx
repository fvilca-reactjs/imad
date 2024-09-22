import React from 'react'
import ButtonVerMas from './ButtonVerMas'
import '../scss/componentes/card-2-box.scss'
import '../scss/componentes/card-2-box_.scss'
import CounterImage from './CounterImage'
import { useInView, animated as a } from '@react-spring/web'


export default function Card2Box({ image, title, children, number }) {

    const [ref, isInView] = useInView();    

    return (
        <div className='card2col--container'>

            <div className="card2col--box1">

                <a.div className="card2col--image" ref={ref} style={{ opacity: isInView ? 1 : 0,filter: isInView ? 'saturate(70%) brightness(148%)' : 'saturate(0%) brightness(190%)', transition: "1s ease-in-out" }}>
                {/* <a.div className="card2col--image" ref={ref} style={{ opacity: isInView ? 1 : 0, transition: "1s ease-in-out" }}> */}
                    <img src={image} alt='card' />
                    <div className="card2col-counter--image">
                        <CounterImage number={number} />
                    </div>
                    <div className="square"></div>
                </a.div>



                <div className="square"></div>
            </div>

            <div className="card2col--box2">
                <div className='card2col--title'>{title}</div>
                <div className="card2col--space"></div>
                <div className='card2col--text'>{children}</div>

                {/* <div className="card2col-vermas">
                    <ButtonVerMas />
                </div> */}
            </div>



        </div>
    )
}

