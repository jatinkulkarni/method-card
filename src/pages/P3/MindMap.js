import React from 'react';
import '../methodcard.css';
import './Ideate.css';


export default function MindMap() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column ideate-left-column">
                        <h1>Mind Map</h1>
                        <div className="square">
                            <p>
                                Image to be added later
                            </p>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong> Show how different pieces of data or ideas are connected to better understand and retain information. It is a way to generate ideas through association and lets designers see the bigger picture by breaking down large topics or projects into manageable chunks.
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> A designer or researcher
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong> 
                                <ol className="method-tb-list">
                                    <li>Start in the middle of the page with the central theme/main idea. </li>
                                    <li>Work outwards in all directions using lines, arrows, branches, and different colors to create a growing diagram made of keywords, phrases, concepts, facts and figures that are connected to the main theme or to other ideas.</li>
                                    <li>Draw freely and quickly (long pauses are not to be encouraged) without judgment.</li>
                                    <li>Review it and revise/reorder it until you are satisfied with your results.</li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column ideate-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                                We will show you an example of the Mind Mapping method in action.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Creating a Mind Map while ideating new types of possible transportation for UT students
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong> While UT has on campus dorms and apartments nearby, transportation can be a hassle for those commuting from farther away. Busses are not always reliable, Lime Scooters and Bicycles are not readily available in suburbs, and Ubers/Lyfts can be expensive.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong>There is a need for more reliable and affordable modes transportation for UT students living far from campus.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Implementation: </strong>
                                <ol className="case-study-tb-list">
                                    <li>
                                        Role-Playing Setup:
                                        <ul className="case-study-tb-list">
                                            <li>Identify key stakeholders to participate in the role-playing exercise. This may include students, faculty, staff, and parking management personnel.</li>
                                            <li>Assign specific roles to participants, such as a student looking for parking, a faculty member needing a reserved spot, and a parking attendant using the new system.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Scenario Development:
                                        <ul className="case-study-tb-list">
                                            <li>Create a realistic scenario for the role-playing exercise. For example, it could involve a busy Monday morning with limited parking spots available.</li>
                                            <li>Provide each participant with background information about their role, including their specific goals and challenges.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Role-Playing Session:
                                        <ul className="case-study-tb-list">
                                            <li>Conduct the role-playing session in a simulated environment, such as a classroom or a designated parking area.</li>
                                            <li>Participants act out their assigned roles, interacting with each other and the parking management system.</li>
                                        </ul>
                                    </li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li>The role-playing exercise provided valuable insights into how different user groups interact with the parking management system.</li>
                                    <li>The student may have found it difficult to locate available parking spots, while the faculty member may have encountered issues with reserving a spot.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
