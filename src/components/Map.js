import React from "react";

export default function Map() {
  return (
    <section id="map">
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2458.056854992315!2d7.594468076966364!3d51.969388276848576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9ba9f3160ade7%3A0x853cf0a96982e0c7!2sCorrensstra%C3%9Fe%2080%2C%2048149%20M%C3%BCnster!5e0!3m2!1sen!2sde!4v1683041604199!5m2!1sen!2sde"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
