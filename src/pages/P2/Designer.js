import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Define.css';

export default function Designer() {

    const navigate = useNavigate();

    return(
        <div>
            <main>
                <div className="question-container define-container">
                    <div className="define-textbox question-textbox">
                        <h2>Context</h2>
                    </div>
                    <div className="question-textbox define-textbox">
                        <h2>Quantitative or Qualitative?</h2>
                    </div>
                    <div className="selection-section">
                        <button className="selection-button define-button" onClick={() => {navigate('/phase2/Designer/Weighted')}} >Quantitative</button>
                        <button className="selection-button define-button" onClick={() => {navigate('/phase2/Designer/UserPersona')}}>Qualitative</button>
                    </div>
                </div>
            </main>
        </div>
    )
}