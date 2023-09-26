import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Define.css';

export default function Phase2() {

    const navigate = useNavigate();

    return(
        <div>
            <main>
                <div className="question-container define-container">
                    <div className="define-textbox question-textbox">
                        <h2>Context</h2>
                    </div>
                    <div className="question-textbox define-textbox">
                        <h2>User or Designer?</h2>
                    </div>
                    <div className="selection-section">
                        <button className="selection-button define-button" onClick={() => {navigate('/phase2/User')}} >User</button>
                        <button className="selection-button define-button" onClick={() => {navigate("/phase2/Designer")}}>Designer</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
