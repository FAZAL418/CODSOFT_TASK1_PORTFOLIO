
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-item" onClick={() => scrollToSection('home')}>
        Home
      </div>
      <div className="navbar-item" onClick={() => scrollToSection('projects')}>
        Projects
      </div>
      <div className="navbar-item" onClick={() => scrollToSection('skills')}>
        Skills
      </div>
    </nav>
  );
};

export default Navbar;
