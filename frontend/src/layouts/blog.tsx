import React, {useEffect, useState} from 'react';

import Navbar from 'components/navbar/navbar';
import Header from 'components/blog/header';
import Content from 'components/blog/content';
import About from 'components/blog/about';
import Banner from 'components/blog/banner';
import Footer from 'components/blog/footer';
import {getPosts} from "../api/blog";
import Post from "../../../backend/src/models/post";

/* This Layout Design was inspired from: https://frontarm.com/daishi-kato/use-ref-in-concurrent-mode/ */

export default function BlogLayout() {
    const [post, setPost] = useState<Post | undefined>(undefined);

    useEffect(() => {
        window.scrollTo(0, 0); // scroll to top
        getPosts().then((post: Post) => {
            setPost(post);
        }).catch((error) => {
            // TODO: Remove console.log
            console.log(error);
        });
    }, []);

    return (
        <div className="blog">
            <div className="blog_navbar">
                <Navbar/>
            </div>
            <div className="blog-header">
                <Header post={post}/>
            </div>
            <div className="blog-content">
                <Content post={post}/>
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
