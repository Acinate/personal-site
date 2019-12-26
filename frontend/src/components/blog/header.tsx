import React from 'react';
import Post from "../../../../backend/src/models/post";

import profPic from 'assets/img/Jason.jpg';

interface HeaderProps {
    post: Post | undefined;
}

export default function Header(props: HeaderProps) {
    return (
        <div className="blog_header_container">
            {props.post ?
                <div className="blog_header">
                    <div className="blog_header_title">
                        <h1>{props.post.title ? props.post.title : ''}</h1>
                    </div>
                    <div className="blog_header_author">
                        <div className="author_image">
                            <img src={profPic} alt="profile_picture"/>
                        </div>
                        <div className="author_name">
                            <p>{props.post.author ? props.post.author : ''}</p>
                        </div>
                    </div>
                    <div className="blog_header_description">
                        <p>{props.post.description ? props.post.description : ''}</p>
                    </div>
                    <div className="blog_header_date">
                        <p>{props.post.date ? props.post.date : ''}</p>
                    </div>
                </div> : <div className="blog_header">
                    <h1>Loading blog post...</h1>
                </div>}
        </div>
    );
}
