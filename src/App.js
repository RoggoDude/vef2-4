import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from './components/Events/events';
import EventPage from './components/Event/event';
import Layout from './components/Layout/layout';
import Login from './components/Login/login';
import React, {useState} from 'react';
import LoginForm from './components/LoginForm/loginForm';

export const WEB_SER = "https://vef2-20222-v3-synilausn.herokuapp.com/";

function App() {
  const [status, setStatus] = useState("");

  function inn(){
      setStatus("true")
  }
  function ut(){
      setStatus("false")
  }
  return (
    <Layout>
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Events />} />
          <Route path="event/:id" element={<EventPage status={status}/>} />
          <Route path="login" element={<LoginForm/>} />
        </Routes>
        <Login ut={ut} inn={inn} status={status}/>
      </Router>
    </div>
    </Layout>
  );
}

export default App;