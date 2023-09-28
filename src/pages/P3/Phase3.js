import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Ideate.css';
import Cid from '../../assets/cid-ideate.png'

export default function Phase3() {

    const navigate = useNavigate();

    return(
        <div className="ideate-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        Ideation is a crucial stage in the design process, ensuring that the concepts generated are both innovative and user-centric. 
                        <br/><br/>
                        You can brainstorm and expand upon ideas that emerged from the "define" island, evolving them based on insights gathered. 
                        <br/><br/>
                        Remember, the goal of ideation is not just to generate multiple solutions but to cultivate the most effective and resonant 
                        ideas for your user base.
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        Are you ideating alone or with your team?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase3/MindMap')}} >Individual</button>
                    <button className="button" onClick={() => {navigate("/phase3/Multi")}}>Team</button>
                </div>
                <img className="cid" alt="Cid" src={Cid}/>
            </div>
        </div>
    )
}

