import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase/firebase";
import Cid from "../assets/cid.png"

import './Start.css';

export default function StartPage() {
    const navigate = useNavigate();

    useEffect(() => {
        // Log a custom event to indicate that App.js was loaded or executed
        logEvent(analytics, 'start_js_loaded', {
          event_description: 'Start.js was loaded or executed',
        });
      }, []); 

    return(
        <div className="start">
            <div className="background">
                <div className="title-section">
                    <div className="title-text-section">
                        <div className="title-text-yellow">
                            <h1>
                                Design
                            </h1>
                        </div>
                        <div className="title-text-red">
                            <h1>
                                Design
                            </h1>
                        </div>
                    </div>
                    <div className="title-text-section">
                        <div className="title-text-yellow">
                            <h1>
                                Method
                            </h1>
                        </div>
                        <div className="title-text-red">
                            <h1>
                                Method
                            </h1>
                        </div>
                    </div>
                    <div className="title-text-section">
                        <div className="title-text-yellow">
                            <h1>
                                Adventure
                            </h1>
                        </div>
                        <div className="title-text-red">
                            <h1>
                                Adventure
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="lower-section">
                    <civ/>
                    <div className="button-section">
                        <button className="start-button" onClick={() => {navigate('/intro')}} >
                            <p>
                                Start
                            </p>
                        </button>
                        <button className="see-methods-button" onClick={() => {navigate('/all-methods')}} >
                            <p>
                                See Methods
                            </p>
                        </button>
                    </div>
                    <img className="cid" alt="Cid" src={Cid}/>
                </div>
            </div>
        </div>
    )
}