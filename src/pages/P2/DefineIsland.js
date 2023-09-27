import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'; // Import useEffect
import { logEvent } from "firebase/analytics";
import { analytics } from '../../firebase/firebase';
import '../islandpage.css';
import './Define.css';

export default function DefineIsland() {

    useEffect(() => {
        // Log a custom event to indicate that App.js was loaded or executed
        logEvent(analytics, 'defineisland_js_loaded', {
          event_description: 'DefineIsland.js was loaded or executed',
        });
      }, []); 

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
