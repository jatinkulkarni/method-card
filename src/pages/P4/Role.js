import React from 'react';
import '../methodcard.css';
import './Prototype.css';

export default function Role() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column prototype-left-column">
                        <h1>Role</h1>
                        <div className="square">
                            <p>
                                Image to be added later
                            </p>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong> simulate user interaction and scenarios to identify potential usability issues, gather feedback and make improvements

                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> multiple participants interacting together

                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong> 
                                <ol className="method-tb-list">
                                    <li>Define role and participants.</li>
                                    <li>Develop role playing scenario.</li>
                                    <li>Set up the environment.</li>
                                    <li>Explain rules and objectives, initiate the scenario </li>
                                    <li>Observe and document interaction.</li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column prototype-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                                We will show you an example of the role playing method in action.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Study: Making digital product in CID group project in order to improve parking management
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong>UT campus is currently facing challenges with parking management. There is a lack of clear signage, leading to confusion and congestion, especially during peak hours. This has resulted in complaints from students, faculty and staff.

                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong>There is a need for the user-friendly digital solution to optimize parking allocation and provide clear guidance to available parking spaces.
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
