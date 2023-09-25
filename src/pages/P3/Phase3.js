import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Phase3() {

    const navigate = useNavigate();

    return(
        <div>
            <h1>Single or Multi?</h1>
            <button onClick={() => {navigate('/phase3/Single')}} >Single</button>
            <button onClick={() => {navigate("/phase3/Multi")}}>Multi</button>
        </div>
    )
}
