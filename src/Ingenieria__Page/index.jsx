import "./ingenieria_page.scss";
import "./ingenieria_page__.scss";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import IntroIngenieria from "./Sections/IntroIngenieria";
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

function IngenieriaPage() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    scrollTo_(hash);
  }, [hash, pathname]);

  return (
    <div className="ingenieria-page">

      <div className="bg-ingenieria bg3-ingenieria" >
      </div>

      <section id="ingenieria--intro">
        <IntroIngenieria />
      </section>

      <section id="ingenieria--list">

        <Card2Box image={imagen1} title={'ESCANEO 3D'} number='1'>
          Contamos con equipos de precisión sofisticados para la toma de medidas, garantizando el levantamiento en campo correcto, permitiendo captar la información necesaria para desarrollar la ingeniería que requieres.
        </Card2Box>
        <Card2BoxReverse image={imagen1} title={'TOPOGRAFÍA'} number='2'>
          Levantamiento topográfico para:
          • Mapear e identificar las características del terreno<br />
          • Obtener datos de altura, posición y planitud
        </Card2BoxReverse>

        <Card2Box image={imagen1} title={'PLANOS PARA FABRICACIÓN Y MONTAJE.'} number='3'>
          Contamos con el mejor grupo de diseño especializado en equipos de minería y la industria, respetando las exigencias impartidas por el cliente y satisfaciendo la necesidad del mismo.
        </Card2Box>
        <Card2BoxReverse image={imagen1} title={'MODELAMIENTO 3D'} number='4'>
          Nuestro equipo cuenta con el más amplio conocimiento en modelado 3D de sus proyectos, complementado con la información obtenida del proceso de escaneo 3D.
        </Card2BoxReverse>

        <Card2Box image={imagen1} title={'CÁLCULO ESTRUCTURAL Y SIMULACIÓN'} number='5'>
        Contamos con especialistas en cálculo estrutural, simulación mediante elementos finitos y elementos discretos para analizar el comportamiento de material granular en cintas transportadoras, tolvas de transferencia y estructuras metálicas.
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

export default IngenieriaPage;
