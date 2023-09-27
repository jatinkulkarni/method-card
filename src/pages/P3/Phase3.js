import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Ideate.css';

export default function Phase3() {

    const navigate = useNavigate();

    return(
        <div className="ideate-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        Ideation is a crucial stage in the design process, ensuring that the concepts generated are both innovative and user-centric. 
                        <br/><br/>
                        You can brainstorm and expand upon ideas that emerged from the "define" island, evolving them based on insights gathered. 
                        <br/><br/>
                        Remember, the goal of ideation is not just to generate multiple solutions but to cultivate the most effective and resonant 
                        ideas for your user base.
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        Are you ideating alone or with your team?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase3/MindMap')}} >Individual</button>
                    <button className="button" onClick={() => {navigate("/phase3/Multi")}}>Team</button>
                </div>
            </div>
        </div>
    )
}

// export default function Phase3() {

//     const navigate = useNavigate();

//     return(
//         <div>
//             <main>
//                 <div className="question-container ideate-container">
//                     <div className="ideate-textbox question-textbox">
//                         <h2>Context</h2>
//                     </div>
//                     <div className="question-textbox ideate-textbox">
//                         <h2>Single or Multiplayer?</h2>
//                     </div>
//                     <div className="selection-section">
//                         <button className="selection-button ideate-button" onClick={() => {navigate('/phase3/MindMap')}} >Single</button>
//                         <button className="selection-button ideate-button" onClick={() => {navigate("/phase3/Multi")}}>Multi</button>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     )
// }
