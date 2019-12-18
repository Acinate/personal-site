import React from 'react';
import './Header.scss';
import MOTD from 'components/Site/MOTD/MOTD';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faStackOverflow,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import profPic from '../../../assets/img/Jason.png';

const ghLink = 'https://github.com/acinate';
const soLink = 'https://stackoverflow.com/users/4672238/jeninja';
const liLink = 'https://www.linkedin.com/in/jason-efthimiou-908311ba/';

const scrollToContactForm = () => {
  const form: HTMLElement | null = document.getElementById('contactForm');
  if (form) {
    form.scrollIntoView();
  }
};

export default class Header extends React.Component {
  render() {
    return (
      <div className="header_container">
        <div className="header_inner">
          <div className="image">
            <img src={profPic} alt="" />
          </div>
          <div className="name">
            <h1>Jason Efthimiou</h1>
          </div>
          <div className="title">
            <h2>Software Engineer</h2>
          </div>
          <div className="bio">
            <p>I design and build software systems.</p>
            <p>I strive to create well organized user interfaces,</p>
            <p>high quality reusable code that scales and systems</p>
            <p>that are high performant with zero downtime.</p>
            <p>Here you can find my blog and some</p>
            <p>projects that I've worked on.</p>
          </div>
          <div className="links">
            <a className="link" href={ghLink} target="_">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="link" href={soLink} target="_">
              <FontAwesomeIcon icon={faStackOverflow} />
            </a>
            <a className="link" href={liLink} target="_">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="link" href="/#">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          <MOTD />
          <div className="contact">
            <a onClick={scrollToContactForm}>
              <button type="button">Send a Message</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
