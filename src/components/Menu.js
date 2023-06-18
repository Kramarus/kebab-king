import React, { useState } from "react";
import Doner from "./Doner";
import MenuTab from "./MenuTab";

import donerMenu from "../menu/doner.js";
import donerImg from "../images/doner2.png";

import lahmacunMenu from "../menu/lahmacun.js";
import lahmacunImg from "../images/lahmacun.png";

import schnitzelMenu from "../menu/schnitzel.js";
import schnitzelImg from "../images/schnitzel.png";

import pizzaMenu from "../menu/pizza.js";
import pizzaImg from "../images/pizza.png";

import pizzaBrotchenMenu from "../menu/pizzabroetchen.js";
import pizzaBrotchenImg from "../images/pizzaBR.png";

import pommesMenu from "../menu/pommes";
import pommesImg from "../images/pommes.png";

import imbissMenu from "../menu/imbiss";
import imbissImg from "../images/imbiss.png";

import burgerMenu from "../menu/burger";
import burgerImg from "../images/burger.png";

import salateMenu from "../menu/salate";
import saladImg from "../images/salad.png";

import vegetarischMenu from "../menu/vegetarisch";
import vegetarischImg from "../images/falafel.png";

import drinksMenu from "../menu/getranke";
import drinksImg from "../images/drinks.png";

import saucesMenu from "../menu/sauces";
import saucesImg from "../images/sauces.png";

export default function Menu(props) {
  let groups = [
    "Döner",
    "Lahmacun",
    "Schnitzel",
    "Pizza",
    "Pizzabrötchen",
    "Pommes",
    "Imbiss",
    "Burger",
    "Salate",
    "Vegetarisch",
    "Getränke",
    "Sauces",
  ];

  const [activeTab, setActiveTab] = useState(groups[0]);

  groups = groups.map((group) => (
    <li>
      <a
        href={"#" + group}
        className={activeTab === group ? "menu-tab active" : "menu-tab"}
        key={group}
        onClick={() => setActiveTab(group)}
      >
        {group}
      </a>
    </li>
  ));

  return (
    <section id="menu">
        <ul class="menu-tabs">{groups}</ul>      
      <div className="container">
        <MenuTab addToCard={props.addToCard} id="Döner" title="Döner" table={donerMenu} image={donerImg} />
        <MenuTab
          id="Lahmacun"
          title="Lahmacun"
          table={lahmacunMenu}
          image={lahmacunImg}
        />
        <MenuTab
          id="Schnitzel"
          title="Schnitzel"
          table={schnitzelMenu}
          image={schnitzelImg}
        />
        <MenuTab id="Pizza" title="Pizza" table={pizzaMenu} image={pizzaImg} />
        <MenuTab
          id="Pizzabrötchen"
          title="Pizzabrötchen"
          table={pizzaBrotchenMenu}
          image={pizzaBrotchenImg}
        />
        <MenuTab
          id="Pommes"
          title="Pommes"
          table={pommesMenu}
          image={pommesImg}
        />
        <MenuTab
          id="Imbiss"
          title="Imbiss"
          table={imbissMenu}
          image={imbissImg}
        />
        <MenuTab
          id="Burger"
          title="Burger"
          table={burgerMenu}
          image={burgerImg}
        />
        <MenuTab
          id="Salate"
          title="Salate"
          table={salateMenu}
          image={saladImg}
        />
        <MenuTab
          id="Vegetarisch"
          title="Vegetarisch"
          table={vegetarischMenu}
          image={vegetarischImg}
        />
        <MenuTab
          id="Getränke"
          title="Getränke"
          table={drinksMenu}
          image={drinksImg}
        />
        <MenuTab
          id="Sauces"
          title="Sauces"
          table={saucesMenu}
          image={saucesImg}
        />
      </div>
    </section>
  );
}
