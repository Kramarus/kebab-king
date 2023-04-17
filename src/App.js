import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

import "./css/style.css";

function App() {

  const contacts = {
    phone: "+49 123 456 78 90",
    address: "Corrensstr. 80",
    address2: "48149 Münster"
  }

  return (
    <div className="App">
      <Nav />
      <Hero title1="Willkommen" title2="beim Kebab King" subtitle="Entdecken Sie den besten Döner in Münster!" />
      <Menu />
      <Contact phone={contacts.phone} address={contacts.address} address2={contacts.address2} />
      <Footer phone={contacts.phone} address={contacts.address} address2={contacts.address2} />
    </div>
  );
}

export default App;
