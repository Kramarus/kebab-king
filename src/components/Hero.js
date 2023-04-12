import React from "react";
import burger from "../images/burger.png";

export default function Hero(props) {
  return (
    <section id="hero">
      <div className="container bordered">
        <div className="hero bordered">
          <div className="hero-content ">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <div className="cta-buttons">
              <button className="cta-primary">Jetzt bestellen</button>
              <a href="#menu">
                <button className="cta-secondary">Menü ansehen</button>
              </a>
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
