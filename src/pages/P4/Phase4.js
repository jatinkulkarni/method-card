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
                        There are many different types of products you can create when thinking about how to best help a user. 
                        Digital products (like a websites), services (systems such as checking in at an airport) and physical 
                        products (like your phone) are the three main categories for types of products. Each of these has a 
                        different way to prototype. 
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        What category of design is your idea in?
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
