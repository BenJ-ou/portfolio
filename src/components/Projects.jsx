import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: "Projet Map",
    image: "/image/map.png",
    link: "https://benjaminprince.github.io/Projet-map-Japon/",
    description: "html, css, javascript.",
    year: 2023,
  },
  {
    title: "Quizz Japon",
    image: "/image/quiz japan 2.png",
    link: "https://benjaminprince.github.io/quizz-html-css-js/",
    description: "html, css, javascript.",
    year: 2023,
  },
  {
    title: "Galerie d'images",
    image: "/image/DALL·E 2023-02-15 13.38.02 fuji.png",
    link: "https://benjaminprince.github.io/Gallerie-d-image-html-css-js/",
    description: "html, css, javascript.",
    year: 2023,
  },
  {
    title: "Projet Blog",
    image: "/image/image.png",
    link: "https://github.com/BenjaminPrince/projet_blog_japon",
    description: "Projet Blog / CMS light, PHP, Twig.",
    year: 2022,
  },
  {
    title: "Projet Grand Froid",
    image: "/image/grand froid.JPG",
    link: "http://bp-grandfroid.projets.simplon-roanne.com",
    description: "Projet découverte de Wordpress.",
    year: 2022,
  },
  {
    title: "Jeu morpion",
    image: "/image/morpion.png",
    link: "https://benjaminprince.github.io/Morpion/",
    description: "html, css, javascript, POO.",
    year: 2022,
  },
  {
    title: "Audio player",
    image: "/image/audio.jpg",
    link: "https://github.com/BenjaminPrince/audio_player/tree/ben",
    description: "html, css, javascript, PHP, JSON.",
    year: 2022,
  },
  {
    title: "DRUMPAD",
    image: "/image/drumpad.png",
    link: "https://benjaminprince.github.io/Drumpad/",
    description: "html, css, javascript, front-end.",
    year: 2021,
  },
  {
    title: "Allo-ciné",
    image: "/image/allo-ciné.png",
    link: "https://benjaminprince.github.io/Projet-allo-cine-main/",
    description: "html, css, javascript.",
    year: 2021,
  },
];

const Projects = () => {
  return (
    <section id="projects-section" className="projects-section">
      <h1>Projets réalisés</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <a className="card-image" target="_blank" rel="noopener noreferrer" href={project.link}>
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
