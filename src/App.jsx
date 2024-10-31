import React from 'react';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
