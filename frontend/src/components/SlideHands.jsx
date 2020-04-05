import React from "react";
import "../assets/styles/components/SlideHands.scss";
import stepClean from "../assets/static/stepOne.png";

const SlideHands = () => {
  return (
    <section className="slide-container">
      <div className="slide-container__text">
        <p>Paso 1</p>
      </div>
      <div className="slide-container__image">
        <img src={stepClean} alt="paso 2" />
      </div>
    </section>
  );
};

export default SlideHands;
