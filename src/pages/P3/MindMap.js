import React from 'react';
import '../methodcard.css';
import cardImage from '../../assets/mind-mapping.png'
import './Ideate.css';


export default function MindMap() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column ideate-left-column">
                        <h1>Mind Map</h1>
                        <div className="square">
                            <img className="image" alt="Method" src={cardImage}/>
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
                                        Creating the Main Theme:
                                        <ul className="case-study-tb-list">
                                            <li>Transportation was the word chosen to be the central idea of the Mind Map. </li>
                                            <li>One word or a short phrase is ideal.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Adding the Main Branches:
                                        <ul className="case-study-tb-list">
                                            <li>From the main idea, about four categories were created- private, public, expensive, time-saving. There could be more, but those four are what was generated at the time.</li>
                                            <li>Limited supplies were used for this mind map, but Colors should be used to symbolize to symbolize notable connections and pictures for a more visual effect.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Adding More:
                                        <ul className="case-study-tb-list">
                                            <li>From those main branches, expand into other ideas and connect what makes sense.</li>
                                            <li>Then reflect on your mind map and revise or add more connections/ideas.</li>
                                        </ul>
                                    </li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li>Mind Mapping made the it easier to identify groups and similarities within the large theme of “transportation”</li>
                                    <li>Some people tend to make their Mind Maps aesthetic and artsy, but I learned that makes it harder to generate ideas. Editing and pausing should be minimal and every possibility should be mapped because it may prove to be useful later on.</li>
                                </ul>
                            </p>
                            <p className="case-study-side-font">
                                Want to learn more? We’ve linked helpful resources below  
                            </p>
                            <p className="case-study-side-font">
                                <a href="https://cleverism.com/techniques-idea-generation-mind-maps/" target="blank">Intro and Usages to Mind Maps</a>
                            </p>
                            <p className="case-study-side-font">
                                <a href="https://www.mural.co/blog/mind-mapping" target="blank">Tips, examples, & templates</a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
