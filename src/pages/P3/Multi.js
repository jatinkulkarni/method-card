import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Ideate.css';
import Cid from '../../assets/cid-ideate.png'

export default function Multi() {

    const navigate = useNavigate();

    return(
        <div className="ideate-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        Service design is one of three primary design domains, alongside digital and physical design. 
                        <br/><br/> 
                        It inherently demands greater interaction, leading to distinct methods of ideation.
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        What type of project are you working on?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase3/Multi/BodyStorming')}} >Service Design</button>
                    <button className="button" onClick={() => {navigate('/phase3/Mutli/NonService')}}>Non service Design</button>
                </div>
                <img className="cid" alt="Cid" src={Cid}/>
            </div>
        </div>
    )
}
