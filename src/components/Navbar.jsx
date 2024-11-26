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
        <li><a target="_blank" href="/image/integrateur-web-cv.pdf">Curriculum Vitae</a></li>
        <li><a target="_blank" href="https://github.com/BenJ-ou">Github</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
