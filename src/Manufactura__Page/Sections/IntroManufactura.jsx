import React from "react";
import "./intro-manufactura.scss";
import "./intro-manufactura_.scss";
import '../../scss/componentes/titulos.scss';
import '../../scss/componentes/titulos_.scss';

export default function IntroManufactura() {

    ////////////////////////////////////////////////
    return (
        <div className="container-intro--manufactura">
            <div className="superior"></div>

            <div className="inferior">

                <div className="titulos-pages-sec">
                    <p className="tit-pro">Proyectos de</p>
                    <p className="tit-man">Manufactura</p>
                    <p className="tit-inn">Innovadores</p>

                    <div className="mensaje-man">
                        <div>
                            Nuestras fabricaciones cumplen con estándares de calidad y seguridad en sus procesos de fabricación.

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

