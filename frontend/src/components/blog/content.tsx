import React, {useEffect} from 'react';
import hljs from 'highlight.js';
import Post from "../../../../backend/src/models/post";

interface ContentProps {
    post: Post | undefined;
}

export default function (props: ContentProps) {

    useEffect(() => {
        document.querySelectorAll('.shell').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }, []);

    return (
        <div className="blog_content_container">
            <div className="blog_content_inner">
                <div className="blog_doc_wrapper">
                    {props.post ? <div className="blog_post" dangerouslySetInnerHTML={{__html: props.post.html}}/> : ''}
                </div>
            </div>
        </div>
    )
}
