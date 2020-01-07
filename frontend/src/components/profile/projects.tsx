import React from 'react';

const projects = [1, 2, 3, 4];

export default function Projects() {
    return (
        <div className="projects_container">
            <div className="projects_inner">
                <h2 className="section-title">Projects</h2>
                <div className="projects_grid">
                    <div className="project_cell">
                        <div className="image">
                            <img src="https://i.imgur.com/LDY0S8c.png" alt="ts_nyc.jpg"/>
                        </div>
                        <div className="title">
                            <h2>Terry Singh NYC</h2>
                        </div>
                        <div className="description">
                            <p>
                                A website that showcases a men's fashion product line by Terry Singh.
                            </p>
                        </div>
                        <div className="controls">
                            <a href="https://terrysinghnyc.com/" target="_">
                                <button type="button">View Online</button>
                            </a>
                        </div>
                    </div>
                    <div className="project_cell">
                        <div className="image">
                            <img src="https://i.imgur.com/GymbmOb.png" alt="bam.jpg"/>
                        </div>
                        <div className="title">
                            <h2>Bad Ass Motherf*cker</h2>
                        </div>
                        <div className="description">
                            <p>
                                An online web store that sells a unique product in the form of a cuff-link. Users are
                                greeted with a stylish landing page that is easy to navigate. It is designed to make the
                                checkout process as seamless as possible.
                            </p>
                        </div>
                        <div className="controls">
                            <a href="https://bamotherfucker.com/" target="_">
                                <button type="button">View Online</button>
                            </a>
                        </div>
                    </div>
                    <div className="project_cell">
                        <div className="image">
                            <img src="https://i.imgur.com/wuyfy0s.png" alt="rice.jpg"/>
                        </div>
                        <div className="title">
                            <h2>Rice Share</h2>
                        </div>
                        <div className="description">
                            <p>
                                Rice share is a charity that offers a quiz to test user's abilities to answer questions
                                in the form of a quiz. For every correct answer the user provides, the equivalent of 10
                                grains of rice is donated to UNICEF, a charity that helps children and mothers in need.
                            </p>
                        </div>
                        <div className="controls">
                            <a href="https://github.com/freecharity" target="_">
                                <button type="button">View Code</button>
                            </a>
                            <a href="https://riceshare.com/" target="_">
                                <button type="button">View Online</button>
                            </a>
                        </div>
                    </div>
                    <div className="project_cell">
                        <div className="image">
                            <img src="https://i.imgur.com/ZxkDWaM.png" alt="q-trader.jpg"/>
                        </div>
                        <div className="title">
                            <h2>Q-Trader</h2>
                        </div>
                        <div className="description">
                            <p>
                                A automated trading bot that uses reinforcement learning (a type of machine learning) to
                                learn how to trade a stock over a period of a week. The bot profits a lot on uptrending
                                charts and loses very little on downtrending charts, which is expected.
                            </p>
                        </div>
                        <div className="controls">
                            <a href="https://github.com/Acinate/python/tree/master/machine_learning/q_trader"
                               target="_">
                                <button type="button">View Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
