import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Test.css';
import Cid from '../../assets/cid-test.png'

export default function Qualitative() {

    const navigate = useNavigate();

    return(
        <div className="test-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        You picked Qualitative! 
                        <br/><br/>
                        This will help you understanding and exploring a topic in depth. 
                        <br/><br/>
                        Remember, some studies may adopt a mixed-methods approach, combining both qualitative and quantitative research methods. 
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        Are we testing with an individual user or multiple users?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase5/Qualitative/LoveLetter')}}>Individual</button>
                    <button className="button" onClick={() => {navigate('/phase5/Qualitative/FocusGroup')}}>Multiple</button>
                </div>
                <img className="cid" alt="Cid" src={Cid}/>
            </div>
        </div>
    )
}

