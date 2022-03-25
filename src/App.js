import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from './components/Events/events';
import EventPage from './components/Event/event';

export const WEB_SER = "https://vef2-20222-v3-synilausn.herokuapp.com/";

export const isLoggedIn = false;

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Events />} />
          <Route path="event/:id" element={<EventPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;