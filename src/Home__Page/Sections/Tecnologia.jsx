import React from "react";
import "./tecnologia.scss";
import "./tecnologia_.scss";
import CounterSection from "../../components/CounterSection";
// import ingeniero from "../../images/ingeniero.jpeg"

export default function Tecnologia() {

    ////////////////////////////////////////////////
    return (
        <div className="container-tecnologia">

            <div className="terrain"></div>
            <div className="scanner2"></div>
            <div className="scanner3"></div>
            <div className="counter-tecnologia">
                <CounterSection number='2' name='TECNOLOGIA' />
            </div>

            <div className="tecnologia-mensaje">
                
                <p>Soluciones y  </p>
                <p>Tecnología</p>
                <p>Innovadora</p>
                <span></span>
                <p>
                    Mediciones 3D rapidas y precisas para para interiores y exteriores.
                </p>
            </div>

            <div className="scanner">
                <div></div>
            </div>

        </div>
    );
}

