import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Homepage() {

    const navigate = useNavigate();

    return(
        <div>
            <h1>Which phase are you in?</h1>
            <button onClick={() => {navigate("/phase1")}} >Phase 1</button>
            <button onClick={() => {navigate("/phase2")}} >Phase 2</button>
            <button onClick={() => {navigate("/phase3")}} >Phase 3</button>
            <button onClick={() => {navigate("/phase4")}}>Phase 4</button>
            <button onClick={() => {navigate("/phase5")}}>Phase 5</button>
        </div>
    )
}
