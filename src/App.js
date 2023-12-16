import logo from './logo.svg';
import './App.css';
import Firstp from './components/Firstp';
import React, { useState } from 'react';
import SkillsContainer from './components/SkillsContainer';
import Projects from './components/Projects';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <Firstp />
      <SkillsContainer />
      <Projects />

    </div>
  );
}

export default App;
