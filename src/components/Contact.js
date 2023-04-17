import React from "react";
import WhatsApp from "../images/whatsapp.png";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Kontakt</h2>
        <div className="img-container">
        <a href="https://wa.me/4917643234283?text=Bestellen%20Sie%20bei%20uns">
          <img src={WhatsApp} alt="WhatsApp icon" />
        </a>
        </div>
      </div>
    </section>
  );
}
