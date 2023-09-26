import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Define.css';

export default function User() {

    const navigate = useNavigate();

    return(
        <div>
            <main>
                <div className="question-container define-container">
                    <div className="define-textbox question-textbox">
                        <h2>Context</h2>
                    </div>
                    <div className="question-textbox define-textbox">
                        <h2>Verbal or Non Verbal?</h2>
                    </div>
                    <div className="selection-section">
                        <button className="selection-button define-button" onClick={() => {navigate('/phase2/User/Like5')}} >Verbal</button>
                        <button className="selection-button define-button" onClick={() => {navigate('/phase2/User/NonVerbal')}}>Non Verbal</button>
                    </div>
                </div>
            </main>
        </div>
    )
}