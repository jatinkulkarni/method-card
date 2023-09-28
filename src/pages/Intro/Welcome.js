import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'; // Import useEffect
import { logEvent } from "firebase/analytics";
import { analytics } from '../../firebase/firebase';
import { useAppContext } from '../../AppContext';
import Cid from '../../assets/cid.png'

import './Welcome.css'

export default function Welcome() {
    const { avatarName } = useAppContext();
    // const { avatarName, setAvatarName } = useAppContext();
    // const [newAvatarName, setNewAvatarName] = React.useState('');

    useEffect(() => {
      // Log a custom event to indicate that App.js was loaded or executed
      logEvent(analytics, 'welcome_js_loaded', {
        event_description: 'Welcome.js was loaded or executed',
      });
    }, []); 
  
    // const handleAvatarNameChange = (e) => {
    //   setNewAvatarName(e.target.value);
    // };
  
    // const updateAvatarName = () => {
    //   if (newAvatarName.trim() !== '') {
    //     setAvatarName(newAvatarName);
    //   }
    // };

    const navigate = useNavigate();

    return(
      <div className="welcome">
          <div className="background">
              <div className="title">
                  <div className="title-text">Welcome {avatarName}!</div>
              </div>
              <div className="message-section">
                  <div className="message-box">
                      <p className="message-text">
                        You have entered the Design Islands! My name is CID, and I help navigate you through each 
                        island so you can find the right design method for your problem. Do you want to play?
                      </p>
                  </div>
              </div>
              <div className="button-section">
                  <button className="button" onClick={() => {navigate('/intro/yes')}} >Yes</button>
                  <button className="button" onClick={() => {navigate('/intro/no')}} >No</button>
              </div>
            <img className="cid" alt="Cid" src={Cid}/>
          </div>
      </div>
  )
}