import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Empathy.css';

export default function Phase1() {

    const navigate = useNavigate();

    return(
        <div>
            <main>
                <div className="question-container empathy-container">
                    <div className="empathy-textbox question-textbox">
                        <h2>Context</h2>
                    </div>
                    <div className="question-textbox empathy-textbox">
                        <h2>Group or Individual?</h2>
                    </div>
                    <div className="selection-section">
                        <button className="selection-button empathy-button" onClick={() => {navigate('/phase1/Group')}} >Group</button>
                        <button className="selection-button empathy-button" onClick={() => {navigate("/phase1/Individual")}}>Individual</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
