import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Test.css';

export default function Phase5() {

    const navigate = useNavigate();

    return(
        <div className="test-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        Testing is a critical phase in the design process, ensuring that the solutions developed truly meet 
                        user needs. Collaborating with your design team, you can review feedback gathered during the "prototype" 
                        phase, making necessary adjustments based on iterative testing results. Remember, the goal of testing 
                        is not just to spot and fix problems but to refine the solution until it's the best possible fit for 
                        your user base.
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        Are you looking to understand "why" or "how", or are you trying to quantify and measure it?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase5/Qualitative')}} >Qualitative</button>
                    <button className="button" onClick={() => {navigate("/phase5/Quantitative")}}>Quantitative</button>
                </div>
            </div>
        </div>
    )
}

// export default function Phase5() {

//     const navigate = useNavigate();

//     return(
//         <div>
//             <main>
//                 <div className="question-container test-container">
//                     <div className="test-textbox question-textbox">
//                         <h2>Context</h2>
//                     </div>
//                     <div className="question-textbox test-textbox">
//                         <h2>Qualitative or Quantitative?</h2>
//                     </div>
//                     <div className="selection-section">
//                         <button className="selection-button test-button" onClick={() => {navigate('/phase5/Qualitative')}} >Qualitative</button>
//                         <button className="selection-button test-button" onClick={() => {navigate("/phase5/Quantitative")}}>Quantitative</button>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     )
// }
