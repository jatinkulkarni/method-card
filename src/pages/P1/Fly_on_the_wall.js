import React from 'react';
import '../methodcard.css';
import cardImage from '../../assets/fly-on-the-wall.png'
import './Empathy.css';

export default function FlyOnTheWall() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column empathy-left-column">
                        <h1>Fly on the Wall Observation</h1>
                        <div className="square">
                            <img className="image" alt="Method" src={cardImage}/>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong> Gather information about a product, service, or experience by 
                                inconspicuously observing interactions, behaviors, and speech among participants.
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> Design team/researchers
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong>
                                <ol className="method-tb-list">
                                    <li>Find a place where you can observe without interruption</li>
                                    <li>Take notes of what you see and hear</li>
                                    <li>Consider using photography or videos to document</li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column empathy-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                                We will show you an example of the fly-on-the-wall observation method in action.</p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Understanding the food practices of UT Austin students.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong>With classes, jobs, student organizations, and other obligations 
                                many students find it challenging to find time throughout the day to eat. Students especially 
                                struggle with finding the time to regularly eat well balanced and nutritional meals, often 
                                opting for convenience or affordability instead.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong>There is a need to understand the food options available to UT Austin students. 
                            </p>
                            <p className="case-study-side-font">
                                <strong>Implementation: </strong>
                                <ol className="case-study-tb-list">
                                    <li>Our team decided to observe the eating patterns of students (mostly first years) at Jester Dining Hall.</li>
                                    <li>We sat at a table where we had an unobstructed view of most of the dining hall and pretended that we were like the other students there just eating.</li>
                                    <li>We took notes of the observations we made of students such as which lines most people went to and how long people spent in the dining hall</li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li>The Jester Dining Hall provided a lot of variety for students to pick from.</li>
                                    <li>There was actually a lot of food waste since students don’t have the option to take any of their food to go besides the Eco2Go option which costs additional money.</li>
                                    <li>We thought it would be interesting to learn more about why students don’t have the option to take things to go and what they do for sustenance in between meals or if they can’t make it to meals.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
