import React, { useState } from 'react';
import API from '../utils/api';
import { useNavigate, Link } from 'react-router-dom';
import '../CSS/Auth.css'; // Your existing styles

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });

      // Store token for authentication
      localStorage.setItem("token", res.data.token);

      // Store user info for avatar initials in navbar
      // Adjust this based on your backend's actual response shape:
      if (res.data.user && res.data.user.name) {
        localStorage.setItem("user", JSON.stringify({ name: res.data.user.name }));
      } else {
        // Fallback: use email initial capitalized if user name not returned
        localStorage.setItem("user", JSON.stringify({ name: email.charAt(0).toUpperCase() }));
      }

      // Navigate based on user role
      const role = res.data.role;
      role === 'admin' ? navigate('/admin') : navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="redirect-msg">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
