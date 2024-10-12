// src/components/ContactForm.jsx
import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Contacto</h2>
      <form className="mt-6 max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Nombre:</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email:</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">Mensaje:</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" id="message" rows="4" required></textarea>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300" type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
