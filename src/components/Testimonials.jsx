// src/components/Testimonials.jsx
import React from 'react';

const testimonials = [
  { name: "Cliente 1", text: "Excelente trabajo, muy profesional." },
  { name: "Cliente 2", text: "Cumplió con todos los plazos y entregó un producto de alta calidad." },
  { name: "Cliente 3", text: "Gran comunicación y resultados impresionantes." },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-center">Testimonios</h2>
      <div className="flex flex-wrap justify-center mt-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="max-w-xs mx-4 my-4 bg-gray-100 rounded-lg p-4 shadow-md flex-1 min-w-[300px]">
            <p className="italic">"{testimonial.text}"</p>
            <p className="mt-2 font-bold text-right">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
