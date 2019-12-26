import React from 'react';

import profPic from 'assets/img/Jason.jpg';

export default function UbuntuHeader() {
    return (
        <div className="blog_header_container">
            <div className="blog_header">
                <div className="blog_header_title">
                    <h1>
                        How to Install JDK 8, 10, 12, or 13 and Ubuntu
                    </h1>
                </div>
                <div className="blog_header_author">
                    <div className="author_image">
                        <img src={profPic} alt="profile_picture"/>
                    </div>
                    <div className="author_name">
                        <p>By Jason Efthimiou</p>
                    </div>
                </div>
                <div className="blog_header_description">
                    <p>
                        In recent news, Oracle has decided to make developers create an account before downloading the
                        Java JDK. This means conventional methods for downloading Java on Ubuntu are outdated. You can't
                        simply apt install or install JDK's from PPA's anymore. If you are having trouble getting a
                        specific version of Java installed on a machine, then this guide is for you.
                    </p>
                </div>
                <div className="blog_header_date">
                    <p>5th March, 2019</p>
                </div>
            </div>
        </div>
    );
}
