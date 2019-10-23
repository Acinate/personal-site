import React from 'react';
import { Link } from 'react-router-dom';
import './Guides.scss';

const webpack = require('../../../assets/img/webpack.jpg');

export default class Guides extends React.Component {
  render() {
    return (
      <div className="guides_container">
        <div className="guides_inner">
          <h2 className="section-title">Guides</h2>
          <div className="guide">
            <div className="image">
              <img src={webpack} alt="" />
            </div>
            <div className="title">
              <h2>Setting up a React Application with Typescript & Webpack</h2>
            </div>
            <div className="description">
              <p>
                React is a great front-end library and Javascript has come a
                long way but there are still some issues, especially when
                dealing with large code bases on large teams. Typescript has
                been introduced as a tool to make Javascript code easy to scale
                and work with. If you would like to setup Typescript without
                having to rely on all the black box magic that create-react-app
                offers, this guide is for you.
              </p>
            </div>
            <div className="controls">
              <Link to="/blog">
                <button type="button">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
