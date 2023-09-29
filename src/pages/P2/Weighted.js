import React from 'react';
import '../methodcard.css';
import cardImage from '../../assets/weighted-matrix.png'
import './Define.css';

export default function Weighted() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column define-left-column">
                        <h1>Weighted</h1>
                        <div className="square">
                            <img className="image" alt="Method" src={cardImage}/>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong> provide a systematic and structured approach for evaluating and comparing different design options or alternatives.
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> designers, team members, users 
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong>
                                <ol className="method-tb-list">
                                    <li>Define design objectives.</li>
                                    <li>Identify criteria that will be used to assess design alternatives (should be measurable).</li>
                                    <li>Assign weights to each criteria based on importance. </li>
                                    <li>Establish a scoring system for each criteria (numerical or descriptive scale). </li>
                                    <li>Evaluate design alternatives and score it based on how it performs for each criteria.</li>
                                    <li>Calculate total weighted scores and select preferred design. </li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column define-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                                We will show you an example of the weighted matrix method in action.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Course Recommendation for BDP Students
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong>The Design Strategies Certificate provides students with a multidisciplinary framework in design thinking. To address the challenge of course selection, we interviewed students and utilized the weighted matrix method to help them personalize their own course selections.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong>Students pursuing the Design Strategies Certificate often struggle to select among the wide array of classes offered. With a diverse range of classes, students may find it difficult to select courses that align with their interests and career aspirations. This can lead to suboptimal course selections and inability to maximize the benefits of the certificate.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Implementation: </strong>
                                <ol className="case-study-tb-list">
                                    <li>Data Collection:
                                        <ul className="case-study-tb-list">
                                            <li>We gathered student information (GPA, career goals, area of interests, etc.) and course information offered in the Design Strategies strand (course description, faculty, etc.)</li>
                                        </ul>
                                    </li>
                                    <li>Weight Assignment:
                                        <ul className="case-study-tb-list">
                                            <li>We helped students define the weights for various factors, such as career goals, areas of interest, past performance, and faculty-student compatibility.</li>
                                        </ul>
                                    </li>
                                    <li>Rank:
                                        <ul className="case-study-tb-list">
                                            <li>Students rank each course for each criterion on a descriptive scale (e.g., unimportant, slightly important, important, very important).</li>
                                        </ul>
                                    </li>
                                    <li>Matching and Recommendation:
                                        <ul className="case-study-tb-list">
                                            <li>A score is calculated for each student by multiplying the weight for each criterion by the student's ranking for that criterion.</li>
                                        </ul>
                                    </li>
                                    <li>Feedback and Adjustment:
                                        <ul className="case-study-tb-list">
                                            <li>Courses with higher scores are recommended to each student specific to their personalization.After receiving course recommendations, students had the opportunity to provide feedback and make adjustments.</li>
                                        </ul>
                                    </li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li>The implementation of the weighted matrix method in has allowed students to receive tailored recommendations that consider their unique career goals and areas of interest.</li>
                                    <li>This method allows for objective decision-making, prioritization, efficiency driven by data that align with project objectives.</li>
                                </ul>
                            </p>
                            <p className="case-study-side-font">
                                Want to learn more? We’ve linked helpful resources below  
                            </p>
                            <p className="case-study-side-font">
                                <a href="https://airfocus.com/blog/weighted-decision-matrix-prioritization/" target="blank">https://airfocus.com/blog/weighted-decision-matrix-prioritization/</a>
                            </p>
                            <p className="case-study-side-font">
                                <a href="https://www.designorate.com/decision-matrix-decision-making/" target="blank">https://www.designorate.com/decision-matrix-decision-making/</a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
