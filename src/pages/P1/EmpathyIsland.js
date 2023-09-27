import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'; // Import useEffect
import { logEvent } from "firebase/analytics";
import { analytics } from '../../firebase/firebase';
import '../islandpage.css';
import './Empathy.css';

export default function EmpathyIsland() {

    useEffect(() => {
        // Log a custom event to indicate that App.js was loaded or executed
        logEvent(analytics, 'empathyisland_js_loaded', {
          event_description: 'EmpathyIsland.js was loaded or executed',
        });
      }, []); 

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
