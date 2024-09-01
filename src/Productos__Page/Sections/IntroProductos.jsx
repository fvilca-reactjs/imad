import React from "react";
import "./intro-productos.scss";
import "./intro-productos_.scss";
import '../../scss/componentes/titulos.scss';
import '../../scss/componentes/titulos_.scss';

export default function IntroIngenieria() {

    ////////////////////////////////////////////////
    return (
        <div className="container-intro--productos">
            <div className="superior"></div>

            <div className="inferior">

                <div className="titulos-pages-sec">
                    <p className="tit-pro">Plataformas</p>
                    <p className="tit-man">Izaje</p>
                    <p className="tit-inn">Transportadoras</p>

                    <div className="mensaje-man">
                        <div>
                        Access platform.
                        Below the hook lifting.
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

