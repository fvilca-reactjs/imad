import React from "react";
import "../scss/componentes/footer.scss";
import "../scss/componentes/footer_.scss";
// import { NavLink } from "react-router-dom";
import logo from '../images/logo.svg'

export default function Footer() {

    ////////////////////////////////////////////////
    return (
        <div className="container-footer">

            <div className="logo-resumen">
                <img src={logo} alt="logo" className="logo-footer" width={100} />
                <div className="resumen-footer">
                    IMAD S.A.C. es una empresa especializada en el diseño, maquinado, reconstrucción de piezas de maquinaria minera e industrial, así mismo en la fabricación y montaje de estructuras metálicas, recuperación de piezas mediante soldadura, mantenimiento correctivo, preventivo y predictivo de equipos mineros e industriales.
                </div>
            </div>{/**************************************** */}

            <div className="links-footer">
                <h1>Links</h1>

                <ul>
                    <li>Inicio</li>
                    <li>Ingenieria</li>
                    <li>Manufacura</li>
                    <li>Productos</li>
                </ul>


            </div>{/**************************************** */}

            <div className="horario-footer">
                <h1>Horario de Trabajo</h1>
                <p>Lunes - Viernes . . . . . . . . . . . . 8:00 am -  7:00 pm</p>
                <p>Sabado . . . . . . . . . . . . . . . . . . 8:00 am -  7:00 pm</p>
                <p>Domingo . .  . . . . . . . . . . . . . . . Cerrado</p>
            </div>{/**************************************** */}

        </div>
    );
}

