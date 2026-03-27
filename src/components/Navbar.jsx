import React from 'react'; 
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="profile">
        <img src="/image/image.webp" alt="profile" className="profile-img" />
        <h1 className="font-semibold">PRINCE BENJAMIN</h1>
      </div>
      <ul>
        <li><a href="#projects-section">Mes projets</a></li>
        <li><a target="_blank" rel="noreferrer" href="/image/integrateur_web_cv_BP.pdf">CV</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://github.com/BenJ-ou">Github</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;