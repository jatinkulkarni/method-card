import React from 'react';
import '../methodcard.css';
import cardImage from '../../assets/bodystorming.png'
import './Ideate.css';

export default function BodyStorming() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column ideate-left-column">
                        <h1>BodyStorming</h1>
                        <div className="square">
                            <img className="image" alt="Method" src={cardImage}/>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong>  Give designers a deeper understanding of the user(s) they are designing for. This method lets the designers see things from the users’ perspectives and understand their needs. It is an empathy tool.
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> The design team as well as the users, since the users will be able to critique ideas and influence decisions that will end up impacting their lives.
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong> 
                                <ol className="method-tb-list">
                                    <li>Define a specific scenario you are trying to design for. </li>
                                    <li>Physically re-enact or roleplay the situation. Make sure the person acting out the scenario is subjected to the same conditions as the user (can be done using props). </li>
                                    <li>Have others document observations such as insights, challenges, or opportunities that may come up. </li>
                                    <li>Come together as a group to provide insights and feedback.</li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column ideate-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                                We will show you an example of the Bodystorming method in action.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Generating ideas on how to make the most out of office hours with the TA or Professor
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong> Depending on the class, Teaching Assistants have scheduled times where they can assist students with class work and topics. It may be difficult to match those times with your own schedule, and the queue might be long enough to where students don’t have enough time to fully understand what is being taught.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong>There is a need for students to know how to fully take advantage of their limited time in office hours.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Implementation: </strong>
                                <ol className="case-study-tb-list">
                                    <li>
                                    Define the Scenario:
                                        <ul className="case-study-tb-list">
                                            <li>Define the problem and situation that makes sense with the problem statement.</li>
                                            <li>Our scenario was that of a student going to office hours. </li>
                                        </ul>
                                    </li>
                                    <li>
                                    Reenact the situation:
                                        <ul className="case-study-tb-list">
                                            <li>Create the space needed for the reenactment to feel genuine. </li>
                                            <li>The participants went to the GDC and brought out their laptops and other equipment as props.</li>
                                            <li>The participants went to the GDC and brought out their laptops and other equipment as props.</li>
                                        </ul>
                                    </li>
                                    <li>
                                    Document:
                                        <ul className="case-study-tb-list">
                                            <li>The participants then reenacted the situation while I documented insights and observations such as not knowing what questions to ask, and feeling nervous.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Gain Feedback:
                                        <ul className="case-study-tb-list">
                                            <li>Once I revealed my observations, we then generated ideas as a group.</li>
                                        </ul>
                                    </li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li>This was another fun way to generate ideas. It also gave us the chance to see what this interaction was like for both the student AND the TA.</li>
                                    <li>We ended up thinking of tips and solutions for both parties instead of just the student.</li>
                                </ul>
                            </p>
                            <p className="case-study-side-font">
                                Want to learn more? We’ve linked helpful resources below  
                            </p>
                            <p className="case-study-side-font">
                                <a href="https://link.springer.com/article/10.1007/s00779-003-0238-7" target="blank">More Case Studies</a>
                            </p>
                            <p className="case-study-side-font">
                                <a href="https://www.interaction-design.org/literature/topics/bodystorming" target="blank">Forms of Bodystorming & New Practices</a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
