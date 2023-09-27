import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Prototype.css';

export default function Phase4() {

    const navigate = useNavigate();

    return(
        <div className="prototype-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        Context
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        Question
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase4/WireFrame')}} >Digital</button>
                    <button className="button" onClick={() => {navigate("/phase4/Role")}}>Service</button>
                    <button className="button" onClick={() => {navigate("/phase4/RapidPrototyping")}}>Physical</button>
                </div>
            </div>
        </div>
    )
}

// export default function Phase4() {

//     const navigate = useNavigate();

//     return(
//         <div>
//             <main>
//                 <div className="question-container prototype-container">
//                     <div className="prototype-textbox question-textbox">
//                         <h2>Context</h2>
//                     </div>
//                     <div className="question-textbox prototype-textbox">
//                         <h2>Digital, Service, or Physical?</h2>
//                     </div>
//                     <div className="prototype-selection-section">
//                         <button className="selection-button prototype-button" onClick={() => {navigate('/phase4/WireFrame')}} >Digital</button>
//                         <button className="selection-button prototype-button" onClick={() => {navigate("/phase4/Role")}}>Service</button>
//                         <button className="selection-button prototype-button" onClick={() => {navigate("/phase4/RapidPrototyping")}}>Physical</button>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     )
// }
