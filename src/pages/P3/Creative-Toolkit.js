import React from 'react';
import '../methodcard.css';
import cardImage from '../../assets/creative-toolkit.png'
import './Ideate.css';

export default function CreativeTK() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column ideate-left-column">
                        <h1>Creative Toolkit</h1>
                        <div className="square">
                            <img className="image" alt="Method" src={cardImage}/>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong> Give designers a set of elements that can be reused for a variety of research sessions in participatory design. This can be helpful in engaging people to project thoughts, feelings, desires, and emotions that might be hard otherwise when using traditional research methods & helps with team building.
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> Designers, researchers, others involved in the design process.
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong> 
                                <ol className="method-tb-list">
                                    <li>Collect several items to create your desired kit. You can have Lego blocks, buttons, clay, paper, markers, pencils, or pens - anything accommodating a range of potential exercises for participants. </li>
                                    <li>Use any/all of these items with your design team while ideating, and have fun with it.</li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column ideate-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                                We will show you an example of the Creative Toolkit method in action.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Brainstorming for ways to prepare and protect ourselves from harsh Austin Winters.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong> Summers have been getting very hot recently, and winters will be getting even colder. Last winter, many apartments in west campus had lost power. It was very difficult for those with no heater and a low stock of water.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong> There is a need to figure out ways to prepare for winter storms in Austin.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Implementation: </strong>
                                <ol className="case-study-tb-list">
                                    <li>
                                        Collecting Items
                                        <ul className="case-study-tb-list">
                                            <li>The type of items you have in your toolkit will be based on the activities you want to encourage while ideating.</li>
                                            <li>Sketching and drawing kits will contain paper and mediums such as paint, pencils, crayons, markers, etc.</li>
                                            <li>Collage kits will contain large words and images.</li>
                                            <li>Flexible modeling kits would contain clay, lego blocks, and other building/shaping mediums.</li>
                                            <li>Larger toolboxes with a wide range of items could also be created.</li>
                                            <li>Our toolbox had pen, markers, highlighters, and small sheets of paper.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Using Those Items:
                                        <ul className="case-study-tb-list">
                                            <li>Once you have created your toolbox, your team can now use it to generate new ideas. </li>
                                            <li>We drew on the paper and created shapes and mockups as well</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Feedback and Iteration:
                                        <ul className="case-study-tb-list">
                                            <li>It is important to always reflect on your creations at the end of brainstorming sessions. Critique and suggest changes to each others work & revise your idea based on that.</li>
                                        </ul>
                                    </li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li>The creative toolkit was a fun, hands-on way to generate new ideas. Being able to physically create designs was something I initially thougt physically creating our ideas belonged in the prototyping stage.</li>
                                    <li>We realized we could save our creations inside this toolkit, and it could be reused by other participants with the similar design problems.</li>
                                </ul>
                            </p>
                            <p className="case-study-side-font">
                                Want to learn more? We’ve linked helpful resources below  
                            </p>
                            <p className="case-study-side-font">
                                <a href="https://davidgauntlett.com/wp-content/uploads/2013/04/LEGO_SERIOUS_PLAY_OpenSource_14mb.pdf" target="blank">Serious Play with LEGOs</a>
                            </p>
                            <p className="case-study-side-font">
                                <a href="https://www.researchgate.net/publication/265498443_Harnessing_PeopleAos_Creativity_Ideation_and_Expression_through_Visual_Communication" target="blank">Velcro Modeling</a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
