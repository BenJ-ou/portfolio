import React from 'react';
import ExperienceItem from './ExperienceItem'; 
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      icon: 'fa-star',
      title: 'Alternance Marco Vasco',
      year: '2023-2024',
      location: 'Lyon ',
      description: 'Agence de Voyage - Front-end - Svelte - Typescript',
    },
    {
      icon: 'fa-star',
      title: 'Formation Oppenclassrooms',
      year: '2023-2024',
      location: 'Lyon - Distanciel',
      description: 'Intégrateur web',
    },
    {
      icon: 'fa-star',
      title: 'Stage Kaffein Agency',
      year: '2022',
      location: 'Champagne au mont d\'or',
      description: 'Projet Javascript - Intégration blog Kaffein - Html - CSS - Tailwind.',
    },
    {
      icon: 'fa-home',
      title: 'Formation développeur-web',
      year: '2021-2022',
      location: 'Chambre des commerces et de l\'industrie de Roanne (CCI)',
      description: 'HTML/CSS- Javascript - PHP - MYSQL - Symfony - Wordpress.',
    },
    {
      icon: 'fa-star',
      title: 'Master MEEF',
      year: '2018-2021',
      location: 'INSPÉ Académie de Lyon - Université Lyon 1',
      description: 'Apprendre à apprendre - Atelier numérique - Mise en situation professionnelle - Anglais.',
    },
    {
      icon: 'fa-rocket',
      title: 'Licence de Lettre/Art du spectacle',
      year: '2014-2017',
      location: 'Faculté Université Lumière Lyon 2',
      description: 'Droit et économie - Théorie et accompagnement de la création.',
    },
  ];

  return (
    <section id="experience" className="experience-formation text-xl">
      <h1>Expériences</h1>
      <div className="wrapper">
        <div className="center-line">
          <a href="#experience" className="scroll-icon">
            <i className="fas fa-caret-up"></i>
          </a>
        </div>
        {experiences.map((exp, index) => {
          const rowClass = index % 2 === 0 ? 'row-1' : 'row-2'; 
          return (
            <div className={`row ${rowClass}`} key={index}>
              <ExperienceItem
                icon={exp.icon}
                title={exp.title}
                year={exp.year}
                location={exp.location}
                description={exp.description}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
