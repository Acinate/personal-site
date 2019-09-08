import React from 'react';

import Header from '../components/Header/Header';
import Skills from '../components/Skills/Skills';
import Guides from '../components/Guides/Guides';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export interface ISiteLayout {}

export default class Site extends React.Component {
  render() {
    return (
      <div className="site">
        <div className="app-header">
          <Header />
        </div>
        <div className="app-skills">
          <Skills />
        </div>
        <div className="app-guides">
          <Guides />
        </div>
        <div className="app-projects">
          <Projects />
        </div>
        <div className="app-contact">
          <Contact />
        </div>
      </div>
    );
  }
}
