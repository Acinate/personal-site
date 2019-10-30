import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

export default function Footer() {
  return (
    <div className="blog_footer_container">
      <div className="blog_footer_inner">
        <div className="blog_footer_navbar">
          <div className="logo">
            <h2>
              <span>Jason</span> Efthimiou
            </h2>
          </div>
          <div className="links">
            <div className="link">
              <Link>Profile</Link>
            </div>
            <div className="link">
              <Link>Blog</Link>
            </div>
            <div className="link">
              <Link>Contact</Link>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © 2019 - Jason Efthimiou</p>
        </div>
      </div>
    </div>
  );
}
