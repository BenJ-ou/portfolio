import React from 'react';
import Contact from './Contact'; 
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-formation text-xl">
      <h1>Expériences</h1>
      {/* Ajoutez ici mes expériences */}
      <Contact /> {/* Ajout du formulaire de contact ici */}
    </section>
  );
};

export default Experience;
