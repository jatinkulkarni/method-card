import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'; // Import useEffect
import { logEvent } from "firebase/analytics";
import { analytics } from '../../firebase/firebase';
import Cid from '../../assets/cid.png'

import './Welcome.css'

export default function Prototype() {
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
                  <div className="title-text">Prototype</div>
              </div>
              <div className="message-section">
                  <div className="message-box-1">
                      <p className="message-text">
                        Prototyping is a preliminary version of a product or design. It serves as a tangible 
                        model that allows designers to refine their ideas before moving forward with full-scale 
                        development.
                      </p>
                  </div>
              </div>
              <div className="button-section-1">
                  <button className="button" onClick={() => {navigate('/intro/Test')}} >Next</button>
              </div>
            <img className="cid" alt="Cid" src={Cid}/>
          </div>
      </div>
  )
}