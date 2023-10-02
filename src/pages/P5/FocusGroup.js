import React from 'react';
import '../methodcard.css';
import cardImage from '../../assets/focus-group.png'
import './Test.css';

export default function FocusGroup() {
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
                                <strong>Objective:</strong>Create a discussion among a small group of people to gain insights into their thoughts and feelings towards a product
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> The moderator is ideally a part of the design team, and the focus group is curated by the design team
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong>
                                <ol className="method-tb-list">
                                    <li>Curate a small group of individuals to discuss the product</li>
                                    <li>Pick someone from the design team to be the moderator</li>
                                    <li>Find quiet room to have discussion and set up recording</li>
                                    <li>Start with simple questions to warm up group and give feeling that they are peers</li>
                                    <li>
                                        Move into questions about the product. Some insights that might be found are:
                                        <ul className="method-tb-list">
                                            <li>Things about the product that aren’t ideal or common misconceptions about the problem</li>
                                            <li>Finding Underlying emotions the participants go through during a process</li>
                                            <li>Work arounds to problems</li>
                                        </ul>
                                    </li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column test-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                            We will show you an example of the Focus Group method in action.

                            </p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Testing the usefulness of Housing Scout, a resource for UT students to find housing
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong> With limited seating for UT’s student section at football games, in the past students with the big ticket have shown up expecting to get into the game only to be turned away.To combat this, UT created a process for students to claim tickets before the game. We ran this focus group to test UT’s new system and gain student insights on the problem.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong> There is a need for a more organized process for UT students to claim their football tickets.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Implementation: </strong>
                                <ol className="case-study-tb-list">
                                    <li>
                                    Pick group: 
                                        <ul className="case-study-tb-list">
                                            <li>We recruited a small group of UT students that went through the new student ticket claiming promise to participate in the focus group</li>
                                        </ul>
                                    </li>
                                    <li>
                                    Pick moderator: 
                                        <ul className="case-study-tb-list">
                                            <li>Although no one in our design group had experience being a moderator, we selected the member that was most comfortable doing empathy interviews</li>
                                        </ul>
                                    </li>
                                    <li>
                                    Set up:
                                        <ul className="case-study-tb-list">
                                            <li>We found a quiet room on campus that allowed us to sit in a circle and set up a camera to record the testing process</li>
                                        </ul>
                                    </li>
                                    <li>
                                    Start Discussion:
                                        <ul className="case-study-tb-list">
                                            <li>We started with simple and easy questions to warm the group up to each other, such as introducing themselves and discussing how their semester is going so far</li>
                                        </ul>
                                    </li>
                                    <li>
                                    Later Discussion: 
                                        <ul className="case-study-tb-list">
                                            <li>
                                                Once the group was comfortable with each other, the moderator started asking questions about the ticket claiming process. Some insights that were found:
                                                <ul className="case-study-tb-list">
                                                    <li>People were overall happy about knowing they secured a ticket because in the past they’ve been turned away</li>
                                                    <li>Issues with the speed of the </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li>The moderator is super important to getting valuable information out of the group, so pick the moderator carefully</li>
                                    <li>Not all the insights gained will focus around the product that is being tested, but it is still important to consider these insights in relation to your problem and product</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
