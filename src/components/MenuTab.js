import React from "react";

export default function MenuTab(props) {
  const style = {
    fontSize: "3rem",
    margin: "0",
  };

  return (
    <div className="menu" id={props.id}>
      <h2 style={style}>{props.title}</h2>

      <div className="menu-tab">
        <div className="menu-img bordered">
          <img src={props.image} alt="" />
        </div>
        <div className="menu-table bordered">
          <table>{props.table}</table>
        </div>
      </div>
    </div>
  );
}
