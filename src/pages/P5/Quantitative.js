import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Quantitative() {

    const navigate = useNavigate();

    return(
        <div>
            <main>
                <div className="question-container test-container">
                    <div className="test-textbox question-textbox">
                        <h2>Context</h2>
                    </div>
                    <div className="question-textbox test-textbox">
                        <h2>Single or Muliplayer?</h2>
                    </div>
                    <div className="selection-section">
                        <button className="selection-button test-button" onClick={() => {navigate('/phase5/Quantitative/WalkThrough')}} >Single</button>
                        <button className="selection-button test-button" onClick={() => {navigate('/phase5/Quantitative/ABTesting')}}>Multi</button>
                    </div>
                </div>
            </main>
        </div>
    )
}