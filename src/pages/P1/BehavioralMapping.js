import React from 'react';
import '../methodcard.css';
import './Empathy.css';

export default function BehavioralMapping() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column empathy-left-column">
                        <h1>Behavioral Mapping</h1>
                        <div className="square">
                            <p>
                                Image to be added later
                            </p>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong> Systematically document location-based observations of participant activity when interacting with a space. 
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> design team
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong> 
                                <ol className="method-tb-list">
                                    <li>Make a basic layout of the location or space you are studying </li>
                                    <li>Track the movement of participants at a site-specific location by marking down how they enter, where they go, how they leave, and the activities/other interactions they have with the space.</li>
                                    <li>Track movements by using annotated maps, plans, video, or time-lapse photography</li>
                                    <li>You can track multiple participants to learn more about the space as a whole or follow one participant to learn more about the participant themselves. </li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column empathy-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                                We will show you an example of the behavioral mapping in action.</p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Understanding the food practices of UT Austin students.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong>With classes, jobs, student organizations, and other obligations many students find it challenging to find time throughout the day to eat. Students especially struggle with finding the time to regularly eat well balanced and nutritional meals, often opting for convenience or affordability instead
                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong>There is a need to understand the food options available to UT Austin students. 
                            </p>
                            <p className="case-study-side-font">
                                <strong>Implementation: </strong>
                                <ol className="case-study-tb-list">
                                    <li>We decided to spend time at the food trucks on 26th since this is a very popular place for students on or off campus to grab food. </li>
                                    <li>We took screenshots of google maps to base our locational trackings.</li>
                                    <li>We put markings at locations where people would stand for long periods, what areas people would normally move through, and we would mark if people ate or waited in that area.</li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li>We found that people did not enter from the corner of 26th street and Rio Grande, instead they would walk from the entrance on Rio Grande or on 26th street.</li>
                                    <li>We found that there were certain tables that were almost always used for eating, while others were simply a waiting place for people to get their food.</li>
                                    <li>There were definitely some food trucks more popular than others where their lines would stretch to cover other food trucks. We think that might have caused some people to think those food trucks were closed since there wasn’t a line there or anyone ordering from it.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
