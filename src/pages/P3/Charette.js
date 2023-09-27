import React from 'react';
import '../methodcard.css';
import './Ideate.css';

export default function Charette() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column ideate-left-column">
                        <h1>Design Charette</h1>
                        <div className="square">
                            <p>
                                Image to be added later
                            </p>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong> Generate ideas collaboratively and ensure many perspectives are included. This method encourages collaboration between groups that normally don’t work together in the planning/design process and gives users an opportunity to be directly involved.
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> An interdisciplinary team consisting of designers, as well as stakeholders, planners, engineers, and other people who may be affected by the design.
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong> 
                                <ol className="method-tb-list">
                                    <li>Invite many participants and make sure they are diverse (stakeholders, architects, end-users, analysts, etc). </li>
                                    <li>Split up the design team into small groups to work with the participants and rapidly design solutions/ideas by brainstorming and sketching,</li>
                                    <li>Come together as a group to share, get feedback, and combine ideas.</li>
                                    <li>Reiterate the process until satisfied.</li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column ideate-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                                We will show you an example of the Design Charrette method in action.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Making digital product in CID group project in order to improve parking management
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong> UT campus is currently facing challenges with parking management. There is a lack of clear signage, leading to confusion and congestion, especially during peak hours. This has resulted in complaints from students, faculty and staff.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong>There is a need for the user-friendly digital solution to optimize parking allocation and provide clear guidance to available parking spaces.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Implementation: </strong>
                                <ol className="case-study-tb-list">
                                    <li>
                                        Define Prototyping Goals:
                                        <ul className="case-study-tb-list">
                                            <li>Clearly outline the goals of the prototyping exercise. In this case, it would be to create physical representations of potential solutions for the parking management system.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Brainstorm Design Concepts:
                                        <ul className="case-study-tb-list">
                                            <li>Engage a team of designers, stakeholders, and users to brainstorm design concepts for the parking management system. Consider factors like signage, wayfinding, and user interaction.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Sketch Initial Designs:
                                        <ul className="case-study-tb-list">
                                            <li>Start by sketching out rough designs of the parking management system on paper. These sketches will serve as the basis for creating the physical prototypes.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Create Physical Prototypes:
                                        <ul className="case-study-tb-list">
                                            <li>
                                                Use the gathered materials to build physical prototypes of different elements of the parking management system. For example:
                                                <ul className="case-study-tb-list">
                                                    <li>Create miniature signs to represent improved signage.</li>
                                                    <li>Craft a model of a digital display for parking availability.</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li>Users may have found that certain signage placements were more intuitive, or that the digital display for parking availability was particularly helpful.</li>
                                    <li>The rapid physical prototyping exercise provided tangible representations of the proposed solutions for the parking management system.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
