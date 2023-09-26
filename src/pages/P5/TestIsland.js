import React from 'react';
import { useNavigate } from "react-router-dom";
import '../islandpage.css';
import './Test.css';

export default function TestIsland() {

    const navigate = useNavigate();

    return(
        <div>
            <main>
                <div className="island-container test-container">
                    <div className="island-title">
                        <h1>Test Island</h1>
                    </div>
                    <div className="textbox test-textbox">
                        <p>Welcome to Test Island!</p>
                    </div>
                    <div className="button-section">
                        <button className="button test-button" onClick={() => {navigate('/phase5')}} >Continue</button>
                        <button className="button test-button" onClick={() => {navigate('/')}} >Go Back</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
