import "./productos_page.scss";
import "./productos_page__.scss";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import IntroProductos from "./Sections/IntroProductos";
import Card2Box from "../components/Card2Box";
import imagen1 from '../images/estructuras_metalicas3.jpg'
import Card2BoxReverse from "../components/Card2BoxReverse";


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
