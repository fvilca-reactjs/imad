import React from "react";
import "./intro.scss";
import "./intro_.scss";
import CounterSection from "../../components/CounterSection";
import Button from "../../components/Button";
import Whatsapp from '../../images/whatsapp.png'
import ArrowDown from '../../images/arrow-down.svg'
import Estadistica from "../../components/Estadistica";
import { useInView, animated as a } from "@react-spring/web";

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
                    <div  className='wrapper' ref={ref1}>
                        <a.p className="tit-pro" style={{ transform: ist1InView ? 'translateY(0%)' : 'translateY(100%)', transition: "all 1000ms cubic-bezier(0.165, 0.840, 0.440, 1.000)" }}>Proyectos de</a.p>
                    </div>

                    <div  className='wrapper' ref={ref2}>
                        <a.p className="tit-ing" style={{ transform: ist2InView ? 'translateY(0%)' : 'translateY(100%)', transition: "all 1000ms cubic-bezier(0.165, 0.840, 0.440, 1.000)"   }}>Ingenieria</a.p>
                    </div>
                    <div  className='wrapper' ref={ref3}>
                        <a.p className="tit-inn" style={{ transform: ist3InView ? 'translateY(0%)' : 'translateY(100%)', transition: "all 1000ms cubic-bezier(0.165, 0.840, 0.440, 1.000)" }}>Innovadores</a.p>
                    </div>



                    <div className="par">
                        <div className="mensaje0">
                            <div>
                                Nuestros diseños están orientados a solucionar problemas de forma <span>segura</span>, <span>eficiente</span> y <span> rápida</span>.
                            </div>

                            <Button button_title='VER PRODUCTOS' />

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
                <a href='https://wa.link/u8hh8w'
                    className="whatsapp">
                    <img src={Whatsapp} alt="whatsapp" />
                </a>
                <img src={ArrowDown} alt="whatsapp" className="arrow-down-whatsapp" />

            </div>

            <div className="container-iconos">
                <CounterSection number='1' name='SOBRE NOSOTROS' />
            </div>




        </div>
    );
}

