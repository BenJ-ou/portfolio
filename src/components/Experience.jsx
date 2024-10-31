import React from 'react';
import Contact from './Contact'; 
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-formation text-xl">
      <h1>Expériences</h1>
      
      <div className="wrapper"> 
        <div className="center-line">
          <a href="#experience" className="scroll-icon">
            <i className="fas fa-caret-up"></i>
          </a>
        </div>

        <div className="row row-2">
          <section>
            <i className="icon fas fa-star"></i>
            <div className="details">
              <span className="title">Stage Kaffein Agency</span>
              <span>2022</span>
            </div>
            <p>Champagne au mont d'or</p>
            <i>Projet Javascript - Intégration blog Kaffein - Html - CSS - Tailwind.</i>
          </section>
        </div>

        <div className="row row-1">
          <section>
            <i className="icon fas fa-home"></i>
            <div className="details">
              <span className="title">Formation développeur-web</span>
              <span>2021-2022</span>
            </div>
            <p>Chambre des commerces et de l'industrie de Roanne (CCI)</p>
            <i>HTML/CSS- Javascript  -PHP - MYSQL - Symfony - Wordpress.</i>
          </section>
        </div>

        <div className="row row-2">
          <section>
            <i className="icon fas fa-star"></i>
            <div className="details">
              <span className="title">Master MEEF</span>
              <span>2018-2021</span>
            </div>
            <p>INSPÉ Académie de Lyon - Université Lyon 1</p>
            <i>Apprendre à apprendre - Atelier numérique - Mise en situation professionnelle - Anglais.</i>
          </section>
        </div>

        <div className="row row-1">
          <section>
            <i className="icon fas fa-rocket"></i>
            <div className="details">
              <span className="title">Licence de Lettre/Art du spectacle</span>
              <span>2014-2017</span>
            </div>
            <p>Faculté Université Lumière Lyon 2 </p>
            <i>Droit et économie - Théorie et accompagnement de la création.</i>
          </section>
        </div>

      </div>
    </section>
  );
};

export default Experience;
