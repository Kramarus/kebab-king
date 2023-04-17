import React from "react";
import WhatsApp from "../images/whatsapp.png";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Kontakt</h2>
        <div className="img-container">
        <a href="https://wa.me/4915906746754?text=Hallo!">
          <img src={WhatsApp} alt="WhatsApp icon" />
        </a>
        </div>
      </div>
    </section>
  );
}
