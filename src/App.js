import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from './pages/Homepage.js';
import Phase1 from './pages/P1/Phase1.js';
import Group from './pages/P1/Group.js';
import BehavioralMapping from './pages/P1/BehavioralMapping';
import Fly_on_the_Wall from './pages/P1/Fly_on_the_wall';
import Individual from './pages/P1/Individual';
import Narration from './pages/P1/Narration';
import Collage from './pages/P1/Collage';
import Phase2 from './pages/P2/Phase2';
import User from './pages/P2/User';
import Like5 from './pages/P2/Like5';
import NonVerbal from './pages/P2/NonVerbal';
import Graffiti from './pages/P2/Graffiti';
import Sort from './pages/P2/Sort';
import Phase3 from './pages/P3/Phase3';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/phase1' element={<Phase1/>} />
          <Route path='/phase1/Group' element={<Group/>} />
          <Route path='/phase1/Group/BM' element={<BehavioralMapping/>} />
          <Route path='/phase1/Group/Fly' element={<Fly_on_the_Wall/>} />
          <Route path='/phase1/Individual' element={<Individual/>} />
          <Route path='/phase1/Individual/Narration' element={<Narration/>} />
          <Route path='/phase1/Individual/Collage' element={<Collage/>} />
          <Route path='/phase2' element={<Phase2/>} />
          <Route path='/phase2/User' element={<User/>} />
          <Route path='/phase2/User/Like5' element={<Like5/>} />
          <Route path='/phase2/User/NonVerbal' element={<NonVerbal/>} />
          <Route path='/phase2/User/NonVerbal/Graffiti' element={<Graffiti/>} />
          <Route path='/phase2/User/NonVerbal/Sort' element={<Sort/>} />
          <Route path='/phase3' element={<Phase3/>} />
          {/* <Route path="phase1/Group" element={<Group/>} />
          <Route path="phase1/Group/BM" element={<BehavioralMapping/>} />
          <Route path="phase1/Group/Fly" element={<Fly_on_the_Wall/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
