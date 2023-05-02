import React from "react";
import burger from "../images/burger.png";
import doner from "../images/doner.png";
import wochenmenu from "../menu/wochenangebot.js";

export default function Hero(props) {
  const d = new Date();
  let day = d.getDay();
  switch (day) {
    case 0:
      day = "Sonntag";
      break;
    case 1:
      day = "Montag";
      break;
    case 2:
      day = "Dienstag";
      break;
    case 3:
      day = "Mittwoch";
      break;
    case 4:
      day = "Donnerstag";
      break;
    case 5:
      day = "Freitag";
      break;
    case 6:
      day = "Samstag";
      break;
    default:
      day = "Falscher Tag";
      break;
  }

  function handleClick() {
    document.getElementById("wochenmenu").style.display = "block";
  }

  function closeModal() {
    document.getElementById("wochenmenu").style.display = "none";
  }

  const tagesMenu = (item) => {
    return (
      <>
        <h2>{item.weekday + 'sangebot'}</h2>
        <table>
          {item.menu.map((item) => (
            <tr>
              <td>
                <div>
                  <h3 className="menu-item">{item.name}</h3>
                  <p className="menu-comment">{item.comment}</p>
                </div>
              </td>
              <td>
                <h3>{item.price ? item.price.toFixed(2) + "€" : null}</h3>
              </td>
            </tr>
          ))}
        </table>
      </>
    );
  };

  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero-content ">
            <h1>
              <snap>{props.title1}</snap> <snap>{props.title2}</snap>
            </h1>
            <h2>{props.subtitle}</h2>
            <div className="cta-buttons">
              <button className="cta-primary">
                <a onClick={handleClick}>Wochenangebot</a>
              </button>
              <button className="cta-secondary">
                <a href="#menu">Menü ansehen</a>
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img className="" src={doner} alt="Turkish doner" />
          </div>
        </div>
      </div>
      <div id="wochenmenu" class="modal">
        <div class="modal-content">
          <div className="header">
              <span className="close" onClick={closeModal}>
                x
              </span>
          </div>
          <div className="menu-table">
            {wochenmenu.map((item) =>
              item.weekday === day ? tagesMenu(item) : null
            )}
          </div>
          <div className="footer">
            <button className="cta cta-secondary" onClick={closeModal}>
              Schließen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
