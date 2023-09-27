import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Quantitative() {

    const navigate = useNavigate();

    return(
        <div className="test-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        You picked Quantitative! 
                        <br/><br/>
                        This will help you measuring and quantifying aspects of a phenomenon.
                        <br/><br/>
                        Remember, some studies may adopt a mixed-methods approach, combining both qualitative and quantitative research methods. 
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        Are we testing with an individual user or multiple users?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase5/Quantitative/WalkThrough')}} >Individual</button>
                    <button className="button" onClick={() => {navigate('/phase5/Quantitative/ABTesting')}}>Multiple</button>
                </div>
            </div>
        </div>
    )
}

// export default function Quantitative() {

//     const navigate = useNavigate();

//     return(
//         <div>
//             <main>
//                 <div className="question-container test-container">
//                     <div className="test-textbox question-textbox">
//                         <h2>Context</h2>
//                     </div>
//                     <div className="question-textbox test-textbox">
//                         <h2>Single or Muliplayer?</h2>
//                     </div>
//                     <div className="selection-section">
//                         <button className="selection-button test-button" onClick={() => {navigate('/phase5/Quantitative/WalkThrough')}} >Single</button>
//                         <button className="selection-button test-button" onClick={() => {navigate('/phase5/Quantitative/ABTesting')}}>Multi</button>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     )
// }