import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'; // Import useEffect
import { logEvent } from "firebase/analytics";
import { analytics } from '../../firebase/firebase';
import Cid from '../../assets/cid.png'

// CSS
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
        <div className="prototype-island">
            <div className="background">
                <div className="title">
                    <div className="title-text">Welcome!</div>
                </div>
                <div className="message-section">
                    <div className="message-box">
                        <p className="message-text">
                            You have landed on Prototye Island! The people of the island are experts at helping define a problem
                            based on your data. They will help you choose a research method based on your project.
                        </p>
                    </div>
                    <img className="message-cid" alt="Cid" src={Cid}/>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase2')}} >Continue</button>
                    <button className="button" onClick={() => {navigate('/')}} >Go Back</button>
                </div>
            </div>
        </div>
    )
}
