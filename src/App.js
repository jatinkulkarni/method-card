import './App.css';
import { useEffect } from 'react'; // Import useEffect
import { logEvent } from "firebase/analytics";
import { analytics } from './firebase/firebase';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Welcome from './pages/Welcome';
import Homepage from './pages/Homepage.js';
import EmpathyIsland from './pages/P1/EmpathyIsland';
import Phase1 from './pages/P1/Phase1.js';
import Group from './pages/P1/Group.js';
import BehavioralMapping from './pages/P1/BehavioralMapping';
import FlyOnTheWall from './pages/P1/Fly_on_the_wall';
import Individual from './pages/P1/Individual';
import Narration from './pages/P1/Narration';
import Collage from './pages/P1/Collage';
import DefineIsland from './pages/P2/DefineIsland';
import Phase2 from './pages/P2/Phase2';
import User from './pages/P2/User';
import Like5 from './pages/P2/Like5';
import NonVerbal from './pages/P2/NonVerbal';
import Graffiti from './pages/P2/Graffiti';
import Sort from './pages/P2/Sort';
import Designer from './pages/P2/Designer';
import Weighted from './pages/P2/Weighted';
import UserPersona from './pages/P2/UserPersona';
import IdeateIsland from './pages/P3/IdeateIsland';
import Phase3 from './pages/P3/Phase3';
import MindMap from './pages/P3/MindMap';
import Multi from './pages/P3/Multi';
import BodyStorming from './pages/P3/BodyStorming';
import NonService from './pages/P3/NonService';
import CreativeTK from './pages/P3/Creative-Toolkit';
import Charette from './pages/P3/Charette';
import PrototypeIsland from './pages/P4/PrototypeIsland';
import Phase4 from './pages/P4/Phase4';
import Wireframe from './pages/P4/Wireframe';
import Role from './pages/P4/Role';
import RapidPrototyping from './pages/P4/RapidPrototyping';
import TestIsland from './pages/P5/TestIsland';
import Phase5 from './pages/P5/Phase5';
import Qualitative from './pages/P5/Qualitative';
import LoveLetter from './pages/P5/LoveLetter';
import FocusGroup from './pages/P5/FocusGroup';
import Quantitative from './pages/P5/Quantitative';
import WalkThrough from './pages/P5/WalkThrough';
import ABTesting from './pages/P5/ABTesting';

function App() {
  useEffect(() => {
    // Log a custom event to indicate that App.js was loaded or executed
    logEvent(analytics, 'app_js_loaded', {
      event_description: 'App.js was loaded or executed',
    });
  }, []); 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Welcome/>} />
          <Route path='/phaseSelect' element={<Homepage/>} />
          <Route path='/empathy' element={<EmpathyIsland/>} />
          <Route path='/phase1' element={<Phase1/>} />
          <Route path='/phase1/Group' element={<Group/>} />
          <Route path='/phase1/Group/BM' element={<BehavioralMapping/>} />
          <Route path='/phase1/Group/Fly' element={<FlyOnTheWall/>} />
          <Route path='/phase1/Individual' element={<Individual/>} />
          <Route path='/phase1/Individual/Narration' element={<Narration/>} />
          <Route path='/phase1/Individual/Collage' element={<Collage/>} />
          <Route path='/define' element={<DefineIsland/>} />
          <Route path='/phase2' element={<Phase2/>} />
          <Route path='/phase2/User' element={<User/>} />
          <Route path='/phase2/User/Like5' element={<Like5/>} />
          <Route path='/phase2/User/NonVerbal' element={<NonVerbal/>} />
          <Route path='/phase2/User/NonVerbal/Graffiti' element={<Graffiti/>} />
          <Route path='/phase2/User/NonVerbal/Sort' element={<Sort/>} />
          <Route path='/phase2/Designer' element={<Designer/>} />
          <Route path='/phase2/Designer/Weighted' element={<Weighted/>} />
          <Route path='/phase2/Designer/UserPersona' element={<UserPersona/>} />
          <Route path='/ideate' element={<IdeateIsland/>} />
          <Route path='/phase3' element={<Phase3/>} />
          <Route path='/phase3/MindMap' element={<MindMap/>} />
          <Route path='/phase3/Multi' element={<Multi/>} />
          <Route path='/phase3/Multi/BodyStorming' element={<BodyStorming/>} />
          <Route path='/phase3/Mutli/NonService' element={<NonService/>} />
          <Route path='/phase3/Multi/NonService/Creative-Toolkit' element={<CreativeTK/>} />
          <Route path='/phase3/Multi/NonService/Charette' element={<Charette/>} />
          <Route path='/prototype' element={<PrototypeIsland/>} />
          <Route path='/phase4' element={<Phase4/>} />
          <Route path='/phase4/Wireframe' element={<Wireframe/>} />
          <Route path='/phase4/Role' element={<Role/>} />
          <Route path='/phase4/RapidPrototyping' element={<RapidPrototyping/>} />
          <Route path='/test' element={<TestIsland/>} />
          <Route path='/phase5' element={<Phase5/>} />
          <Route path='/phase5/Qualitative' element={<Qualitative/>} />
          <Route path='/phase5/Qualitative/LoveLetter' element={<LoveLetter/>} />
          <Route path='/phase5/Qualitative/FocusGroup' element={<FocusGroup/>} />
          <Route path='/phase5/Quantitative' element={<Quantitative/>} />
          <Route path='/phase5/Quantitative/WalkThrough' element={<WalkThrough/>} />
          <Route path='/phase5/Quantitative/ABTesting' element={<ABTesting/>} />
          {/* <Route path="phase1/Group" element={<Group/>} />
          <Route path="phase1/Group/BM" element={<BehavioralMapping/>} />
          <Route path="phase1/Group/Fly" element={<Fly_on_the_Wall/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
