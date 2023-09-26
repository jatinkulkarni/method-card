import React from 'react';
import { useNavigate } from "react-router-dom";
import '../islandpage.css';
import './Define.css';

export default function DefineIsland() {

    const navigate = useNavigate();
    
    return(
        <div>
            <main>
                <div className="island-container define-container">
                    <div className="island-title">
                        <h1>Define Island</h1>
                    </div>
                    <div className="textbox define-textbox">
                        <p>Welcome to Define Island!</p>
                    </div>
                    <div className="button-section">
                        <button className="button define-button" onClick={() => {navigate('/phase2')}} >Continue</button>
                        <button className="button define-button" onClick={() => {navigate('/')}} >Go Back</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
