import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'; // Import useEffect
import { logEvent } from "firebase/analytics";
import { analytics } from '../../firebase/firebase';
import Cid from '../../assets/cid.png'

import './Welcome.css'

export default function Test() {
    useEffect(() => {
      // Log a custom event to indicate that App.js was loaded or executed
      logEvent(analytics, 'yes_js_loaded', {
        event_description: 'Yes.js was loaded or executed',
      });
    }, []); 

    const navigate = useNavigate();

    return(
      <div className="welcome">
          <div className="background">
            <div className="title">
                  <div className="title-text">Test</div>
              </div>
              <div className="message-section">
                  <div className="message-box-1">
                      <p className="message-text">
                      Testing in the design process is where the proposed design concepts and ideas are evaluated, 
                      verified, and validated to ensure they meet the project's objectives and user requirements.
                      </p>
                  </div>
              </div>
              <div className="button-section-1">
                  <button className="button" onClick={() => {navigate('/intro/PostIntro')}} >Next</button>
              </div>
            <img className="cid" alt="Cid" src={Cid}/>
          </div>
      </div>
  )
}