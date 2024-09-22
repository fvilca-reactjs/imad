import React from "react";
import "./intro-productos.scss";
import "./intro-productos_.scss";
import '../../scss/componentes/titulos.scss';
import '../../scss/componentes/titulos_.scss';
import CardProducto from "../../components/CardProducto";
import categoria_izaje from "../../images/productos/1_Debajo_del_gancho_BTH/4_Herramienta_de_izaje_para_HEAD_de_chancadora_secundaria_v2/2D_800h.jpg"
import categoria_concavos from "../../images/productos/2_Facilidades_para_cambio_de_concavos/10_Soporte_de_spider_chancadora_primaria/Spider_07_800h.jpg"
import categoria_plataformas from "../../images/productos/3_Plataformas_de_acceso/06_Plataforma_de_acceso_a_chancadora_secundaria/Plataforma_trompo_01_800h.jpg"
import categoria_fajas from "../../images/productos/4_Equipos_para_cambio_de_faja_transportadora/1_Belt_winder/3_800h.jpg"
import categoria_grating from "../../images/productos/grating/3.jpg"
// import categoria_grating from "../../images/productos/2_Facilidades_para_cambio_de_concavos/03_Escalera_de_acceso_a_Dump_Pocket/a_800h.png"
import { NavLink } from "react-router-dom";




export default function IntroIngenieria() {

    ////////////////////////////////////////////////
    return (
        <div className="container-intro--productos">
            <div className="superior"></div>

            <div className="inferior">

                <div className="productos-tit">
                    <p className="tit-catalogo">Catalogo de </p>
                    <p className="tit-productos">Productos</p>
                </div>

                <div className="container-card--productos">

                    <NavLink to="/productos/izaje#productos--intro">
                        <CardProducto image={categoria_izaje} title='IZAJE' number='1' />
                    </NavLink>

                    <NavLink to="/productos/concavos#productos--intro">
                        <CardProducto image={categoria_concavos} title='CONCAVOS' number='2' />
                    </NavLink>

                    <NavLink to="/productos/plataformas#productos--intro">
                        <CardProducto image={categoria_plataformas} title='PLATAFORMAS' number='3' />
                    </NavLink>

                    <NavLink to="/productos/fajas#productos--intro">
                        <CardProducto image={categoria_fajas} title='FAJAS' number='4' />
                    </NavLink>
                    <NavLink to="/productos/grating#productos--intro">
                        <CardProducto image={categoria_grating} title='GRATING' number='5' />
                    </NavLink>
                </div>
            </div >

        </div >
    );
}

