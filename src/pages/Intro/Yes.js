import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'; // Import useEffect
import { logEvent } from "firebase/analytics";
import { analytics } from '../../firebase/firebase';
import Cid from '../../assets/cid.png'

import '../Welcome.css'

export default function Yes() {
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
                      Yay! I see that you have a design problem, but you don’t know which method(s) to use. 
                      Don’t fret! This game is all about finding the right design method for you. Before we begin, 
                      let me tell you more about each design phase. Are you ready?
                      </p>
                  </div>
                  <img className="message-cid" alt="Cid" src={Cid}/>
              </div>
              <div className="button-section">
                  <button className="button" onClick={() => {navigate('/phase1')}} >Yes</button>
                  <button className="button" onClick={() => {navigate('/')}} >No</button>
              </div>
          </div>
      </div>
  )
}