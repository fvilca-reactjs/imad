import React from "react";
import "./about-us2.scss";
import "./about-us2_.scss";
import Card from "../../components/Card";
import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'

export default function AboutUs2() {

    ////////////////////////////////////////////////
    return (
        <div className="container-about-us2">

            <Card icon={icon3} title='INGENIERIA'>
                Todos nuestros productos son desarrollados aplicando estándares internacionales e ingeniería.
            </Card>
            <Card icon={icon2} title='MANUFACTURA'>
                Nuestro equipo conformado por especialistas se encargará de desarrollar tus proyectos de principio a fin.
            </Card>
            <Card icon={icon1} title='PRODUCTOS'>
                Nuestras fabricaciones cumplen con los estándares de calidad y seguridad en todos los procesos empleados.
            </Card>

            <div className="worker-image">
                
            </div>

        </div>
    );
}

