import "../scss/componentes/estadistica.scss";
import "../scss/componentes/estadistica_.scss";
import { NavLink } from "react-router-dom";

export default function Estadistica({ button_title, color, click }) {


    ////////////////////////////////////////////////
    return (
        <div className="container-datos">
            <div className="container-proyectos">
                <p>+300</p>
                <div>proyectos realizados</div>
            </div>

            <div className="mensaje">
                Nuestra especialidad es el diseño y fabricacion de herramientas para la <span className="mineria">mineria</span> e <span className="industria">industria</span>  en general
            </div>

            {/* <NavLink className="link-about" to="/home#about">
                Conoce mas <br/>sobre nosotros
            </NavLink> */}

        </div>
    );
}
