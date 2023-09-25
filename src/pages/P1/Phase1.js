import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Phase1() {

    const navigate = useNavigate();

    return(
        <div>
            <h1>Which phase are you in?</h1>
            <button onClick={() => {navigate('/phase1/Group')}} >Group</button>
            <button onClick={() => {navigate("/phase1/Individual")}}>Individual</button>
        </div>
    )
}
