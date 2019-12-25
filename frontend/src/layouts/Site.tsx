import React from 'react';

import Header from 'components/profile/header';
import Skills from 'components/profile/skills';
import Guides from 'components/profile/guides';
import Projects from 'components/profile/projects';
import Contact from 'components/profile/contact';

export interface ISiteLayout {
}

export default class Site extends React.Component {
    render() {
        return (
            <div className="site">
                <div className="site-header">
                    <Header/>
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
