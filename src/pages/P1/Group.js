import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Empathy.css';
import Cid from '../../assets/cid-empathize.png'

export default function Group() {

    const navigate = useNavigate();

    return(
        <div className="empathy-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        In understanding group data, you should determine what specific information would be the most beneficial 
                        to your design problem. For example,  if you’re designing for a digital platform, gathering location 
                        information from users may not be very insightful.
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        Would you like your understanding to gather location data, or general observations?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase1/Group/BM')}} >Location Data</button>
                    <button className="button" onClick={() => {navigate('/phase1/Group/Fly')}}>General</button>
                </div>
                <img className="cid" alt="Cid" src={Cid}/>
            </div>
        </div>
    )
}

