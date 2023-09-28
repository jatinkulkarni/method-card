import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Empathy.css';
import Cid from '../../assets/cid-empathize.png'

export default function Phase1() {

    const navigate = useNavigate();

    return(
        <div className="empathy-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        Empathizing with those who work, create, or experience the problem you are hoping to solve is the most 
                        fundamental step in the design process. In doing so its important to understand your resources, and 
                        determine whether you have the tools to focus your time on group observation and data collection, or 
                        on an individual’s current experience.
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        Would you like to focus initial data collection on a group/general demographic or a unique individual?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase1/Group')}} >Group</button>
                    <button className="button" onClick={() => {navigate("/phase1/Individual")}}>Individual</button>
                </div>
                <img className="cid" alt="Cid" src={Cid}/>
            </div>
        </div>
    )
}
