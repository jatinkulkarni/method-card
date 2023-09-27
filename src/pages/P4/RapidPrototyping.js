import React from 'react';
import '../methodcard.css';
import './Prototype.css';

export default function RapidPrototyping() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column prototype-left-column">
                        <h1>Rapid Prototyping</h1>
                        <div className="square">
                            <p>
                                Image to be added later
                            </p>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong> Create functional/ non-functional prototypes in a short amount of time.
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> Designers, engineers and stakeholders. Anyone who is involved collaboration.
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong> 
                                <ol className="method-tb-list">
                                    <li>Define prototyping goals and brainstorm design concepts. Consider factors like signage, way finding, user interaction.</li>
                                    <li>Sketch initial designs</li>
                                    <li>Create physical prototypes- use gathered materials to construct physical prototypes. </li>
                                    <li>Ensure that it’s made quickly, but accurately represents the proposed design concepts.</li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column prototype-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                                We will show you an example of the rapid physical prototyping method in action.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Making digital product in CID group project in order to improve parking management
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong>UT campus is currently facing challenges with parking management. There is a lack of clear signage, leading to confusion and congestion, especially during peak hours. This has resulted in complaints from students, faculty and staff.
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
                                                <u1 className="case-study-tb-list">
                                                    <li>Create miniature signs to represent improved signage.</li>
                                                    <li>Craft a model of a digital display for parking availability.</li>
                                                </u1>
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
