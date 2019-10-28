import React from 'react';

import './Header.scss';
const profPic = require('assets/img/Jason.jpg');

export default function Header() {
  return (
    <div className="blog_header_container">
      <div className="blog_header">
        <div className="blog_header_title">
          <h1>
            useRef() and Concurrent Mode: how to avoid shooting yourself in the
            foot
          </h1>
        </div>
        <div className="blog_header_author">
          <div className="author_image">
            <img src={profPic} alt="profile_picture" />
          </div>
          <div className="author_name">
            <p>By Jason Efthimiou</p>
          </div>
        </div>
        <div className="blog_header_description">
          <p>
            React's eaglerly awaited Concurrent Mode can vastly improve user
            experience, but it requires a stricter way of writing components.
          </p>
        </div>
        <div className="blog_header_date">
          <p>5th March, 2019</p>
        </div>
      </div>
    </div>
  );
}
