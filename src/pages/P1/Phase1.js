import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Empathy.css';

export default function Phase1() {

    const navigate = useNavigate();

    return(
        <div className="empathy-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        Empathizing with those who work, create, or experience the problem you are hoping to solve is the most 
                        fundamental step in the design process. In doing so its important to understand your resources, and 
                        determine whether you have the tools to focus your time on group observation and data collection, or 
                        on an individual’s current experience.
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        Would you like to focus initial data collection on a group/general demographic or a unique individual?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase1/Group')}} >Group</button>
                    <button className="button" onClick={() => {navigate("/phase1/Individual")}}>Individual</button>
                </div>
            </div>
        </div>
    )
}


// export default function Phase1() {

//     const navigate = useNavigate();

//     return(
//         <div>
//             <main>
//                 <div className="question-container empathy-container">
//                     <div className="empathy-textbox question-textbox">
//                         <h2>Context</h2>
//                     </div>
//                     <div className="question-textbox empathy-textbox">
//                         <h2>Group or Individual?</h2>
//                     </div>
//                     <div className="selection-section">
//                         <button className="selection-button empathy-button" onClick={() => {navigate('/phase1/Group')}} >Group</button>
//                         <button className="selection-button empathy-button" onClick={() => {navigate("/phase1/Individual")}}>Individual</button>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     )
// }