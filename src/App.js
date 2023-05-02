import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Wochenmenu from './components/Wochenmenu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Map from './components/Map';

import "./css/style.css";

function App() {

  const contacts = {
    phone: "+49 159 06746754",
    address: "Corrensstr. 80",
    address2: "48149 Münster"
  }

  const whatsAppLink = `https://wa.me/4915906746754?text=Hallo!`;

  const warenkorb = [];
  const price = 0;
  const contactMessage = 'Bestellung: ' + price;

  function handleAddToCard() {
    alert("It works!");
  }

  return (
    <div className="App">
      <Nav />
      <Hero title1="Willkommen" title2="beim King Kebab" subtitle="Entdecken Sie den besten Döner in Münster!" />
      <Menu addToCard={handleAddToCard} />
      <Wochenmenu />
      <Map />
      <Footer phone={contacts.phone} address={contacts.address} address2={contacts.address2} />
      <Contact link={whatsAppLink} message={contactMessage} />
    </div>
  );
}

export default App;
