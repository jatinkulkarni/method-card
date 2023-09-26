import React from 'react';
import { useNavigate } from "react-router-dom";
import './Homepage.css';

export default function Homepage() {

    const navigate = useNavigate();

    return(
        <div>
            <main>
                <div className="homepage-container">
                    <div className="homepage-title">
                        <h1>Which phase are you in?</h1>
                    </div>
                    <div className="homepage-button-section">
                        <button className="homepage-button" onClick={() => {navigate("/empathy")}} >Empathy Island</button>
                        <button className="homepage-button" onClick={() => {navigate("/define")}} >Define Island</button>
                        <button className="homepage-button" onClick={() => {navigate("/ideate")}} >Ideate Island</button>
                        <button className="homepage-button" onClick={() => {navigate("/prototype")}}>Prototype Island</button>
                        <button className="homepage-button" onClick={() => {navigate("/test")}}>Test Island</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
