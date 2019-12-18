import React from 'react';

import './Banner.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import aiSvg from '../../../assets/img/ai.svg';

export default function Banner() {
  return (
    <div className="blog_banner_container">
      <div className="blog_banner_inner">
        <div className="blog_banner_background">
          <div className="blog_banner_background_mask">
            Go
            <br />
            Pro
          </div>
        </div>
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
              <li>
                <FontAwesomeIcon icon={faCheckSquare} />
                Access member-exclusive cheatsheets.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} />
                Save your progress through courses.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} />
                Recieve our monthly newsletter.
              </li>
            </ul>
            <button>
              Create your free account
              <div className="arrow">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </button>
          </div>
          <div className="blog_banner_offer_image">
            <img src={aiSvg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
