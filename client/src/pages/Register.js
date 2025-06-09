import React, { useState } from 'react';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';
import '../CSS/Auth.css';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", {
        name: fullName,
        email,
        password,
        role
      });
      localStorage.setItem("token", res.data.token);
      role === 'admin' ? navigate('/admin') : navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="student">Register as Student</option>
            <option value="admin">Register as Admin</option>
          </select>
          <button type="submit">Register</button>
        </form>
        <p className="redirect-msg">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            style={{ color: 'blue', cursor: 'pointer' }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
