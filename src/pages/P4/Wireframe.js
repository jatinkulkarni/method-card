import React from 'react';
import '../methodcard.css';
import cardImage from '../../assets/digitial-wireframing.png'
import './Prototype.css';

export default function Wireframe() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column prototype-left-column">
                        <h1>Digital Wireframe</h1>
                        <div className="square">
                            <img className="image" alt="Method" src={cardImage}/>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong> create a basic, structural outline of a digital interface. It helps to define the layout, placement of elements, and overall flow of the user experience.
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> Design team, developers, product manager, stakeholders
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong>
                                <ol className="method-tb-list">
                                    <li>Identify user requirements</li>
                                    <li>Select a wireframing tool</li>
                                    <li>Create basic elements</li>
                                    <li>Design User Interface elements </li>
                                    <li>Drag/drop elements to construct visual representation of the interface</li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column prototype-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                                We will show you an example of the digital wireframing method in action
                            </p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Making digital product in CID group project in order to improve parking management
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
                                        Conceptualizing the Parking Management System:
                                        <ul className="case-study-tb-list">
                                            <li>Utilize a digital wireframing tool to create a basic outline of the parking management system. This includes a user interface for a mobile app that displays available parking spots, a map of the campus, and navigation features.</li>
                                            <li>The wireframe should show how users will interact with the app, including searching for parking, viewing available spots, and navigating to their chosen location.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        User Flow Design:
                                        <ul className="case-study-tb-list">
                                            <li>Develop a user flow diagram using the wireframing tool. This illustrates how users will navigate through the app, from opening it to finding and reserving a parking spot.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Feedback and Iteration:
                                        <ul className="case-study-tb-list">
                                            <li>Share the wireframes with stakeholders and gather feedback. Make necessary adjustments based on their input to ensure the design meets their requirements.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Integration with Campus Infrastructure:
                                        <ul className="case-study-tb-list">
                                            <li>Create wireframes to demonstrate how the app will integrate with existing campus infrastructure, such as sensors to detect available parking spaces and synchronization with campus security systems.</li>
                                        </ul>
                                    </li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li>The digital wireframing process helped to visually represent the parking management system, making it easier for stakeholders to understand the proposed solution.</li>
                                    <li>By applying Digital Wireframing in this scenario, it allows to effectively create a visual blueprint for the parking management system.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
