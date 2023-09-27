import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Define.css';

export default function User() {

    const navigate = useNavigate();

    return(
        <div className="define-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        When working with users, you can either engage them in conversation or have them user other methods to encourage discussion.
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        Would you like to user a verbal or nonverbal method?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase2/User/Like5')}} >Verbal</button>
                    <button className="button" onClick={() => {navigate('/phase2/User/NonVerbal')}}>Non Verbal</button>
                </div>
            </div>
        </div>
    )
}

// export default function User() {

//     const navigate = useNavigate();

//     return(
//         <div>
//             <main>
//                 <div className="question-container define-container">
//                     <div className="define-textbox question-textbox">
//                         <h2>Context</h2>
//                     </div>
//                     <div className="question-textbox define-textbox">
//                         <h2>Verbal or Non Verbal?</h2>
//                     </div>
//                     <div className="selection-section">
//                         <button className="selection-button define-button" onClick={() => {navigate('/phase2/User/Like5')}} >Verbal</button>
//                         <button className="selection-button define-button" onClick={() => {navigate('/phase2/User/NonVerbal')}}>Non Verbal</button>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     )
// }