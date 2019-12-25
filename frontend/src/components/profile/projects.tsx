import React from 'react';

const projects = [1, 2, 3, 4];

export default function Projects() {
    return (
        <div className="projects_container">
            <div className="projects_inner">
                <h2 className="section-title">Projects</h2>
                <div className="projects_grid">
                    {projects.map((p) => (
                        <div className="project_cell" key={p}>
                            <div className="image">
                                <img src="" alt=""/>
                            </div>
                            <div className="title">
                                <h2>Project {p} Title Here</h2>
                            </div>
                            <div className="description">
                                <p>
                                    Short description about the project, its features, how long it
                                    took and what I learned from working on this project.
                                </p>
                            </div>
                            <div className="controls">
                                <a href="/#">
                                    <button type="button">View Code</button>
                                </a>
                                <a href="/#">
                                    <button type="button">View Online</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
