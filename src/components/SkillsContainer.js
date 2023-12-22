
import React from 'react';
import Navbar from './Navbar'; 
import './SkillsContainer.css'; 

const SkillsContainer = () => {
  return (
    <div>
      <Navbar />
      <div className="skillsContainer" id="skills">
        <h1>{'<Skills />'}</h1>
        <div className="skillItem">
          <p>HTML, CSS, JS, React</p>
          {renderSkillBar(75)}
        </div>
        <div className="skillItem">
          <p>React Native, Redux</p>
          {renderSkillBar(60)}
        </div>
        <div className="skillItem">
          <p>PYTHON</p>
          {renderSkillBar(60)}
        </div>
        <div className="skillItem">
          <p>C++</p>
          {renderSkillBar(50)}
        </div>
        <div className="skillItem">
          <p>English, Hindi</p>
          {renderSkillBar(90)}
        </div>
      </div>
    </div>
  );
};

const renderSkillBar = (percentage) => {
  return (
    <div className="skillBar">
      <div className="fillAnimation" style={{ width: `${percentage}%`, backgroundColor: 'navy' }}>
        <div className="skillLevel">{percentage}%</div>
      </div>
    </div>
  );
};

export default SkillsContainer;
