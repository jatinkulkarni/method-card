import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Phase2() {

    const navigate = useNavigate();

    return(
        <div>
            <h1>User or Designer?</h1>
            <button onClick={() => {navigate('/phase2/User')}} >User</button>
            <button onClick={() => {navigate("/phase2/Designer")}}>Designer</button>
        </div>
    )
}
