import React from "react";
import "../scss/componentes/counter_image.scss";

export default function CounterImage({ number }) {

  ////////////////////////////////////////////////
  return (
    <div className="container-counter--image">
      <div className="container-number--image">
        <div>0{number}</div>
      </div>
    </div>
  );
}

