import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'; // Import useEffect
import { logEvent } from "firebase/analytics";
import { analytics } from '../../firebase/firebase';
import Cid from '../../assets/cid.png'

import './Welcome.css'

export default function Empathize() {
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
                  <div className="title-text">Empathize</div>
              </div>
              <div className="message-section">
                  <div className="message-box-1">
                      <p className="message-text">
                        Empathy is the process of understanding and identifying with your audience's needs, desires, and preferences. 
                      </p>
                  </div>
              </div>
              <div className="button-section-1">
                  <button className="button" onClick={() => {navigate('/intro/Define')}} >Next</button>
              </div>
            <img className="cid" alt="Cid" src={Cid}/>
          </div>
      </div>
  )
}