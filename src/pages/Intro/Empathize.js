import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'; // Import useEffect
import { logEvent } from "firebase/analytics";
import { analytics } from '../../firebase/firebase';
import Cid from '../../assets/cid.png'

import '../Welcome.css'

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
              <div className="message-section">
                  <div className="message-box-1">
                      <p className="message-text">
                        No problem. Come visit me again when you have a design challenge!
                      </p>
                  </div>
                  <img className="message-cid" alt="Cid" src={Cid}/>
              </div>
              <div className="button-section-1">
                  <button className="button" onClick={() => {navigate('/')}} >Go Back</button>
              </div>
          </div>
      </div>
  )
}