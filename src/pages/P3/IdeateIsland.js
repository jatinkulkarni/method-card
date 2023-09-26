import React from 'react';
import { useNavigate } from "react-router-dom";
import '../islandpage.css';
import './Ideate.css';

export default function IdeateIsland() {

    const navigate = useNavigate();
    
    return(
        <div>
            <main>
                <div className="island-container ideate-container">
                    <div className="island-title">
                        <h1>Ideate Island</h1>
                    </div>
                    <div className="textbox ideate-textbox">
                        <p>Welcome to Ideate Island!</p>
                    </div>
                    <div className="button-section">
                        <button className="button ideate-button" onClick={() => {navigate('/phase3')}} >Continue</button>
                        <button className="button ideate-button" onClick={() => {navigate('/')}} >Go Back</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
