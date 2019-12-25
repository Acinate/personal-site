import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar_inner">
        <div className="navbar_links">
          <div className="navbar_link">
            <Link to="/">Profile</Link>
          </div>
          <div className="navbar_link">
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
