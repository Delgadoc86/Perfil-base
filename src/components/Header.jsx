// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4">
      <h1 className="text-3xl font-bold">Mi Portafolio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#projects">Trabajos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
