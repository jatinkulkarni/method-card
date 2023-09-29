import React from 'react';
import '../methodcard.css';
import cardImage from '../../assets/graffiti-wall.png'
import './Define.css';

export default function Graffiti() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column define-left-column">
                        <h1>Graffiti</h1>
                        <div className="square">
                            <img className="image" alt="Method" src={cardImage}/>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong> encourage creativity, gather diverse ideas and feedback, and foster open collaboration among team members, stakeholders, or users. 
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> design team, cross-functional teams, stakeholders, user groups
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong> 
                                <ol className="method-tb-list">
                                    <li>Choose a space where participants can collaborate, physical or digital (whiteboard, Miro). </li>
                                    <li>State the design topic.</li>
                                    <li>Set a timeframe.  </li>
                                    <li>Encourage team members, stakeholders, or users to contribute their thoughts to the graffiti wall.</li>
                                    <li>Review and analyze ideas. </li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column define-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                                We will show you an example of the graffiti wall in action.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Understanding the food practices of UT Austin students.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong>With classes, jobs, student organizations, and other obligations many students find it challenging to find time throughout the day to eat. Students especially struggle with finding the time to regularly eat well balanced and nutritional meals, often opting for convenience or affordability instead.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong>There is a need to understand the food options available to UT Austin students.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Implementation: </strong>
                                <ol className="case-study-tb-list">
                                    <li>Participants:
                                        <ul className="case-study-tb-list">
                                            <li>A diverse group of UT Austin students representing various backgrounds and dietary preferences.</li>
                                        </ul>
                                    </li>
                                    <li>Data Collection:
                                        <ul className="case-study-tb-list">
                                            <li>Participants were given access to physical or digital graffiti walls, where they could express their experiences and preferences regarding food options on campus.</li>
                                        </ul>
                                    </li>
                                    <li>Data Analysis:
                                        <ul className="case-study-tb-list">
                                            <li>Graffiti wall contributions were analyzed to identify recurring themes, preferences, and concerns.</li>
                                        </ul>
                                    </li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li>Students expressed both satisfaction with certain food options and concerns about others, shedding light on areas for improvement in campus dining services.</li>
                                    <li>The Graffiti Wall method provided a platform for students to openly express their opinions, enabling a deeper understanding of their dietary preferences and expectations.</li>
                                </ul>
                            </p>
                            <p className="case-study-side-font">
                                Want to learn more? We’ve linked helpful resources below  
                            </p>
                            <p className="case-study-side-font">
                                <a href="https://medium.com/abbas-sbeity/design-methods-graffiti-walls-5ccba9fe7639" target="blank">https://medium.com/abbas-sbeity/design-methods-graffiti-walls-5ccba9fe7639</a>
                            </p>
                            <p className="case-study-side-font">
                                <a href="https://medium.com/@MotoVibes/graffiti-and-agile-design-a-philosophical-approach-5d9880641b66" target="blank">https://medium.com/@MotoVibes/graffiti-and-agile-design-a-philosophical-approach-5d9880641b66</a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
