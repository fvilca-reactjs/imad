import React from "react";
import "./listado-productos.scss";
import "./listado-productos_.scss";
import '../../scss/componentes/titulos.scss';
import '../../scss/componentes/titulos_.scss';
import { NavLink, useLocation } from "react-router-dom";
// import { image_list_izaje, image_list_concavos, image_list_plataformas, image_list_fajas, image_list_grating } from "../data"

import { product_images } from '../data2.jsx'



export default function ListadoProductos({ title, route }) {

    const loc = useLocation();
    console.log('Listado Produtos - loc:', loc.pathname)

    return (
        <div className="container-listado">
            <p className="title-listado">{title}</p>
            <p className="nro-images">{product_images[route].length} productos</p>

            <div className="image-list">
                {product_images[route].map((item, index) => (
                    <NavLink to={`/productos/${route}/${index}`}>
                        <img src={item.path} alt={index} />
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

