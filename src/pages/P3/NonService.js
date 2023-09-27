import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Ideate.css';

export default function NonService() {

    const navigate = useNavigate();

    return(
        <div className="ideate-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        Engaging users in the ideation phase can make solutions more aligned with their needs and promote diverse ideas. 
                        <br/><br/>
                        However, it might also slow down the process, limit innovative ideas, and require careful handling of user expectations. 
                        <br/><br/>
                        Balancing user input with clear design direction is key.
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        Would you like to involve the user in your ideation?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase3/Multi/NonService/Charette')}}>Yes</button>
                    <button className="button" onClick={() => {navigate('/phase3/Multi/NonService/Creative-Toolkit')}} >No</button>
                </div>
            </div>
        </div>
    )
}

// export default function NonService() {

//     const navigate = useNavigate();

//     return(
//         <div>
//             <main>
//                 <div className="question-container ideate-container">
//                     <div className="ideate-textbox question-textbox">
//                         <h2>Context</h2>
//                     </div>
//                     <div className="question-textbox ideate-textbox">
//                         <h2>User or Designer?</h2>
//                     </div>
//                     <div className="selection-section">
//                         <button className="selection-button ideate-button" onClick={() => {navigate('/phase3/Multi/NonService/Creative-Toolkit')}} >User</button>
//                         <button className="selection-button ideate-button" onClick={() => {navigate('/phase3/Multi/NonService/Charette')}}>Designer</button>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     )
// }