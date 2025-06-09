import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/LandingPage.css';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Welcome to EduNest</h1>
        <p>Your Personalized Learning Platform</p>
        <button onClick={() => navigate('/register')}>Get Started</button>
      </div>
    </div>
  );
}
