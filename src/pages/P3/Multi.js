import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Ideate.css';

export default function Multi() {

    const navigate = useNavigate();

    return(
        <div className="ideate-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        Service design is one of three primary design domains, alongside digital and physical design. 
                        <br/><br/> 
                        It inherently demands greater interaction, leading to distinct methods of ideation.
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        What type of project are you working on?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase3/Multi/BodyStorming')}} >Service Design</button>
                    <button className="button" onClick={() => {navigate('/phase3/Mutli/NonService')}}>Non service Design</button>
                </div>
            </div>
        </div>
    )
}

// export default function Multi() {

//     const navigate = useNavigate();

//     return(
//         <div>
//             <main>
//                 <div className="question-container ideate-container">
//                     <div className="ideate-textbox question-textbox">
//                         <h2>Context</h2>
//                     </div>
//                     <div className="question-textbox ideate-textbox">
//                         <h2>Service or NonService?</h2>
//                     </div>
//                     <div className="selection-section">
//                         <button className="selection-button ideate-button" onClick={() => {navigate('/phase3/Multi/BodyStorming')}} >Service</button>
//                         <button className="selection-button ideate-button" onClick={() => {navigate('/phase3/Mutli/NonService')}}>NonService</button>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     )
// }