import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Define.css';

export default function NonVerbal() {

    const navigate = useNavigate();

    return(
        <div className="define-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        Passive methods are good for collecting information from users over time. The data you gather often 
                        represents a larger population. On the other hand, active methods that involve one-on-one interactions 
                        between a designer and user can provide more pointed information
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                    Would you like to use an active or passive method?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase2/User/NonVerbal/Graffiti')}} >Passive</button>
                    <button className="button" onClick={() => {navigate('/phase2/User/NonVerbal/Sort')}}>Active</button>
                </div>
            </div>
        </div>
    )
}

// export default function NonVerbal() {

//     const navigate = useNavigate();

//     return(
//         <div>
//             <main>
//                 <div className="question-container define-container">
//                     <div className="define-textbox question-textbox">
//                         <h2>Context</h2>
//                     </div>
//                     <div className="question-textbox define-textbox">
//                         <h2>Passive or Active?</h2>
//                     </div>
//                     <div className="selection-section">
//                         <button className="selection-button define-button" onClick={() => {navigate('/phase2/User/NonVerbal/Graffiti')}} >Passive</button>
//                         <button className="selection-button define-button" onClick={() => {navigate('/phase2/User/NonVerbal/Sort')}}>Active</button>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     )
// }