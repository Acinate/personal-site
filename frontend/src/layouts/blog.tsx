import React, {useEffect} from 'react';

import Navbar from 'components/navbar/navbar';
import UbuntuHeader from 'components/blog/posts/ubuntu_java_header';
import UbuntuContent from 'components/blog/posts/ubuntu_java_content';
import About from 'components/blog/about';
import Banner from 'components/blog/banner';
import Footer from 'components/blog/footer';

/* This Layout Design was inspired from: https://frontarm.com/daishi-kato/use-ref-in-concurrent-mode/ */

export default function BlogLayout() {
    useEffect(() => {
        // scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog">
            <div className="blog_navbar">
                <Navbar/>
            </div>
            <div className="blog-header">
                <UbuntuHeader/>
            </div>
            <div className="blog-content">
                <UbuntuContent/>
            </div>
            <div className="blog-about">
                <About/>
            </div>
            <div className="blog-banner">
                <Banner/>
            </div>
            <div className="blog-footer">
                <Footer/>
            </div>
        </div>
    );
}
