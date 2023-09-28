import React from 'react';
import { useNavigate } from "react-router-dom";
import Cid from '../../assets/cid-test.png'

export default function Quantitative() {

    const navigate = useNavigate();

    return(
        <div className="test-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        You picked Quantitative! 
                        <br/><br/>
                        This will help you measuring and quantifying aspects of a phenomenon.
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
                    <button className="button" onClick={() => {navigate('/phase5/Quantitative/WalkThrough')}} >Individual</button>
                    <button className="button" onClick={() => {navigate('/phase5/Quantitative/ABTesting')}}>Multiple</button>
                </div>
                <img className="cid" alt="Cid" src={Cid}/>
            </div>
        </div>
    )
}

