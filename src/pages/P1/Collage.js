import React from 'react';
import '../methodcard.css';
import './Empathy.css';

export default function Collage() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column empathy-left-column">
                        <h1>Collage</h1>
                        <div className="square">
                            <p>
                                Image to be added later
                            </p>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong> To allow participants to visually express their thoughts about the 
                                research question or theme instead of traditional methods (such as interviews).
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> participants, design team
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong>
                                <ol className="method-tb-list">
                                    <li>Provide participants with collage materials such as paper, collection of images, words, shapes, and glue.</li>
                                    <li>
                                        Make sure that the participant is supplied with the right quantity of materials and that the materials 
                                        are specific but also somewhat ambiguous to minimize bias.
                                    </li>
                                    <li>
                                        After the participant is done collaging, have them explain their collage and provide insight about image 
                                        choices and meaning.
                                    </li>
                                    <li>
                                        When analyzing the collage take into account patterns and themes within their collage and other participant 
                                        collages.
                                    </li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column empathy-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                                We will show you an example of the collage method in action.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Understanding the food practices of UT Austin students.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong>With classes, jobs, student organizations, and other obligations many students find it 
                                challenging to find time throughout the day to eat. Students especially struggle with finding the time to regularly 
                                eat well balanced and nutritional meals, often opting for convenience or affordability instead.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong>There is a need to understand the food options available to UT Austin students
                            </p>
                            <p className="case-study-side-font">
                                <strong>Implementation: </strong>
                                <ol className="case-study-tb-list">
                                    <li>We gathered collage materials and provided a space for participants to be able to put together a collage</li>
                                    <li>
                                        We then provided our participants with multiple prompts. We asked participants to make a meal they thought was 
                                        healthy, a meal they thought was unhealthy, and then their ideal meal. 
                                    </li>
                                    <li>We then asked participants to explain their collages and why they grouped certain items together.</li>
                                    <li>We also compared the participants collages with one another.</li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li>
                                        Having a visual representation of what students considered their ideal meal vs healthy meal vs unhealthy meal 
                                        was crucial to understanding what the overlaps and contradictions were between the three groups
                                    </li>
                                    <li>
                                        It helped us understand what students perceived as healthy, as unhealthy, and what foods fell into their ideal meal.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
