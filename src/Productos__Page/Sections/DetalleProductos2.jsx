import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./detalle_productos.scss";
import "./detalle_productos_.scss";
import { product_images } from '../data2.jsx'
import Form from "../../components/Form";

export default function DetalleProductos2({ category }) {

    const { id, id2 } = useParams();
    console.log('id:id2', id, ':', id2)
    // console.log('variantes: ', product_images[category][id].variants.length)

    return (
        <div className="detalle-container">

            <div className="box1">
                <img src={product_images[category][id].variants[id2].path} alt={id2} />

            </div>

            <div className="box">
                {product_images[category][id].variants.map(
                    (item, index) => (
                        <NavLink to={`/productos/${category}/${id}/${index}`}>
                            <img src={item.path} alt={id} width={100} height={100} />
                        </NavLink>
                    )
                )}
            </div>
            <div className="box2">
                <Form title={product_images[category][id].name} link={'http://localhost:3000/productos/' + category + '/' + id} />
            </div>

        </div>
    );
}

