import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Define.css';

export default function Designer() {

    const navigate = useNavigate();

    return(
        <div className="define-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        When collecting data, you can either collect qualitative data that will help you identify sentiment or 
                        quantitative data that will help you numerically identify overarching themes.
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        Would you like to use a quantitative or qualitative method of research?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase2/Designer/Weighted')}} >Quantitative</button>
                    <button className="button" onClick={() => {navigate('/phase2/Designer/UserPersona')}}>Qualitative</button>
                </div>
            </div>
        </div>
    )
}

// export default function Designer() {

//     const navigate = useNavigate();

//     return(
//         <div>
//             <main>
//                 <div className="question-container define-container">
//                     <div className="define-textbox question-textbox">
//                         <h2>Context</h2>
//                     </div>
//                     <div className="question-textbox define-textbox">
//                         <h2>Quantitative or Qualitative?</h2>
//                     </div>
//                     <div className="selection-section">
//                         <button className="selection-button define-button" onClick={() => {navigate('/phase2/Designer/Weighted')}} >Quantitative</button>
//                         <button className="selection-button define-button" onClick={() => {navigate('/phase2/Designer/UserPersona')}}>Qualitative</button>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     )
// }