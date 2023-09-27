import React from 'react';
import '../methodcard.css';
import cardImage from '../../assets/card-sort.png'
import './Define.css';

export default function Sort() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column define-left-column">
                        <h1>Card Sort</h1>
                        <div className="square">
                            <img className="image" alt="Method " src={cardImage}/>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong> gather insights, structure information, and improve the organization, navigation, and user experience of a website, application, or other.
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> designers, developers, researchers can perform this on participants
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong> 
                                <ol className="method-tb-list">
                                    <li>Define objective of your card sort. </li>
                                    <li>List all items of content that you want to sort. </li>
                                    <li>Select between open or closed card sorting. (Open allows participants to create their own categories while closed provides predefined categories for participants to sort content into) </li>
                                    <li>Conduct card sort on recruited participants. </li>
                                    <li>Analyze results and identify patterns, common groupings. Refine your information architecture, implement, and test. </li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column define-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                                We will show you an example of the “card sorting method in action.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong>The University of Texas Filipino Student Association (UTFSA) has a website that provides information about their organization, events, and resources.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong>UTFSA wanted to make it easier for students to find and join "Fams" within their organization.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Solution: </strong>UTFSA decided to create a "Find a Fam" page on their website to centralize all relevant information. To determine the best way to structure this new page, they opted for the "Card Sorting" method to get insights from their members.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Implementation: </strong>
                                <ol className="case-study-tb-list">
                                    <li>Preparing the Cards: UTFSA created digital cards, each representing a piece of content related to the "Find a Fam" program. These included information about how to join, fam leaders, definitions.</li>
                                    <li>Member Participation: UTFSA reached out to their members and invited them to participate in the card sorting activity. They explained the purpose: to gather insights on how the "Find a Fam" page should be organized for easy access.</li>
                                    <li>Organizing the Content: Members were given the digital cards and asked to group them based on what they thought would make the most sense. They were encouraged to suggest labels or categories for the groups.</li>
                                    <li>Data Collection: As members completed the card sorting, UTFSA recorded their groupings, label suggestions, and any comments they made during the exercise.</li>
                                    <li>Analyzing the Results: After several members had completed the card sorting, UTFSA analyzed the data to identify patterns in how members naturally organized the content. This information was used to structure the "Find a Fam" page.</li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li>The "Find a Fam" page now makes it easier for members to navigate fams that are looking for adings.</li>
                                    <li>The card sorting exercise allowed for user-centered design, optimized information architecture, enhance usability, and higher engagement.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
