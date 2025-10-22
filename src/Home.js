import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container" style={{ padding: '2rem', textAlign: 'center' }}>
      <div className="home-content">
        <h1>Welcome to MediSense</h1>
        <p>Your AI-powered symptom analysis chatbot, here to help you understand your health better.</p>

        <div className="bot-features" style={{ marginTop: '2rem', textAlign: 'left', display: 'inline-block' }}>
          <h2>How MediSense Helps You:</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
            <li><strong>Symptom Analysis:</strong> Input your symptoms and get potential insights.</li>
            <li><strong>24/7 Assistance:</strong> Ask questions anytime, anywhere.</li>
            <li><strong>Health Guidance:</strong> Get advice on next steps and whether to consult a doctor.</li>
            <li><strong>Data-Driven:</strong> Uses AI to analyze symptoms based on medical knowledge.</li>
          </ul>
        </div>

        <Link to="/chatbot" style={{ display: 'block', marginTop: '2rem' }}>
          <button className="start-btn" style={{ padding: '0.8rem 2rem', fontSize: '1rem', cursor: 'pointer' }}>
            Start Chat
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
