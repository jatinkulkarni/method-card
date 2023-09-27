import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'; // Import useEffect
import { logEvent } from "firebase/analytics";
import { analytics } from '../../firebase/firebase';
import { useAppContext } from '../../AppContext';
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

    const { avatarName } = useAppContext();

    const navigate = useNavigate();
    
    return(
        <div className="prototype-island">
            <div className="background">
                <div className="title">
                    <div className="title-text">Welcome {avatarName}!</div>
                </div>
                <div className="message-section">
                    <div className="message-box">
                        <p className="message-text">
                            You have landed on Prototype Island! The people of the island are some of the most technologically 
                            advanced in the universe. Get their help choosing the best method to prototype your idea. 
                        </p>
                    </div>
                    <img className="message-cid" alt="Cid" src={Cid}/>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase4')}} >Continue</button>
                    <button className="button" onClick={() => {navigate('/phaseSelect')}} >Go Back</button>
                </div>
            </div>
        </div>
    )
}
