import "./manufactura_page.scss";
import "./manufactura_page__.scss";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import IntroManufactura from "./Sections/IntroManufactura";
import Card2Box from "../components/Card2Box";
import imagen1 from '../images/estructuras_metalicas3.jpg'
import imagen2 from '../images/pintado.jpeg'
import imagen3 from '../images/mecanizado.jpeg'
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

function ManufacturaPage() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    scrollTo_(hash);
  }, [hash, pathname]);

  return (
    <div className="manufactura-page">

      <div className="bg-manufactura bg3-manufactura" >
      </div>

      <section id="manufactura--intro">
        <IntroManufactura />
      </section>

      <section id="manufactura--list">

        <Card2Box image={imagen1} title={'ESTRUCTURAS METALICAS'} number='1'>
          Contamos con amplia experiencia en el desarrollo de proyectos y fabricaciones empleando procesos de fabricación correctos, óptimos y seguros, así como estándares de calidad.
        </Card2Box>
        <Card2BoxReverse image={imagen2} title={'PREPARADO Y PINTADO DE SUPERFICIES'} number='2'>
          • Equipos de pintura especializados segun SSPC<br />
          • Correcta adherencia de la pintura<br />
          • Control de calidad y espesor adecuado.
        </Card2BoxReverse>

        <Card2Box image={imagen3} title={'MECANIZADO DE PIEZAS'} number='3'>
          Contamos con amplia experiencia en el desarrollo de proyectos y fabricaciones empleando procesos de fabricación correctos, óptimos y seguros, así como estándares de calidad.
        </Card2Box>



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

export default ManufacturaPage;
