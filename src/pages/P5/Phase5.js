import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Test.css';

export default function Phase5() {

    const navigate = useNavigate();

    return(
        <div>
            <main>
                <div className="question-container test-container">
                    <div className="test-textbox question-textbox">
                        <h2>Context</h2>
                    </div>
                    <div className="question-textbox test-textbox">
                        <h2>Qualitative or Quantitative?</h2>
                    </div>
                    <div className="selection-section">
                        <button className="selection-button test-button" onClick={() => {navigate('/phase5/Qualitative')}} >Qualitative</button>
                        <button className="selection-button test-button" onClick={() => {navigate("/phase5/Quantitative")}}>Quantitative</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
