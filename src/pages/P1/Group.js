import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Empathy.css';

export default function Group() {

    const navigate = useNavigate();
    
    return(
        <div>
            <main>
                <div className="question-container empathy-container">
                    <div className="empathy-textbox question-textbox">
                        <h2>Context</h2>
                    </div>
                    <div className="question-textbox empathy-textbox">
                        <h2>Location Data or General?</h2>
                    </div>
                    <div className="selection-section">
                        <button className="selection-button empathy-button" onClick={() => {navigate('/phase1/Group/BM')}} >Location Data</button>
                        <button className="selection-button empathy-button" onClick={() => {navigate('/phase1/Group/Fly')}}>General</button>
                    </div>
                </div>
            </main>
        </div>
    )
}