import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: "ArgentBank website",
    image: "/image/argentbank.webp",
    link: "https://github.com/BenJ-ou/ArgentBank-website",
    description: "html, css,js, react,redux",
    detailedDescription: "J'ai développé le front-end d'une application bancaire avec React et Redux, intégrant des appels API pour connecter le client et le serveur. J'ai créé un tableau de bord responsive, géré l'état global avec Redux, et utilisé Swagger pour documenter l'API. Ce projet m'a permis de travailler sur une application full-stack avec Node.js.",
    year: 2024,
  },
  {
    title: "Ninacarducci Portfolio",
    image: "/image/Ninacarducci.png",
    link: "https://benj-ou.github.io/ninacarducci.github.io/",
    description: "html, js , Optimiser référencement",
    detailedDescription:"J'ai optimisé le référencement, la performance et l'accessibilité d'un site en identifiant les problèmes et en appliquant des améliorations avec des outils comme Lighthouse et Wave. J'ai ensuite créé un rapport montrant les résultats avant et après les modifications.",
    year: 2024,
  },
  {
    title: "Projet architecte sophie bluel",
    image: "/image/SophieB.JPG",
    link: "https://benj-ou.github.io/Portfolio-architecte-sophie-bluel/FrontEnd/index.html",
    description: "html, css, javascript",
    detailedDescription:"J'ai créé une page web dynamique pour une architecte d'intérieur en utilisant JavaScript et une API. J'ai développé la présentation des travaux, une page de connexion administrateur et une modale pour uploader des médias. Ce projet m'a permis de maîtriser la gestion des événements et la manipulation du DOM.",
    year: 2024,
  },
 
  {
    title: "Print it!",
    image: "/image/print-it.PNG",
    link: "https://benj-ou.github.io/Print-it-JS/",
    description: "html, css, javascript.",
    detailedDescription:"J'ai ajouté un carrousel interactif à un site d'imprimerie statique en utilisant JavaScript. Ce projet m'a permis de découvrir comment JavaScript interagit avec HTML et CSS pour dynamiser un site web.",
    year: 2024,
  },
  {
    title: "Ohmyfood",
    image: "/image/ohmyfood.webp",
    link: " https://benj-ou.github.io/Prince_Benjamin_ohmyfood_22.09.23/",
    description: "html, css.",
    detailedDescription:"J'ai travaillé sur l'interface mobile-first du site d'une start-up, en intégrant une maquette avec Sass et des animations CSS. Ce projet m'a permis de concevoir un site réactif, d'améliorer l'expérience utilisateur avec des animations, et d'optimiser le CSS avec Sass. J'ai également versionné mon travail avec Git et GitHub.",
    year: 2023,
  },
  {
    title: "Booki",
    image: "/image/booki.webp",
    link: "https://github.com/BenJ-ou/booki-starter-code/tree/Booki",
    description: "html, css.",
    detailedDescription:"Une page d'accueil responsive pour une agence de voyage en utilisant HTML et CSS, en intégrant des maquettes Figma pour mobile, tablette et desktop. Ce projet m'a permis de développer des compétences en design responsive et en structuration de code pour différents appareils.",
    year: 2023,
  },
];

const Projects = () => {
  return (
    <section id="projects-section" className="projects-section">
      <h1>Projets réalisés</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <a
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
              href={project.link}
            >
              <div className="card-content">
                <img src={project.image} alt={project.title} />
                <div className="project">
                  <h4>{project.title}</h4>
                  <p className="description">{project.description}</p>
                  <p className="dates">{project.year}</p>
                  <div className="detailed-description">
                    {project.detailedDescription}
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;