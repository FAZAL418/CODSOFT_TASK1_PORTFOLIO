// App.js

import React from 'react';
import './App.css';
import Firstp from './components/Firstp';
import SkillsContainer from './components/SkillsContainer';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Extracurricular from './components/Extracurricular'; 

function App() {
  return (
    <div>
      <Navbar />
      <Firstp />
      <Extracurricular /> 
      <SkillsContainer />
      <Projects />

      {/* <footer className="footer">
        <p>&copy; 2023 FAZALS. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default App;
