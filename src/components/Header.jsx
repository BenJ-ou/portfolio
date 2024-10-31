import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="page-content">
      <div className="backgroundText">
        <h1 className="text-4xl lg:text-xl">Développeur web / Intégrateur</h1>
        <p className="mb-4 font-medium">
          Intégrateur web créatif et passionné. J'ai terminé ma formation en développement web et <strong>j'ai acquis des compétences en HTML, CSS, JavaScript, Bootstrap, Tailwind, PHP, Wordpress</strong>.
        </p>
        {/* Ajoutez la suite aussi ici */}
        <a className="button" target="_blank" href="src/image/Dev-web-Intégrateur-CV.pdf"> Curriculum Vitae</a>
      </div>
    </header>
  );
};

export default Header;
