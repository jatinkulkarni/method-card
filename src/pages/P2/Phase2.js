import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Define.css';
import Cid from '../../assets/cid-define.png'

export default function Phase2() {

    const navigate = useNavigate();

    return(
        <div className="define-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        Defining a problem is one of the most important steps in teh design process, and there are many ways to go 
                        about it. Sometimes, you can go to your users to get more information about where exactly their pain points 
                        are, or you can work with your design team to synthesize thr information you gained from the “empathize” 
                        step in the process.
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        Would you like to gather more data from users or work with your team to define the problem?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase2/User')}} >Work with Users</button>
                    {/* <button className="button" onClick={() => {navigate("/phase2/Designer")}}>Work with Designers</button> */}
                    <button className="button" onClick={() => {navigate("/phase2/Designer/Weighted")}}>Work with Designers</button>
                </div>
                <img className="cid" alt="Cid" src={Cid}/>
            </div>
        </div>
    )
}


