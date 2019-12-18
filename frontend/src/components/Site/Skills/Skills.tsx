import React from 'react';
import './Skills.scss';

import frontEnd from '../../../assets/img/Frontend.png';
import backEnd from '../../../assets/img/Backend.png';
import devOps from '../../../assets/img/Devops.png';

export default class Skills extends React.Component {
  render() {
    return (
      <div className="skills_container">
        <div className="skills_inner">
          <div className="skills_grid">
            <div className="skill-cell">
              <div className="icon">
                <img src={frontEnd} alt="" />
              </div>
              <div className="name">
                <h2>Front End</h2>
              </div>
              <div className="items">
                <p>React</p>
                <p>Angular</p>
                <p>Javascript</p>
                <p>CSS / SCSS</p>
                <p>d3.js</p>
              </div>
            </div>
            <div className="skill-cell">
              <div className="icon">
                <img src={backEnd} alt="" />
              </div>
              <div className="name">
                <h2>Backend</h2>
              </div>
              <div className="items">
                <p>NodeJS</p>
                <p>Express</p>
                <p>Typescript</p>
                <p>MongoDB</p>
                <p>SQL</p>
              </div>
            </div>
            <div className="skill-cell">
              <div className="icon">
                <img src={devOps} alt="" />
              </div>
              <div className="name">
                <h2>Dev Ops</h2>
              </div>
              <div className="items">
                <p>Debian</p>
                <p>NGINX</p>
                <p>Docker</p>
                <p>Webpack</p>
                <p>AWS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
