import React from "react";
import { NavLink } from "react-router-dom";
import "../scss/componentes/menu_bar.scss";
import "../scss/componentes/menu_bar_.scss";
import logo from '../images/logo.svg'
import { useLocation } from "react-router-dom";

import { useState } from "react";
import { animated as a, useTransition, config } from "@react-spring/web";
import MenuButton from "./MenuButton";



export default function MenuBar() {
  let location = useLocation().pathname;
  // console.log('location-:', location.pathname);

  const [menuActive, setMenuActive] = useState(false);
  const transitions = useTransition(menuActive, {
    from: { transform: "translateX(-100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(100%)" },
    config: config.slow,
  });

  const openMenu = () => {
    setMenuActive(!menuActive)
  }

  const ishome = (location === '/imad/' || location === '/imad')
  console.log('location:', location);

  const style_bg = {
    backgroundColor: ishome ? "rgba( 70, 94, 110, 0)" : "rgba( 70, 94, 110, 0.6)"
  }
  ////////////////////////////////////////////////
  return (
    <nav id="menu-bar" style={style_bg}>

      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="logo" width={200} />
        </div>

        <div className="slogan">
          <p>Tu sueñas</p>
          <p>Nosotros Construimos</p>
        </div>

      </div>

      <MenuButton click={openMenu} active={menuActive} />

      {transitions(
        (style, item) =>
          item && (
            <a.div className="menu-container" style={style}>

              <h1 className="menu-text">Menu</h1>

              <NavLink end activeClassName="current" to="/imad" onClick={() => (setMenuActive(false))}>
                <h1>  Inicio </h1>
              </NavLink>

              <NavLink end activeClassName="current" to="/manufactura" onClick={() => (setMenuActive(false))}>
                <h1>Manufactura</h1>
              </NavLink>

              <NavLink end className="current" to="/ingenieria" onClick={() => (setMenuActive(false))}>
                <h1>Ingenieria</h1>
              </NavLink>

              <NavLink end activeClassName="current" to="/productos" onClick={() => (setMenuActive(false))}>
                <h1>Productos</h1>
              </NavLink>

            </a.div>
          )
      )}

      <div className="links">
        <NavLink className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        } to="/imad">
          Inicio
        </NavLink>

        <NavLink to="/manufactura">
          Manufactura
        </NavLink>

        <NavLink to="/ingenieria">
          Ingenieria
        </NavLink>

        <NavLink to="/productos">
          Productos
        </NavLink>
      </div>

    </nav>
  );
}
