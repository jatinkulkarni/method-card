import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Define.css';
import Cid from '../../assets/cid-define.png'

export default function Designer() {

    const navigate = useNavigate();

    return(
        <div className="define-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        When collecting data, you can either collect qualitative data that will help you identify sentiment or 
                        quantitative data that will help you numerically identify overarching themes.
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        Would you like to use a quantitative or qualitative method of research?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase2/Designer/Weighted')}} >Quantitative</button>
                    <button className="button" onClick={() => {navigate('/phase2/Designer/UserPersona')}}>Qualitative</button>
                </div>
                <img className="cid" alt="Cid" src={Cid}/>
            </div>
        </div>
    )
}

