import React from 'react';
import '../methodcard.css';
import cardImage from '../../assets/user-journey-map.png'
import './Test.css';

export default function WalkThrough() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column test-left-column">
                        <h1>Focus Group</h1>
                        <div className="square">
                            <img className="image" alt="Method" src={cardImage}/>  
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong> Create a visual of a users interaction with a product so that each step can be improved upon
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> The designers make the personas, scenarios, and journey map
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong>
                                <ol className="method-tb-list">
                                    <li>Pick a scenario involving your product</li>
                                    <li>Pick a persona as a viewpoint for the journey map</li>
                                    <li>Draw the personas journey through the scenario, making sure to note thoughts and feelings</li>
                                    <li>Look at the high and low points of the map to find what works and what doesn’t for the product</li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column test-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                            We will show you an example of the User Journey Map method in action.

                            </p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Testing the usefulness of Housing Scout, a resource for UT students to find housing
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong> UT students struggle to find housing in Austin that is close to campus and within their price range. There is also limited housing on campus, which means students are forced to go off campus to find a place to live. To help students find housing, there are some resources such as the Housing Scout
                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong> There is a need for a resource to help UT students find off campus housing.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Implementation: </strong>
                                <ol className="case-study-tb-list">
                                    <li>
                                    Pick a scenario:
                                        <ul className="case-study-tb-list">
                                            <li>We chose the scenario of a student looking for off campus housing in the Fall and using Housing Scout</li>
                                        </ul>
                                    </li>
                                    <li>
                                    Pick a Persona:  
                                        <ul className="case-study-tb-list">
                                            <li>We chose the persona of Alex, a first year who is currently living on campus with no roommates and looking for housing for the next year. His parents are not helping pay for housing next year and he doesn’t have a car, so he needs something close and affordable.</li>
                                        </ul>
                                    </li>
                                    <li>
                                    Create Map: We imagined being Alex and going through the process of using Housing Scout. We drew what the Alex would go through, and noted some of his thoughts and feelings such as:
                                        <ul className="case-study-tb-list">
                                            <li>“Why is every option so expensive?”</li>
                                            <li>“I might need roommates to bring the price down”</li>
                                            <li>“What is smart housing called and how can I get it?”</li>
                                        </ul>
                                    </li>
                                    <li>
                                    Analyze: We looked at the low points and noticed that Alex had a lot more additional questions. Although Housing Scout gave a lot of options, Alex realized he needed more information to find the right housing for him
                                    </li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li>This was a theoretical testing, so while we can guess what the user is going through, there could be other things the design team hasn’t considered</li>
                                    <li>Repeating the process with multiple personas in the same scenario would give the design team a better idea of the low points for people with the product</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
