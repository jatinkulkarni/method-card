import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAppContext } from '../AppContext.js';

export default function Welcome() {
    const { avatarName, setAvatarName } = useAppContext();
    const [newAvatarName, setNewAvatarName] = React.useState('');
  
    const handleAvatarNameChange = (e) => {
      setNewAvatarName(e.target.value);
    };
  
    const updateAvatarName = () => {
      setAvatarName(newAvatarName);
    };

    const navigate = useNavigate();
  
    return (
      <div>
        <p>Avatar Name: {avatarName}</p>
        <input
          type="text"
          placeholder="Enter new avatar name"
          value={newAvatarName}
          onChange={handleAvatarNameChange}
        />
        <button onClick={updateAvatarName}>Change Avatar Name</button>
        <button onClick={() => {navigate("/phaseSelect")}} >Continue</button>
      </div>
    );
}