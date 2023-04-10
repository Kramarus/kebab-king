import React from "react";

export default function Nav() {
  return (
    <nav>
      <div className="container">
        <a className="logo" href="#"><h2>Kebab King</h2></a>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
