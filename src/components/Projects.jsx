import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: "Projet Map",
    image: "./src/image/map.png",
    link: "https://benjaminprince.github.io/Projet-map-Japon/",
    description: "html,css,javascript.",
    year: 2023,
  },
  // Ajoutez d'autres projets ici
];

const Projects = () => {
  return (
    <section id="projects-section" className="projects-section">
      <h1>Projets réalisés</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <a className="card-image" target="_blank" href={project.link}>
              <img src={project.image} alt={project.title} />
            </a>
            <div className="project">
              <h4>{project.title}</h4>
              <p className="description">{project.description}</p>
              <p className="dates">{project.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
