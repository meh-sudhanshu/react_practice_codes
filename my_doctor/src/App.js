import './App.css';
import Appointment from './Page/AppointmentCenter/Apointment';
import Homepage from './Page/Homepage/Homepage';
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route exact path="/book-appointment" element={<Appointment/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
