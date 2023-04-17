import React from "react";
import wochenmenu from "../menu/wochenangebot.js";

export default function Wochenmenu() {
  return (
    <section id="wochenmenu" className="container">
      <h2>Wochenangebot</h2>
      <div className="menu-table">
        {wochenmenu.map((item) => (
          <>
            <h3>{item.weekday}</h3>
            <table>
              {item.menu.map((item) => (
                <tr>
                  <td>
                    <div>
                      <h3 className="menu-item">{item.name}</h3>
                      <p className="menu-comment">{item.comment}</p>
                    </div>
                  </td>
                  <td><h3>{item.price ? item.price.toFixed(2) + '€'  : null}</h3></td>
                </tr>
              ))}
            </table>
          </>
        ))}
      </div>
    </section>
  );
}
