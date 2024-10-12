// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Map from './components/Map';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <ContactForm />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
