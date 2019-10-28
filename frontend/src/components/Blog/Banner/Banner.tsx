import React from 'react';

import './Banner.scss';

const aiSvg = require('assets/img/ai.svg');

export default function Banner() {
  return (
    <div className="blog_banner_container">
      <div className="blog_banner_inner">
        <div className="blog_banner_offer_wrapper">
          <div className="blog_banner_offer_description">
            <h2>
              Stay in the <span className="text-primary2">loop.</span>
            </h2>
            <p>
              Keeping up to date with React is a full time job that pays only in
              frustration. Luckily, you can delegate! Just become a free member,
              and we'll keep you up to date with our monthly newsletter.
            </p>
            <ul>
              <li>Access member-exclusive cheatsheets.</li>
              <li>Save your progress through courses.</li>
              <li>Recieve our monthly newsletter.</li>
              <li>
                <i>All for free</i>
              </li>
            </ul>
            <button>Create your free account</button>
          </div>
          <div className="blog_banner_offer_image">
            <img src={aiSvg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
