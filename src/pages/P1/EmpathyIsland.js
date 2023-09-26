import React from 'react';
import { useNavigate } from "react-router-dom";
import '../islandpage.css';
import './Empathy.css';

export default function EmpathyIsland() {

    const navigate = useNavigate();

    return(
        <div>
            <main>
                <div className="island-container empathy-container">
                    <div className="island-title">
                        <h1>Empathy Island</h1>
                    </div>
                    <div className="textbox empathy-textbox">
                        <p>Welcome to Empathy Island!</p>
                    </div>
                    <div className="button-section">
                        <button className="button empathy-button" onClick={() => {navigate('/phase1')}} >Continue</button>
                        <button className="button empathy-button" onClick={() => {navigate('/')}} >Go Back</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
