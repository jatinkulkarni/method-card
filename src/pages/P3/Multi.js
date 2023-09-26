import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Ideate.css';

export default function Multi() {

    const navigate = useNavigate();

    return(
        <div>
            <main>
                <div className="question-container ideate-container">
                    <div className="ideate-textbox question-textbox">
                        <h2>Context</h2>
                    </div>
                    <div className="question-textbox ideate-textbox">
                        <h2>Service or NonService?</h2>
                    </div>
                    <div className="selection-section">
                        <button className="selection-button ideate-button" onClick={() => {navigate('/phase3/Multi/BodyStorming')}} >Service</button>
                        <button className="selection-button ideate-button" onClick={() => {navigate('/phase3/Mutli/NonService')}}>NonService</button>
                    </div>
                </div>
            </main>
        </div>
    )
}