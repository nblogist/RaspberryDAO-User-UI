import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Activity from './components/Activity/Activity';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Profiledesc from './components/Profiledesc/Profiledesc';
import Swap from './components/Swap/Swap';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Homepage />} />
          <Route path='/profile' exact element={<Profile/>} />
          <Route path='/profile/:id' exact element={<Profiledesc/> } />
          <Route path='/marketplace' exact element={<Swap/> } />
          <Route path='/activity' exact element={<Activity/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
