// src/components/Projects.jsx
import React from 'react';

const projects = [
  { title: "Proyecto 1", description: "Descripción del Proyecto 1", technologies: "React, Node.js" },
  { title: "Proyecto 2", description: "Descripción del Proyecto 2", technologies: "JavaScript, CSS" },
  { title: "Proyecto 3", description: "Descripción del Proyecto 3", technologies: "HTML, Tailwind CSS" },
];

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Trabajos</h2>
      <div className="flex flex-wrap justify-center mt-6">
        {projects.map((project, index) => (
          <div key={index} className="max-w-xs mx-4 my-4 bg-white rounded-lg p-4 shadow-md flex-1 min-w-[300px]">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <p className="mt-1 text-gray-500">Tecnologías: {project.technologies}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
