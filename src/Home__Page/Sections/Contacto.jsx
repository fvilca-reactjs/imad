import React from "react";
import "./contacto.scss";
import "./contacto_.scss";
import CounterSection from "../../components/CounterSection";
import Form from "../../components/Form";
import Button from "../../components/Button";
import {  NavLink } from "react-router-dom";
import Arroba from '../../images/arroba.svg'
import Marker from '../../images/marker.svg'

const link_google_maps = 'https://maps.app.goo.gl/U3dJ4zypykxqBQFD6'

export default function Contacto() {

    const click = (second) => { window.open(link_google_maps) }

    ////////////////////////////////////////////////
    return (
        <div className="container-contacto">

            <div className="counter-contacto">
                <CounterSection number='3' name='CONTACTO' />
            </div>
            {/*------------------------------------------------------------------*/}
            <div className="mensaje-contacto">
                
                <p>Contacta con </p>
                <p>Nuestro Equipo </p>

                <div className="contacto-group">
                    <img src={Marker} alt='icon' />
                    <div>Asc. Parque Industrial automotriz (vía de evitamiento Km. 2.5)  Mz. B Lote 18 Cerro Colorado - Arequipa</div>
                </div>

                <div className="contacto-group">
                    <img src={Arroba} alt='icon' />
                    <div>gerencia@imad3d.com.pe</div>
                </div>

                <div className="contacto-group">
                    <img src={Arroba} alt='icon' />
                    <div>ingenieria@imad3d.com.pe</div>
                </div>
                
                <Button button_title={'ABRIR GOOGLE MAPS'} click={click} />

            </div>

            <div className="form-container">
                <Form />
            </div>
            

        </div>
    );
}

