import React from "react";
import WhatsApp from "../images/whatsapp.png";

const whatsAppLink = `https://wa.me/4915906746754?text=Hallo!`;

export default function Contact(props) {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-box">
          {/* <div className="message">{props.message}</div> */}
          <div className="img-container">
            <a href={props.link}>
              <img src={WhatsApp} alt="WhatsApp icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
