import React from 'react';

import Header from 'components/site/Header/Header';
import Skills from 'components/site/Skills/Skills';
import Guides from 'components/site/Guides/Guides';
import Projects from 'components/site/Projects/Projects';
import Contact from 'components/site/Contact/Contact';

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
