import React from "react";
import "./intro-ingenieria.scss";
import "./intro-ingenieria_.scss";
import '../../scss/componentes/titulos.scss';
import '../../scss/componentes/titulos_.scss';

export default function IntroIngenieria() {

    ////////////////////////////////////////////////
    return (
        <div className="container-intro--ingenieria">
            <div className="superior"></div>

            <div className="inferior">

                <div className="titulos-pages-sec">
                    <p className="tit-pro">Proyectos de</p>
                    <p className="tit-man">Ingenieria</p>
                    <p className="tit-inn">Innovadores</p>

                    <div className="mensaje-man">
                        <div>
                            Nuestro equipo de especialistas se encargará de apoyar, el desarrollo del proyecto de principio a fin.
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

