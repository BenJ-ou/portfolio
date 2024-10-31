import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="profile">
        <img src="/image/image.png" alt="profile" className="profile-img" />
        <h1 className="font-semibold">PRINCE BENJAMIN</h1>
      </div>
      <ul>
        <li><a href="#projects-section">Mes projets</a></li>
        <li><a target="_blank" href="/image/Dev-web-Intégrateur-CV.pdf">Curriculum Vitae</a></li>
        <li><a target="_blank" href="https://github.com/BenjaminPrince">Github</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
