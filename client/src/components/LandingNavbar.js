import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import '../CSS/LandingNavbar.css'; // optional styling

export default function LandingNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";
  const isDashboardPage = location.pathname.startsWith("/dashboard") || location.pathname.startsWith("/courses") || location.pathname.startsWith("/profile");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">EduNest</Link>
      </div>
      <div className="navbar-right">
      <div className="nav-links">
        {!isDashboardPage && !isAuthPage && (
          <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
          </>
        )}</div>
        {isAuthPage && (
          <Link to={location.pathname === "/login" ? "/register" : "/login"}>
            {location.pathname === "/login" ? "Register" : "Login"}
          </Link>
        )}
        {isDashboardPage && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
