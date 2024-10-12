// src/components/Services.jsx
import React from 'react';

const services = [
  { title: "Desarrollo Web", description: "Creación de sitios web responsivos y modernos." },
  { title: "Desarrollo de Aplicaciones", description: "Desarrollo de aplicaciones para móviles y web." },
  { title: "Consultoría", description: "Asesoría técnica y desarrollo de estrategias digitales." },
];

const Services = () => {
  return (
    <section id="services" className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-center">Servicios</h2>
      <div className="flex flex-wrap justify-center mt-6">
        {services.map((service, index) => (
          <div key={index} className="max-w-xs mx-4 my-4 bg-gray-100 rounded-lg p-4 shadow-md flex-1 min-w-[300px]">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
