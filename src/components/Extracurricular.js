import React from 'react';
import './Extracurricular.css';

const Extracurricular = () => {
  return (
    <div id="sidePursuits" className="extracurricular-container">
      <h2>{'<Side Pursuits />'}</h2>

      <div className="activity">
        <div className="activity-text">
          <h3>Adventure/Traveling</h3>
          <p>Explore new places and experience exciting adventures.</p>
        </div>
        <img src={require('./trekking.png')} alt="Adventure" />
      </div>

      <div className="activity">
        <div className="activity-text">
          <h3>Play Cricket and Basketball</h3>
          <p>Played as the second-year computer captain in the basketball general championship.</p>
        </div>
        <img src={require('./basketball.png')} alt="Basketball" />
      </div>

      <div className="activity">
        <div className="activity-text">
          <h3>Watching Documentaries</h3>
          <p>Enjoy watching biographies and crime thriller documentaries.</p>
        </div>
        <img src={require('./documentry.png')} alt="Documentary" />
      </div>
    </div>
  );
};

export default Extracurricular;