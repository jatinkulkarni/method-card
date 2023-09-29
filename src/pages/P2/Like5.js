import React from 'react';
import '../methodcard.css';
import cardImage from '../../assets/like-5.png'
import './Define.css';

export default function Like5() {
    return(
        <div>
            <main>
                <div class="container">
                    <div className="left-column define-left-column">
                        <h1>Explain Like I am 5</h1>
                        <div className="square">
                            <img className="image" alt="Method" src={cardImage}/>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Objective:</strong> simplify complex concepts to make them easy to understand, especially for those who might not have much knowledge or experience in a particular field, similar to how you would explain something to a 5-year old.
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>Who:</strong> designers or team members utilize it on users or stakeholders, any audience
                            </p1>
                        </div>
                        <div className="method-tb">
                            <p1 className="method-side-font">
                                <strong>How:</strong> 
                                <ol className="method-tb-list">
                                    <li>Determine what you want to design or communicate (a product, a website, a presentation, etc.)</li>
                                    <li>Simplify your design concept into its basic parts. </li>
                                    <li>Use simple language. </li>
                                    <li>Use visuals or storytelling aspects to make your design easier to understand.</li>
                                </ol>
                            </p1>
                        </div>
                    </div>
                    <div className="right-column define-right-column">
                        <h1>Case Study</h1>
                        <div className="case-study-tb">
                            <p className="case-study-side-font">
                                We will show you an example of the “Explain like I’m 5” method in action.   
                            </p>
                            <p className="case-study-side-font">
                                <strong>Study: </strong>Understanding the food practices of UT Austin students.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Background: </strong>With classes, jobs, student organizations, and other obligations many students find it challenging to find time throughout the day to eat. Students especially struggle with finding the time to regularly eat well balanced and nutritional meals, often opting for convenience or affordability instead.
                            </p>
                            <p className="case-study-side-font">
                                <strong>Problem Statement: </strong>There is a need to understand the food options available to UT Austin students. 
                            </p>
                            <p className="case-study-side-font">
                                <strong>Implementation: </strong>
                                <ol className="case-study-tb-list">
                                    <li>Participants:
                                        <ul className="case-study-tb-list">
                                            <li>UT Austin students of all ages and backgrounds.</li>
                                            <li>No big words, just pictures and simple questions!</li>
                                        </ul>
                                    </li>
                                    <li>Data Collection:
                                        <ul className="case-study-tb-list">
                                            <li>We asked students to draw pictures of their favorite foods they eat on or near campus.</li>
                                            <li>We also asked students to draw their least favorite foods on or near campus.</li>
                                        </ul>
                                    </li>
                                    <li>Data Analysis:
                                        <ul className="case-study-tb-list">
                                            <li>We looked at all the food drawings and saw which foods/food spots were consistently drawn.</li>
                                        </ul>
                                    </li>
                                </ol>
                            </p>
                            <p className="case-study-side-font">
                                <strong>Insights: </strong>
                                <ul className="case-study-tb-list">
                                    <li>We learned that students are happy with their food, while others want more special choices. This simple and fun way of looking at food can help UT Austin make even better food options.</li>
                                    <li>The ELI5 methodology made the research more approachable and ensures that the study findings can reach a broader audience, including those who might not typically engage with academic research.</li>
                                </ul>
                            </p>
                            <p className="case-study-side-font">
                                Want to learn more? We’ve linked helpful resources below  
                            </p>
                            <p className="case-study-side-font">
                                <a href="https://medium.com/hubspot-product/explain-it-like-im-5-what-is-a-product-designer-121aad98c047" target="blank">https://medium.com/hubspot-product/explain-it-like-im-5-what-is-a-product-designer-121aad98c047</a>
                            </p>
                            <p className="case-study-side-font">
                                <a href="https://www.marikofrost.com/post/what-is-a-design-system-explain-it-like-i-m-five-eli5" target="blank">https://www.marikofrost.com/post/what-is-a-design-system-explain-it-like-i-m-five-eli5</a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
