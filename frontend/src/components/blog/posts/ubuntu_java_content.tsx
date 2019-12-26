import React, {useEffect, useState} from 'react';
import {getPosts} from 'api/blog';
import hljs from 'highlight.js';

const UbuntuJava = () => {
    const [htmlContents, setHtmlContents] = useState<string>('');

    useEffect(() => {
        getPosts().then(html => {
            setHtmlContents(html);
            document.querySelectorAll('.shell').forEach((block) => {
                console.log(block);
                hljs.highlightBlock(block);
            });
        }).catch((error) => {
            // TODO: Remove console.log
            console.log(error);
        })
    }, []);

    return (
        <div className="blog_content_container">
            <div className="blog_content_inner">
                <div className="blog_doc_wrapper">
                    <div className="blog_post" dangerouslySetInnerHTML={{__html: htmlContents}}/>
                </div>
            </div>
        </div>
    )
};

export default UbuntuJava;