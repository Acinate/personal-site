import React from 'react';

import Header from 'components/Blog/Header/Header';
import Content from 'components/Blog/Content/Content';

export interface IBlogLayout {}

export default function BlogLayout() {
  return (
    <div className="blog">
      <div className="blog-header">
        <Header />
      </div>
      <div className="blog-content">
        <Content />
      </div>
    </div>
  );
}
