import React, { useState } from "react";
import donerImg from "../images/doner.png";

import donerMenu from "../menu/doner.js";
import lahmacunMenu from "../menu/lahmacun.js";

export default function Doner() {
  return (
    <>
      <div className="menu-list bordered">
        <div className="col">
          <table>
            {donerMenu.map((item) => ( 
              <tr>
                <td>{item.id}</td>
                <td>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.comment}</p>
                  </div>
                </td>
                <td>{item.price.toFixed(2)} €</td>
              </tr>
            ))}
          </table>
        </div>
        <div className="col">
          <img src={donerImg} alt="" />
        </div>
        
      </div>
    </>
  );
}
