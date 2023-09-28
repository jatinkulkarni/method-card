import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'; // Import useEffect
import { logEvent } from "firebase/analytics";
import { analytics } from '../firebase/firebase';
// import { useAppContext } from '../AppContext';
import Cid from '../assets/cid.png'
import './Homepage.css';


export default function Homepage() {
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
                  <div className="title-text">Choose your Island!</div>
              </div>
              <div className="message-section">
                  <div className="button-box">
                    <div className="button-box-pair">
                        <button className="island-button" onClick={() => {navigate("/empathy")}} >Empathy Island</button>
                        <button className="island-button" onClick={() => {navigate("/define")}} >Define Island</button>
                    </div>
                    <div className="button-box-pair">
                        <button className="island-button" onClick={() => {navigate("/ideate")}} >Ideate Island</button>
                        <button className="island-button" onClick={() => {navigate("/prototype")}}>Prototype Island</button>
                    </div>
                    <div classname="button-box-single">
                        <button className="island-button" onClick={() => {navigate("/test")}}>Test Island</button>
                    </div>
                  </div>
              </div>
            <img className="cid" alt="Cid" src={Cid}/>
          </div>
      </div>
  )
}
