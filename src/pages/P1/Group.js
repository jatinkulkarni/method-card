import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Empathy.css';

export default function Group() {

    const navigate = useNavigate();

    return(
        <div className="empathy-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        In understanding group data, you should determine what specific information would be the most beneficial 
                        to your design problem. For example,  if you’re designing for a digital platform, gathering location 
                        information from users may not be very insightful.
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        Would you like your understanding to gather location data, or general observations?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase1/Group/BM')}} >Location Data</button>
                    <button className="button" onClick={() => {navigate('/phase1/Group/Fly')}}>General</button>
                </div>
            </div>
        </div>
    )
}

// export default function Group() {

//     const navigate = useNavigate();
    
//     return(
//         <div>
//             <main>
//                 <div className="question-container empathy-container">
//                     <div className="empathy-textbox question-textbox">
//                         <h2>Context</h2>
//                     </div>
//                     <div className="question-textbox empathy-textbox">
//                         <h2>Location Data or General?</h2>
//                     </div>
//                     <div className="selection-section">
//                         <button className="selection-button empathy-button" onClick={() => {navigate('/phase1/Group/BM')}} >Location Data</button>
//                         <button className="selection-button empathy-button" onClick={() => {navigate('/phase1/Group/Fly')}}>General</button>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     )
// }