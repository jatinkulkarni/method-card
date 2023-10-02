import React from 'react';
import '../methodcard.css';
import cardImage from '../../assets/design-charrette.png'
import './Ideate.css';

export default function Charette() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column ideate-left-column">
                        <h1>Design Charette</h1>
                        <div className="square">
                            <img className="image" alt="Method" src={cardImage}/>
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
                                    <li>Switch up teams.</li>
                                    <li>Reiterate the process until satisfied.</li>
                                    <li>Come together as a group to share, get feedback, and combine ideas.</li>
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
                                <strong>Study: </strong>Generate Designs and Ideas for reducing food waste in UT.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong> Food waste is relevant all over the world, but to start small and local, our team decided to focus on UT. It’s common for people to overestimate their hunger and overfill their plates, especially since UT food halls are self-serving stations.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong>There is a need to minimize food waste in UT dining halls.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Implementation: </strong>
                                <ol className="case-study-tb-list">
                                    <li>
                                        Splitting up Teams:
                                        <ul className="case-study-tb-list">
                                            <li>At each work space, make sure there are tools like paper templates, pencils, erasers, and color markers.</li>
                                            <li>Split up into teams with a fair amount of Designers and Non-Designers in each.</li>
                                            <li>Begin design sessions - they should be fast and low tech.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Generate Ideas:
                                        <ul className="case-study-tb-list">
                                            <li>Each group is given 10 minutes to sketch. </li>
                                            <li>After time is up, the moderator asks people to switch tables and find a group they haven’t interacted with before.</li>
                                            <li>Each person will bring forward the best ideas from each group, and ideas are created through combinations of the best part of each concept.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Reiterate:
                                        <ul className="case-study-tb-list">
                                            <li>Each round of designs should build off the preferred components identified in the prior cycle.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Come Together:
                                        <ul className="case-study-tb-list">
                                            <li>Present or display the ideas of each group in an area large enough for all participants to congregate and talk.</li>
                                        </ul>
                                    </li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li>Design Charrettes help with thoroughly exploring problems and are great at generating a wide range of ideas. </li>
                                    <li>Because of how fast each round is, concepts are rough drafts or low fidelity wireframes at most.</li>
                                </ul>
                            </p>
                            <p className="case-study-side-font">
                                Want to learn more? We’ve linked helpful resources below  
                            </p>
                            <p className="case-study-side-font">
                                <a href="https://storymaps.arcgis.com/stories/b2ff1760acbf48c6bb99a14a16fa34aa" target="blank">Community Design Charrettes</a>
                            </p>
                            <p className="case-study-side-font">
                                <a href="https://www.rsandh.com/insights/the-dos-and-donts-of-design-charrettes/" target="blank">Dos & Don’ts</a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
