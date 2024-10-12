// src/components/Map.jsx
import React from 'react';

const Map = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center">Ubicación</h2>
      <div className="mt-4 flex justify-center">
        <iframe 
          title="Ubicación" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097736!2d144.95373531531967!3d-37.81720997975175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0b4d23bd%3A0x3d7c1c9e4c27d91d!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633643129588!5m2!1sen!2sau" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
