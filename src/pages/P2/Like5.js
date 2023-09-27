import React from 'react';
import '../methodcard.css';
import './Define.css';

export default function Like5() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column define-left-column">
                        <h1>Explain Like I am 5</h1>
                        <div className="square">
                            <p>
                                Image to be added later
                            </p>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong> simplify complex concepts to make them easy to understand, especially for those who might not have much knowledge or experience in a particular field, similar to how you would explain something to a 5-year old.
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> designers or team members utilize it on users or stakeholders, any audience
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong> 
                                <ol className="method-tb-list">
                                    <li>Determine what you want to design or communicate (a product, a website, a presentation, etc.)</li>
                                    <li>Simplify your design concept into its basic parts. </li>
                                    <li>Use simple language. </li>
                                    <li>Use visuals or storytelling aspects to make your design easier to understand.</li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column define-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                                We will show you an example of the “Explain like I’m 5” method in action.   
                            </p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Interdisciplinary Exploration
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong>Meet Emily, a college student enrolled in a Bridging Disciplines Program. Emma loves to learn about many different subjects, but she often finds it challenging to connect the dots between those diverse fields of study.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong>Emily wants to make the most of her Bridging Disciplines program, but she's not sure how to connect all these different subjects and make it all work together.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Implementation: </strong>
                                <ol className="case-study-tb-list">
                                    <li>Building the Map: Emily starts on a blank Miro board. She writes down all the different subjects she's studying, like art, science, engineering, and what she’s interested in.</li>
                                    <li>Making Connections: She draws lines between the subjects that are related. For example, she connects art with engineering because she is interested in the design side of engineering.</li>
                                    <li>Planning Courses: Emily looks at her map and picks courses that help her reach her goals.</li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li>Emily's "Learning Map" helps her see how all her interests fit together. Her program becomes more exciting and meaningful.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
