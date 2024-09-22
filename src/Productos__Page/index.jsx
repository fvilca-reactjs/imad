   import "./productos_page.scss";
import "./productos_page__.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import IntroProductos from "./Sections/IntroProductos";
import ListadoProductos from "./Sections/ListadoProductos";
import DetalleProductos from "./Sections/DetalleProductos.jsx";
import DetalleProductos2 from "./Sections/DetalleProductos2.jsx";

const scrollTo_ = (hash) => {
  if (hash === "") {
    window.scrollTo(0, 0);
  } else {
    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  }
};

function ProductosPage() {

  const { pathname, hash } = useLocation();
  useEffect(() => {
    scrollTo_(hash);
  }, [hash, pathname]);

  return (
    <div className="productos-page">

      <div className="bg-productos bg3-productos" >
      </div>


      <section id="productos--intro">
        <IntroProductos />
      </section>

      <section id="productos--list">
        <Routes>
          <Route path="izaje" element={<ListadoProductos title = "IZAJE DE CARGA"   route='izaje'/>} />
          <Route path="concavos" element={<ListadoProductos title = "FACILIDADES PARA CAMBIO DE CONCAVOS"  route='concavos' />} />
          <Route path="plataformas" element={<ListadoProductos title = "PLATAFORMAS DE ACCESO"   route='plataformas'/>} />
          <Route path="fajas" element={<ListadoProductos title = "FAJAS TRANSPORTADORAS" route='fajas'/>} />
          <Route path="grating" element={<ListadoProductos title = "GRATING"   route = 'grating'/>} />

          <Route path="izaje/:id" element={<DetalleProductos category='izaje'/>} />
          <Route path="concavos/:id" element={<DetalleProductos category='concavos'/>} />
          <Route path="plataformas/:id" element={<DetalleProductos category='plataformas'/>} />
          <Route path="fajas/:id" element={<DetalleProductos category='fajas'/>} />
          <Route path="grating/:id" element={<DetalleProductos category='grating'/>} />

          <Route path="izaje/:id/:id2" element={<DetalleProductos2 category='izaje'/>} />
          <Route path="concavos/:id/:id2" element={<DetalleProductos2 category='concavos'/>} />
          <Route path="plataformas/:id/:id2" element={<DetalleProductos2 category='plataformas'/>} />
          <Route path="fajas/:id/:id2" element={<DetalleProductos2 category='fajas'/>} />
          <Route path="grating/:id/:id2" element={<DetalleProductos2 category='grating'/>} />
    
        </Routes>
      </section>

      <section id="section--footer">
        <Footer />
        <div className="copyright">
          Copyright © 2024 <span>IMAD</span> Ingenieria Manufactura Digital 3D y servicios S.A.C. Diseñado por<span> @Fil</span>
        </div>
      </section>

    </div>
  );
}

export default ProductosPage;
