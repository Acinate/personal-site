import React, { useEffect } from 'react';

import Navbar from 'components/Navbar/Navbar';
import Header from 'components/Blog/Header/Header';
import Content from 'components/Blog/Content/Content';
import About from 'components/Blog/About/About';

/* This Layout Design was inspired from: https://frontarm.com/daishi-kato/use-ref-in-concurrent-mode/ */

export interface IBlogLayout {}

export default function BlogLayout() {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog">
      <div className="blog_navbar">
        <Navbar />
      </div>
      <div className="blog-header">
        <Header />
      </div>
      <div className="blog-content">
        <Content />
      </div>
      <div className="blog-about">
        <About />
      </div>
    </div>
  );
}
