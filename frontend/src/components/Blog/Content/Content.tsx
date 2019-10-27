import React, { useEffect } from 'react';
import hljs from 'highlight.js';

import './Content.scss';

export default function() {
  useEffect(() => {
    // scroll to top on page load
    document.querySelectorAll('.block-code').forEach((block) => {
      console.log(block);
      hljs.highlightBlock(block);
    });
  }, []);

  return (
    <div className="blog_content_container">
      <div className="blog_content_inner">
        <div className="blog_doc_wrapper">
          <div className="blog_doc_main">
            <p>
              According to the <a href="#">React 16 Roadmap</a>, Concurrent Mode
              is just over the horizon. Expected to arrive in Q2 2019, here's
              what Dan Abramov has to say about Concurrent Mode:
            </p>
            <blockquote>
              Concurrent Mode lets React apps be more responsive by rendering
              component trees without blocking the main thread. It is opt-in and
              allows React to interrupt a long-running render (for example,
              rendering a new feed story) to handle a high-priority event (for
              example, text input or hover). Concurrent Mode also improves the
              user experience of Suspense by skipping unnecessary loading states
              on fast connections.
            </blockquote>
            <p>
              While Concurrent Mode is an opt-in feature, enabling it will be
              simple: just wrap part of your app with a{' '}
              <span className="inline-code">
                &lt;ConcurrentMode&gt; element:
              </span>
            </p>
          </div>
          <div className="blog_doc_side">
            <p>Test</p>
          </div>
        </div>
        <div className="blog_doc_wrapper">
          <div className="blog_doc_main">
            <pre className="block-code">
              {`
<ConcurrentMode>
    <Something />
<ConcurrentMode>
          `}
            </pre>
            <p>
              But be aware: if your app uses{' '}
              <span className="inline-code">useRef()</span> the wrong way, then
              Concurrent Mode won’t work correctly. In fact, your entire app
              won’t work correctly. So to help you prepare, this short article
              compares some bad code with a good version, and then discusses
              what you can do to prepare right now.
            </p>
            <h2>The bad code</h2>
            <blockquote>
              Your render function should be side-effect free.
            </blockquote>
            <p>
              So it has always been the case that your rendering your component
              shouldn’t have any side effects, but it hadn’t really been an
              issue until Concurrent Mode appeared on the scene. In Concurrent
              Mode, render functions can be invoked multiple times without
              actually committing (meaning, for example, applying changes to the
              DOM).
            </p>
            <p>
              For example, here’s a simple counter that uses{' '}
              <span className="inline-code">useRef()</span>.
            </p>
            <pre className="block-code">
              {`
import React, { useRef } from "react";

const BadCounter = () => {
    const count = useRef(0);
    count.current += 1;
    return <div>count:{count.current}</div>;
};

export default BadCounter;
          `}
            </pre>
            <p>
              The above example works as expected in traditional React where the
              render phase and the commit phase is one-to-one. However, if React
              invokes the render function multiple time without committing, the
              counter will increase unexpectedly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
