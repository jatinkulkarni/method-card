import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Ideate.css';
import Cid from '../../assets/cid-ideate.png'

export default function NonService() {

    const navigate = useNavigate();

    return(
        <div className="ideate-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        Engaging users in the ideation phase can make solutions more aligned with their needs and promote diverse ideas. 
                        <br/><br/>
                        However, it might also slow down the process, limit innovative ideas, and require careful handling of user expectations. 
                        <br/><br/>
                        Balancing user input with clear design direction is key.
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        Would you like to involve the user in your ideation?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase3/Multi/NonService/Charette')}}>Yes</button>
                    <button className="button" onClick={() => {navigate('/phase3/Multi/NonService/Creative-Toolkit')}} >No</button>
                </div>
                <img className="cid" alt="Cid" src={Cid}/>
            </div>
        </div>
    )
}
