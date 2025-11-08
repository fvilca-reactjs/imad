import React from "react";
import "./intro.scss";
import "./intro_.scss";
import Button from "../../components/Button";
import Whatsapp from '../../images/whatsapp_2.png'
import Call from '../../images/call.png'
import Estadistica from "../../components/Estadistica";
import { useInView, animated as a } from "@react-spring/web";
import { NavLink } from "react-router-dom";

export default function Intro() {

    const [ref1, ist1InView] = useInView();
    const [ref2, ist2InView] = useInView();
    const [ref3, ist3InView] = useInView();
    ////////////////////////////////////////////////
    return (
        <div className="container-intro">
            <div className="superior"></div>

            <div className="inferior">
                <div className="container-gif"></div>

                <div className="titulos">
                    <div className='wrapper' ref={ref1}>
                        <a.p className="tit-pro" style={{ transform: ist1InView ? 'translateY(0%)' : 'translateY(100%)', transition: "all 1000ms cubic-bezier(0.165, 0.840, 0.440, 1.000)" }}>Proyectos de</a.p>
                    </div>

                    <div className='wrapper' ref={ref2}>
                        <a.p className="tit-ing" style={{ transform: ist2InView ? 'translateY(0%)' : 'translateY(100%)', transition: "all 1000ms cubic-bezier(0.165, 0.840, 0.440, 1.000)" }}>Ingenieria</a.p>
                    </div>
                    <div className='wrapper' ref={ref3}>
                        <a.p className="tit-inn" style={{ transform: ist3InView ? 'translateY(0%)' : 'translateY(100%)', transition: "all 1000ms cubic-bezier(0.165, 0.840, 0.440, 1.000)" }}>Innovadores</a.p>
                    </div>



                    <div className="par">
                        <div className="mensaje0">
                            <div>
                                Nuestros diseños están orientados a solucionar problemas de forma <span>segura</span>, <span>eficiente</span> y <span> rápida</span>.
                            </div>

                            <NavLink to="/productos">
                                <Button button_title='VER PRODUCTOS' />
                            </NavLink>
                        </div>
                        <div className="estadistica-movil">
                            <Estadistica />
                        </div>

                    </div>

                </div>

                <div className="estadistica-desktop">
                    <Estadistica />
                </div>

            </div>

            <div className="container-whatsapp">
                <a href='https://wa.link/g3st2l'>
                    <img src={Whatsapp} alt="whatsapp" />
                    <span className="whatsapp">Ingenieria</span>
                </a>
                <a href='https://wa.link/gl2xws'>
                    <img src={Whatsapp} alt="whatsapp" />
                    <span className="whatsapp">Gerencia</span>
                </a>


                {/* <a href='#section--contacto' >
                    <img src={Email} alt="email" />
                    <span className="email" >Cotizaciones</span>
                </a> */}
                <a href="#section--contacto">
                    <img src={Call} alt="visit" />
                    <span className="visit">Contacto</span>
                </a>


            </div>




        </div>
    );
}

