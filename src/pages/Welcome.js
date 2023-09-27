import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'; // Import useEffect
import { logEvent } from "firebase/analytics";
import { analytics } from '../firebase/firebase';
import { useAppContext } from '../AppContext';
import Cid from '../assets/cid.png'

import './Welcome.css'

export default function Welcome() {
    const { avatarName, setAvatarName } = useAppContext();
    const [newAvatarName, setNewAvatarName] = React.useState('');

    useEffect(() => {
      // Log a custom event to indicate that App.js was loaded or executed
      logEvent(analytics, 'welcome_js_loaded', {
        event_description: 'Welcome.js was loaded or executed',
      });
    }, []); 
  
    const handleAvatarNameChange = (e) => {
      setNewAvatarName(e.target.value);
    };
  
    const updateAvatarName = () => {
      if (newAvatarName.trim() !== '') {
        setAvatarName(newAvatarName);
      }
    };

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
                  <img className="message-cid" alt="Cid" src={Cid}/>
              </div>
              <div className="button-section">
                  <button className="button" onClick={() => {navigate('/intro/yes')}} >Yes</button>
                  <button className="button" onClick={() => {navigate('/intro/no')}} >No</button>
              </div>
          </div>
      </div>
  )
  
    // return (
    //   <div className='welcome'>
    //     <div className='avatarName'>
    //       <p className='avatar-text'>
    //         Welcome {avatarName} to the CID Method Card Game
    //       </p>
    //     </div>
    //     <div className='instruction-section'>
    //       <p>Instructions</p>
    //     </div>
    //     <div className='avatar-customize'>
    //       <input
    //         className='avatar-tb'
    //         type="text"
    //         placeholder="Enter new player name"
    //         value={newAvatarName}
    //         onChange={handleAvatarNameChange}
    //       />
    //       <button className='avatar-change' onClick={updateAvatarName}>Change Player Name</button>
    //     </div>
    //     <div className='continue-section'>
    //       <button className='continue-button' onClick={() => {navigate("/phaseSelect")}} >Play Now</button>
    //     </div>
    //   </div>
    // );
}