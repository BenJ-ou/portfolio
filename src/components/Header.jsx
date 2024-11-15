import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="page-content">
      <div className="backgroundText">
      <h1 class="text-4xl lg:text-xl">Développeur web / Intégrateur</h1>
      <p class="mb-4 font-medium">Intégrateur web créatif et passionné. J'ai terminé ma formation en développement web et <strong>j'ai acquis des compétences en HTML, CSS, JavaScript, React, Redux</strong>. J'ai également de l'expérience en gestion de projet et en <strong>travail en équipe</strong>. Je suis passionné par le développement web et j'ai hâte de continuer à apprendre et à me développer dans ce domaine.</p>
      <p class="mb-4 font-medium">Avant d’intégrer un cursus Integrateur web, j’ai obtenu un master "Professorat des écoles" à l’Université Claude Bernard, Lyon1, ainsi qu'une licence "Lettre/Art du spectacle" à Lyon2. A travers ces cursus, j’ai pu gagner en <strong>efficacité </strong> et en <strong>autonomie</strong> dans mon travail et acquérir une certaine <strong>adaptabilité.</strong> </p>
      <p class="mb-4 font-medium">Aujourd'hui je m'épanouis pleinement dans le domaine du web, ma <strong>formation me permet d'évoluer en tant que développeur "Intégrateur web"</strong> . Je suis toutefois particulièrement ouvert pour <strong>découvrir de nouvelles "technos" </strong>et à approfondir la partie front-end, qui me permet de faire un lien avec mon intérêt pour l'art et ma sensibilité artistique.</p>
      <p class="mb-4 font-medium">Si vous êtes à la recherche d'un développeur intégrateur web motivé,<strong> n'hésitez pas à me contacter.</strong></p> 
        <a className="button" target="_blank" href="/image/Dev web Intégrateur CV (8).pdf"> Curriculum Vitae</a>
      </div>
    </header>
  );
};

export default Header;
