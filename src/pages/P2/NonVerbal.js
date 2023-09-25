import React from 'react';
import { useNavigate } from "react-router-dom";

export default function NonVerbal() {

    const navigate = useNavigate();

    return(
        <div>
            <h1>Location Data or General?</h1>
            <button onClick={() => {navigate('/phase2/User/NonVerbal/Graffiti')}} >Passive</button>
            <button onClick={() => {navigate('/phase2/User/NonVerbal/Sort')}}>Active</button>
        </div>
    )
}