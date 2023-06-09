import React from "react";

export default function MenuTab(props) {
  const style = {
    fontSize: "3rem",
    margin: "0",
  };

  return (
    <div className="menu" id={props.id}>
      <h2 onClick={props.addToCard} style={style}>{props.title}</h2>
      <div className="menu-tab">
        <div className="menu-img">
          <img src={props.image} alt="" />
        </div>
        <div className="menu-table">
          <table>{props.table}</table>
        </div>
      </div>
    </div>
  );
}
