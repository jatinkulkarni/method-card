import React from 'react';
import { useNavigate } from "react-router-dom";
import '../questionpage.css';
import './Define.css';
import Cid from '../../assets/cid-define.png'

export default function NonVerbal() {

    const navigate = useNavigate();

    return(
        <div className="define-question">
            <div className="background">
                <div className="context">
                    <p className="context-text">
                        Passive methods are good for collecting information from users over time. The data you gather often 
                        represents a larger population. On the other hand, active methods that involve one-on-one interactions 
                        between a designer and user can provide more pointed information
                    </p>
                </div>
                <div className="question">
                    <p className="question-text">
                    Would you like to use an active or passive method?
                    </p>
                </div>
                <div className="button-section">
                    <button className="button" onClick={() => {navigate('/phase2/User/NonVerbal/Graffiti')}} >Passive</button>
                    <button className="button" onClick={() => {navigate('/phase2/User/NonVerbal/Sort')}}>Active</button>
                </div>
                <img className="cid" alt="Cid" src={Cid}/>
            </div>
        </div>
    )
}
