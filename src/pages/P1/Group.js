import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Group() {

    const navigate = useNavigate();

    return(
        <div>
            <h1>Location Data or General?</h1>
            <button onClick={() => {navigate('/phase1/Group/BM')}} >Location Data</button>
            <button onClick={() => {navigate('/phase1/Group/Fly')}}>General</button>
        </div>
    )
}