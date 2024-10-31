import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="profile">
        <img src="./src/image/image.png" alt="profile" />
        <h1 className="font-semibold">PRINCE BENJAMIN</h1>
      </div>
      <ul>
        <li><a href="#projects-section">Mes projets</a></li>
        <li><a target="_blank" href="src/image/Dev-web-Intégrateur-CV.pdf">Curriculum Vitae</a></li>
        <li><a target="_blank" href="https://github.com/BenjaminPrince">Github</a></li>
        <li><button id="themeLogo">&#9789;</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
