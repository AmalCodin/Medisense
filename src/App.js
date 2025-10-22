import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Chatbot from './Chatbot';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h2 className="logo">MediSense</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/chatbot">Chatbot</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
