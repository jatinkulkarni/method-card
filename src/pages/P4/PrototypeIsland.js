import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'; // Import useEffect
import { logEvent } from "firebase/analytics";
import { analytics } from '../../firebase/firebase';
import '../islandpage.css';
import './Prototype.css';

export default function PrototypeIsland() {
    useEffect(() => {
        // Log a custom event to indicate that App.js was loaded or executed
        logEvent(analytics, 'prototypeisland_js_loaded', {
          event_description: 'PrototypeIsland.js was loaded or executed',
        });
      }, []);

    const navigate = useNavigate();
    
    return(
        <div>
            <main>
                <div className="island-container prototype-container">
                    <div className="island-title">
                        <h1>Prototype Island</h1>
                    </div>
                    <div className="textbox prototype-textbox">
                        <p>Welcome to prototype Island!</p>
                    </div>
                    <div className="button-section">
                        <button className="button prototype-button" onClick={() => {navigate('/phase4')}} >Continue</button>
                        <button className="button prototype-button" onClick={() => {navigate('/')}} >Go Back</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
