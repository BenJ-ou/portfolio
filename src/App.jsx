import React from 'react';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
