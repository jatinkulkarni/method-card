import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Define.css';
import Cid from '../../assets/cid-define.png'

export default function User() {

    const navigate = useNavigate();

    return(
        <div className="define-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        When working with users, you can either engage them in conversation or have them user other methods to encourage discussion.
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                        Would you like to user a verbal or nonverbal method?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase2/User/Like5')}} >Verbal</button>
                    <button className="button" onClick={() => {navigate('/phase2/User/NonVerbal')}}>Non Verbal</button>
                </div>
                <img className="cid" alt="Cid" src={Cid}/>
            </div>
        </div>
    )
}

