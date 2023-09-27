import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAppContext } from '../AppContext.js';
import './Welcome.css';

export default function Welcome() {
    const { avatarName, setAvatarName } = useAppContext();
    const [newAvatarName, setNewAvatarName] = React.useState('');
  
    const handleAvatarNameChange = (e) => {
      setNewAvatarName(e.target.value);
    };
  
    const updateAvatarName = () => {
      if (newAvatarName.trim() !== '') {
        setAvatarName(newAvatarName);
      }
    };

    const navigate = useNavigate();
  
    return (
      <div className='welcome'>
        <div className='avatarName'>
          <p className='avatar-text'>
            Welcome {avatarName} to the CID Method Card Game
          </p>
        </div>
        <div className='instruction-section'>
          <p>Instructions</p>
        </div>
        <div className='avatar-customize'>
          <input
            className='avatar-tb'
            type="text"
            placeholder="Enter new player name"
            value={newAvatarName}
            onChange={handleAvatarNameChange}
          />
          <button className='avatar-change' onClick={updateAvatarName}>Change Player Name</button>
        </div>
        <div className='continue-section'>
          <button className='continue-button' onClick={() => {navigate("/phaseSelect")}} >Play Now</button>
        </div>
      </div>
    );
}