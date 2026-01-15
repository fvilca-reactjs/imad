import React from "react";
import "./about-us2.scss";
import "./about-us2_.scss";
import Card from "../../components/Card";
import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import { useNavigate } from 'react-router-dom';


export default function AboutUs2() {

    
    const navigater = useNavigate();

    function handleNavigaterIngenieria() {
        navigater('/ingenieria');
    }

    function handleNavigaterManufactura() {
        navigater('/manufactura');
    }

    function handleNavigaterProductos() {
        navigater('/productos');
    }
    //==============================================
    return (
        <div className="container-about-us2">

            <Card icon={icon3} title='INGENIERIA' onClick={handleNavigaterIngenieria}>
                Todos nuestros productos son desarrollados aplicando estándares internacionales e ingeniería.
            </Card>
            <Card icon={icon2} title='MANUFACTURA' onClick={handleNavigaterManufactura}>
                Nuestro equipo conformado por especialistas se encargará de desarrollar tus proyectos de principio a fin.
            </Card>
            <Card icon={icon1} title='PRODUCTOS' onClick={handleNavigaterProductos}>
                Nuestras fabricaciones cumplen con los estándares de calidad y seguridad en todos los procesos empleados.
            </Card>

            <div className="worker-image">
                
            </div>

        </div>
    );
}

