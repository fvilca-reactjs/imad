import "./home_page.scss";
import "./home_page__.scss";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Intro from "./Sections/Intro";
import AboutUs from "./Sections/AboutUs";
import AboutUs2 from "./Sections/AboutUs2";
import Tecnologia from "./Sections/Tecnologia";
import Contacto from "./Sections/Contacto";
import logo from '../images/logo.svg'
import Footer from "../components/Footer";
import { useInView, animated as a } from "@react-spring/web";


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

function HomePage() {


  // const [ref_bg, isBg_inView] = useInView();
  // const [ref_intro, isIntro_inView] = useInView();
  const [ref_about1, isAbout1_inView] = useInView();
  const [ref_about2, isAbout2_inView] = useInView();
  const [ref_tech, isTech_inView] = useInView();
  const [ref_cont, isCont_inView] = useInView();
  const [ref_foot, isFoot_inView] = useInView();

  const { pathname, hash } = useLocation();
  useEffect(() => {
    scrollTo_(hash);
  }, [hash, pathname]);

  return (
    <div className="home-page">

      {/* <a.div className="bg bg1" ref={ref_bg} style={{opacity: isBg_inView ? 1 : 0, transition: "1s ease-in-out"}} > */}
      <a.div className="bg bg1"  >
      </a.div>

      <a.section id="intro" >
      {/* <a.section id="intro" ref={ref_intro} style={{opacity: isIntro_inView ? 1 : 0, transition: "2s ease-in-out"}} > */}
        <Intro />
      </a.section>

      <a.section id="section--about--us" ref={ref_about1} style={{opacity: isAbout1_inView ? 1 : 0, transition: "1s ease-in-out",}}>
        <AboutUs />
      </a.section>

      <a.section id="section--about--us2" ref={ref_about2} style={{opacity: isAbout2_inView ? 1 : 0, transition: "1s ease-in-out",}}>
        <AboutUs2 />
      </a.section>

      <a.section id="section--tecnologia" ref={ref_tech} style={{opacity: isTech_inView ? 1 : 0, transition: "1s ease-in-out",}} >
        <Tecnologia />
      </a.section>

      <a.section id="section--contacto" ref={ref_cont} style={{opacity: isCont_inView ? 1 : 0, transition: "1s ease-in-out",}}>
        <Contacto />
      </a.section>

      <a.section id="section--footer" ref={ref_foot} style={{opacity: isFoot_inView ? 1 : 0, transition: "1s ease-in-out",}}>
        <Footer/>
        <div className="copyright">
          Copyright © 2024 <span>IMAD</span> Ingenieria Manufactura Digital 3D y servicios S.A.C. Diseñado por<span> @Fil</span>
        </div>
      </a.section>
    </div>
  );
}

export default HomePage;
