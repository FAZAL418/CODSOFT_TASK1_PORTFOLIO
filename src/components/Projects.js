import React from 'react';
import './Projects.css';

const Projects = () => {
  const handleShowMoreClick = () => {
    window.location.href = 'https://github.com/FAZAL418';
  };

  return (
    <div id="projects" className="projects-container">
      <h1 className="projects-heading">{'<Projects />'}</h1>
      <div className="project-boxes-container">
        <div className="project-box">
          <h2>Pune Housing Model</h2>
          <p>
            Our Pune housing price prediction project, powered by machine learning and individual data collection, delivers precise insights for informed decision-making in the real estate market.
          </p>
          <p className='donenotdone'>
            {'<GITHUB />'}
          </p>
        </div>

        <div className="project-box">
          <h2>FOOODY</h2>
          <p>
            Foody, in development, utilizes the MERN stack for effortless food and item ordering. This system integrates MongoDB, Express.js, React, and Node.js, ensuring a user-friendly and efficient platform.
          </p>
          <p className='donenotdone'>
            {'<InDevL />'}
          </p>
        </div>

        <div className="project-box">
          <h2>SIMON GAME</h2>
          <p>
            Built with React, offers a finished and enjoyable experience for enhancing memory and pattern recognition skills.
          </p>
          <p className='donenotdone'>
            {'<GITHUB />'}
          </p>
        </div>
      </div>

      <h2 className="section-heading">ADDITIONAL PROJECTS</h2>
      <p className="section-text">
        Explore MY growing collection of projects on GitHub! With additional projects continuously being uploaded, committed to bringing you innovative solutions and exciting developments. Stay tuned for more.
      </p>

      <button className="show-more-button" onClick={handleShowMoreClick}>
        Show More Projects
      </button>
    </div>
  );
};

export default Projects;