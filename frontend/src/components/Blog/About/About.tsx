import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import './About.scss';
const profPic = require('assets/img/Jason.jpg');

export default function About() {
  return (
    <div className="blog_about_container">
      <div className="blog_about_inner">
        <div className="blog_about_title">
          <h2>About Jason</h2>
        </div>
        <div className="blog_about_contents">
          <div className="blog_about_description">
            <p className="bio">
              A Computer Science student interested in modern web development
              and machine learning.
            </p>
            <p className="location">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> New York, NY
            </p>
          </div>
          <div className="blog_about_profilePic">
            <img src={profPic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
