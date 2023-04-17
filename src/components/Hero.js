import React from "react";
import burger from "../images/burger.png";

export default function Hero(props) {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero-content ">
            <h1><snap>{props.title1}</snap> <snap>{props.title2}</snap></h1>
            <h2>{props.subtitle}</h2>
            <div className="cta-buttons">
              <button className="cta-primary">Jetzt bestellen</button>
                <button className="cta-secondary"><a href="#menu">Menü ansehen</a></button>
            </div>
          </div>
          <div className="hero-image">
            <img className="" src={burger} alt="Turkish doner" />
          </div>
        </div>
      </div>
    </section>
  );
}
