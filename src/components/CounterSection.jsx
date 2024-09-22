import React from "react";
import "../scss/componentes/counter_section.scss";

export default function CounterSection({number, name}) {

  ////////////////////////////////////////////////
  return (
    <>
      <div id="container-counter">
        <div className="container-number">
            <div>0{number}</div>
            <span>/ 03 </span>
        </div>
        <div className="vertical"></div>
        <div className="container-name">{name}</div>
      </div>
    </>
  );
}

