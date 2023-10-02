import React from 'react';
import '../methodcard.css';
import cardImage from '../../assets/a-b-testing.png'
import './Test.css';

export default function ABTesting() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column test-left-column">
                        <h1>A/B  Testing</h1>
                        <div className="square">
                            <img className="image" alt="Method" src={cardImage}/>  
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong>Create 2 versions of a design to find which people prefer

                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> Designers create the 2 different versions but participants test the A/B versions
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong> 
                                <ol className="method-tb-list">
                                    <li>Create the 2 different versions of the product that the designers want to test and share with participants</li>
                                    <li>Create survey to get feedback on product</li>
                                    <li>Send out survey to a wide variety of people to collect data </li>
                                    <li>Look at collected data to determine which version people like better</li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column test-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                            We will show you an example of the A/B Testing method in action.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Testing the visual appeal of different websites colors and fonts
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong> A member on our design team is a CS major and needed to design a website for class. He had two different versions of the website created that had different fonts and colors, but he wanted to know which one was more visually appealing.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong>There is a need to test which version of the product is the most visually appealing
                            </p>
                            <p className="case-study-side-font">
                                <strong>Implementation: </strong>
                                <ol className="case-study-tb-list">
                                    <li>
                                    Create and Share:
                                        <ul className="case-study-tb-list">
                                            <li>We sent out the two different versions of the website to our participants so they could look at the product and decide which they like better</li>
                                        </ul>
                                    </li>
                                    <li>
                                    Set up:
                                        <ul className="case-study-tb-list">
                                            <li>We found a quiet room on campus with a table for us to sit at</li>
                                            <li>We set up the camera to record and set out paper and pens for the participants to write their letters</li>
                                        </ul>
                                    </li>
                                    <li>
                                    Create a testing method:
                                        <ul className="case-study-tb-list">
                                            <li>We made a survey for users to fill out that asks their thoughts and feelings on the different fonts and colors.</li>
                                        </ul>
                                    </li>
                                    <li>
                                    Test:
                                        <ul className="case-study-tb-list">
                                            <li>We sent out the surveys to our participants to gather the data on preferences</li>
                                        </ul>
                                    </li>
                                    <li>
                                    Analyze:
                                        <ul className="case-study-tb-list">
                                            <li>We looked at the results and determined that people liked the gray web page with sans serif font best</li>
                                        </ul>
                                    </li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li> The results of this testing are only quantitative- we found out what people prefer but not why they prefer it</li>
                                    <li>The testing is only done on a small test group, so the results may not be accurate to what most people would prefer</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
