import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Empathy.css';
import Cid from '../../assets/cid-empathize.png'

export default function Individual() {

    const navigate = useNavigate();

    return(
        <div className="empathy-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                    Design researchers can gain insight from individuals in a number of different ways. Based off of their 
                    problem, it can become clear whether information would be better gathered from a show don’t tell mindset, 
                    or vice versa. 
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        Would you like your observation to be verbally, or physically based?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase1/Individual/Narration')}}>Verbal</button>
                    <button className="button" onClick={() => {navigate('/phase1/Individual/Collage')}}>Physical</button>
                </div>
                <img className="cid" alt="Cid" src={Cid}/>
            </div>
        </div>
    )
}
