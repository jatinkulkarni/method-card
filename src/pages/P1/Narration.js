import React from 'react';
import '../methodcard.css';
import cardImage from '../../assets/narration.png'
import './Empathy.css';

export default function Narration() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column empathy-left-column">
                        <h1>Narration</h1>
                        <div className="square">
                            <img className="image" alt="Method" src={cardImage}/>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong> Understand the thought process of your participant while they perform a process.
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> participant, design team
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong>
                                <ol className="method-tb-list">
                                    <li>Have the participant narrate what they are doing while they are performing a process or specific task.</li>
                                    <li>Ask them what they are thinking while they are doing the task.</li>
                                    <li>Ask them why they specifically did certain things to gain more insight.</li>
                                    <li>Consider having them approach the process in alternative ways.</li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column empathy-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                                We will show you an example of the case study method in action.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Understanding the use of AI tools among UT Austin students
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong>The creation of ChatGPT and other open source AI tools caused talk among the possibilities 
                                of AI to explode within the media and general population. Students are especially finding ChatGPT and other AI tools 
                                helpful with their schoolwork, but because of the increasing use of these tools many are concerned with plagiarism and 
                                untraditional methods of learning. 
                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong>There is a need to understand how students use ChatGPT and other AI tools to assist 
                                with their schoolwork or other aspects of their life.  
                            </p>
                            <p className="case-study-side-font">
                                <strong>Implementation: </strong>
                                <ol className="case-study-tb-list">
                                    <li>We provided the student with a prompt and asked them to choose an AI tool to help answer the prompt.</li>
                                    <li>The student chose ChatGPT and asked it the question we prompted. </li>
                                    <li>
                                        The student then narrated why they chose ChatGPT and what questions they asked ChatGPT until they found 
                                        an answer they felt comfortable with sharing. 
                                    </li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li>
                                        Even though we told the student they could choose any AI tool they stuck with ChatGPT and didn’t try another 
                                        tool even when the answer ChatGPT gave at first wasn’t satisfactory. 
                                    </li>
                                    <li>
                                        Instead of picking another tool to help them answer the question, they asked ChatGPT several different iterations 
                                        of the small question in order to receive a different answer. They said that they chose the words “clarify” 
                                        and “detail” because they felt like they needed to be more specific with the tool in order to receive a better answer.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
