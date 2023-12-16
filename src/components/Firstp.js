
import React from 'react';
import Navbar from './Navbar'; 
import './Firstp.css'; 
import DSC_0017 from './DSC_0017.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Firstp() {
  const handleContactClick = () => {
    window.location.href = 'mailto:your.faizzusulphy@gmail.com?subject=Contact%20Me';
  };

  return (
    <div>
      <Navbar />
      <div className="mainContainer" id="home">
        <div className="leftPanel">
          <img src={DSC_0017} alt="Description of the image" className="image" />
          <h1 className="Naam">{' <FAZAL S />'}</h1>
          <p className="dev">REACTJS & REACTNATIVE DEVELOPER</p>
          <button className="ContactButton" onClick={handleContactClick}>
            Contact Me
          </button>
          <div className="socialIcons">
            <a href="https://twitter.com/FAZAL_SULPHY_VK" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/fazal-sulphy-vk-78b7bb242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
            </a>
            <a href="https://github.com/FAZAL418" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
            </a>
          </div>
        </div>
        <div className="rightPanel">
          <h2>{'<About Me />'}</h2>
          <p className="whatIdo">
            I'm an experienced React Developer with a strong background in creating user-focused websites. I'm eager to
            expand my knowledge of React Native and aim to produce flawless mobile cross-platform experiences. I am
            dedicated to lifelong learning and teamwork in addressing problems, and I infuse every project with my love
            of creativity. Together, let's create effective solutions!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Firstp;
