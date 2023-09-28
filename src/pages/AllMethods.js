import React, { useEffect }from 'react';
import { useNavigate } from "react-router-dom";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase/firebase";

import './AllMethods.css';

export default function AllMethods() {
    const navigate = useNavigate();

    useEffect(() => {
        // Log a custom event to indicate that App.js was loaded or executed
        logEvent(analytics, 'allmethods_js_loaded', {
          event_description: 'AllMethods.js was loaded or executed',
        });
      }, []); 

    return (
        <div className="methods">
            <div className="background">
                <div className="title">
                    <div className ="title-text"> See All Methods</div>
                </div>
                <div className="method-grid">
                    <div className="method-card" onClick={() => navigate('/phase1/Group/BM')}> 
                        <p>
                            Behavioral Mapping
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase1/Group/Fly')}>
                        <p>
                            Fly-on-the-Wall
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase1/Individual/Narration')}>
                        <p>
                            Narration
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase1/Individual/Collage')}>
                        <p>
                            Collage
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase2/User/Like5')}>
                        <p>
                            Explain Like I'm 5
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase2/User/NonVerbal/Graffiti')}>
                        <p>
                            Graffiti
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase2/User/NonVerbal/Sort')}>
                        <p>
                            Card Sorting
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase2/Designer/Weighted')}>
                        <p>
                            Weighted
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase2/Designer/UserPersona')}>
                        <p>
                            User Persona
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase3/MindMap')}>
                        <p>
                            Mind-Mapping
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase3/Multi/BodyStormin')}>
                        <p>
                            Body Storming
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase3/Multi/NonService/Creative-Toolkit')}>
                        <p>
                            Creative Toolkit
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase3/Multi/NonService/Charette')}>
                        <p>
                            Design Charette
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase4/Wireframe')}>
                        <p>
                            Digital Wireframe
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase4/Role')}>
                        <p>
                            Role Playing
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase4/RapidPrototyping')}>
                        <p>
                            Rapid Prototyping
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase5/Qualitative/LoveLetter')}>
                        <p>
                            Love Letter
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase5/Qualitative/FocusGroup')}>
                        <p>
                            Focus Group
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase5/Quantitative/WalkThrough')}>
                        <p>
                            Walkthrough
                        </p>
                    </div>
                    <div className="method-card" onClick={() => navigate('/phase5/Quantitative/ABTesting')}>
                        <p>
                            A/B Testing
                        </p>
                    </div>
                </div>
                <button className="button" onClick={() => navigate('/')}>
                    <p>
                        Go to Start
                    </p>
                </button>
            </div>
        </div>
    )
}