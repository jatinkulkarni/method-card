import React from 'react';
import '../methodcard.css';
import cardImage from '../../assets/lover-letter.png'
import './Test.css';

export default function LoveLetter() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column test-left-column">
                        <h1>LoveLetter</h1>
                        <div className="square">
                            <img className="image" alt="Method" src={cardImage}/>  
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong> Get insights as to why people enjoy and stick with a product or dislike and end up abandoning it 
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> A group of participants that are testing the product
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong> 
                                <ol className="method-tb-list">
                                    <li>Gather a group of people to write letters about the product</li>
                                    <li>Find a room to work in and set up camera to record and paper/pens for writing.</li>
                                    <li>Give the group time to look and use the product </li>
                                    <li>Have the group start by writing a love letter to the product</li>
                                    <li>After writing, have the group share their letters</li>
                                    <li>Repeat for breakup letter</li>
                                    <li>Keep letters and look through recordings for insights</li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column test-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                            We will show you an example of the Love Letter and the Breakup Letter method in action.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Testing the students feelings towards the lime scooters around UT campus and west campus.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong>  Lime scooters are found all over UT campus and the sidewalks in west campus. Many students use these scooters for transportation, however many people have also had issues with using the scooters and the placement of them when left behind.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong>There is a need for student reliable student transportation that doesn’t congest the sidewalks.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Implementation: </strong>
                                <ol className="case-study-tb-list">
                                    <li>
                                    Curate testing group:
                                        <ul className="case-study-tb-list">
                                            <li>We gathered UT students to write the letters, along with selecting two people from the design team to run the testing and to take notes</li>
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
                                    Introduce Product: 
                                        <ul className="case-study-tb-list">
                                            <li>We had a discussion with our participants about Lime scooters before we started to ensure that everyone was familiar enough with the product to participate</li>
                                        </ul>
                                    </li>
                                    <li>
                                    Write Love Letter: 
                                        <ul className="case-study-tb-list">
                                            <li>We had the participants start by spending 5 minutes writing a love letter to lime scooters</li>
                                        </ul>
                                    </li>
                                    <li>
                                    Share Letters: 

                                        <ul className="case-study-tb-list">
                                            <li>We had participants go in a circle and share their letters.</li>
                                            <li>The note taker wrote down physical reactions and tone of the participants readings along with what they said</li>
                                        </ul>
                                    </li>
                                    <li>
                                    Breakup Letter: 
                                        <ul className="case-study-tb-list">
                                            <li>After sharing we spent 5 minutes writing breakup letters</li>
                                        </ul>
                                    </li>
                                    <li>
                                    Finishing:
                                        <ul className="case-study-tb-list">
                                            <li>We asked to keep the letters and looked through the recording while reading the letters to gain insights on where the  needs improvement</li>
                                        </ul>
                                    </li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li> Having participants write both letters gave the design group a better understanding of peoples thoughts </li>
                                    <li>Recording the tone and physical reactions was important to really understanding peoples feelings </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
