import React from 'react';

import Header from 'components/Site/Header/Header';
import Skills from 'components/Site/Skills/Skills';
import Guides from 'components/Site/Guides/Guides';
import Projects from 'components/Site/Projects/Projects';
import Contact from 'components/Site/Contact/Contact';

export interface ISiteLayout {}

export default class Site extends React.Component {
  render() {
    return (
      <div className="site">
        <div className="site-header">
          <Header />
        </div>
        <div className="site-skills">
          <Skills />
        </div>
        <div className="site-guides">
          <Guides />
        </div>
        <div className="site-projects">
          <Projects />
        </div>
        <div className="site-contact">
          <Contact />
        </div>
      </div>
    );
  }
}
