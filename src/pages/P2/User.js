import React from 'react';
import { useNavigate } from "react-router-dom";

export default function User() {

    const navigate = useNavigate();

    return(
        <div>
            <h1>Location Data or General?</h1>
            <button onClick={() => {navigate('/phase2/User/Like5')}} >Verbal</button>
            <button onClick={() => {navigate('/phase2/User/NonVerbal')}}>Non Verbal</button>
        </div>
    )
}