import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Individual() {

    const navigate = useNavigate();

    return(
        <div>
            <h1>Verbal or Physical?</h1>
            <button onClick={() => {navigate('/phase1/Individual/Narration')}}>Verbal</button>
            <button onClick={() => {navigate('/phase1/Individual/Collage')}}>Physical</button>
        </div>
    )
}