import React, { useState, useRef, useEffect } from "react";
import "../assets/styles/components/SlideHands.scss";
import step1Clean from "../assets/static/1.svg";
import step2Clean from "../assets/static/2.svg";
import step3Clean from "../assets/static/3.svg";
import step4Clean from "../assets/static/4.svg";
import step5Clean from "../assets/static/5.svg";
import step6Clean from "../assets/static/6.svg";
import step7Clean from "../assets/static/7.svg";
import step8Clean from "../assets/static/8.svg";
import step9Clean from "../assets/static/9.svg";
import step10Clean from "../assets/static/10.svg";


const SlideHands = () => {
  const[count, setCount] = useState(1)
  const[id, setId] = useState(0)
  var intervalCount
  function timer(){
    intervalCount = setInterval(() => {
      setCount(count => count +1);
    }, 2880);
    setId(intervalCount)
  }

  function startHandler(e){
    timer()
    console.log("Start")
    
  }
  function endHandler(e) {
    clearInterval(id)
    setCount(1)
  }

  return (
    <section className="slide-container">
        <div className="slide-container__text">
          <p>Paso {count<11? count: 10}</p>
        </div>
        <div className="slide-container__image">
          <figure id="animation" onAnimationStart={startHandler} onAnimationEnd={endHandler}>          
              <img src={step1Clean} alt="paso 1" /> 
              <img src={step2Clean} alt="paso 2" />          
              <img src={step3Clean} alt="paso 3" />          
              <img src={step4Clean} alt="paso 4" />          
              <img src={step5Clean} alt="paso 5" />          
              <img src={step6Clean} alt="paso 6" />          
              <img src={step7Clean} alt="paso 7" />          
              <img src={step8Clean} alt="paso 8" />          
              <img src={step9Clean} alt="paso 9" />
              <img src={step10Clean} alt="paso 10" />  
          </figure>
        </div>
    </section>
  );
};

export default SlideHands;
