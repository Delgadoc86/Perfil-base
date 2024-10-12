import React from 'react';
import portada from '../assets/portada.jpg'; // Ajusta la ruta según tu estructura

const Header = () => {
  return (
    <section 
      className="h-screen bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: `url(${portada})` }} // Usar la imagen importada
    >
      <div className="text-white text-center">
        <h1 className="text-5xl font-bold">Bienvenido a Mi Portafolio</h1>
        <p className="mt-4 text-lg">Aquí encontrarás mis proyectos y servicios.</p>
        <a href="#about" className="mt-8 inline-block bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded">
          Saber Más
        </a>
      </div>
    </section>
  );
};

export default Header;
