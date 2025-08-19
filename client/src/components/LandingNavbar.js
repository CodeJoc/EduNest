import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../CSS/LandingNavbar.css";

export default function LandingNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get user data dynamically from localStorage (or fallback)
  const userData = localStorage.getItem("user");
  let initials = "U";  // Default initial

  if (userData) {
    try {
      const user = JSON.parse(userData);
      if (user.name && user.name.length > 0) {
        initials = user.name[0].toUpperCase();
      }
    } catch (e) {
      // Parsing error; keep default "U"
    }
  }

  const [menuOpen, setMenuOpen] = useState(false);
  const avatarRef = useRef();

  // Close dropdown when clicking outside the avatar
  useEffect(() => {
    function handleClickOutside(event) {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";
  const isDashboardPage =
    location.pathname === "/dashboard" ||
    location.pathname === "/courses" ||
    location.pathname === "/profile" ||
    location.pathname.startsWith("/course/");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          EduNest
        </Link>
      </div>

      <div className="navbar-right">
        {/* Links for login/register pages */}
        {isAuthPage && (
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        )}

        {/* Links for public pages (non-dashboard, non-auth) */}
        {!isAuthPage && !isDashboardPage && (
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
          </div>
        )}

        {/* Dashboard and related pages: Avatar dropdown */}
        {isDashboardPage && (
          <div className="profile-avatar-dropdown" ref={avatarRef}>
            <div
              className="profile-avatar-navbar"
              onClick={() => setMenuOpen((prev) => !prev)}
              title="Profile menu"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setMenuOpen((prev) => !prev);
              }}
              role="button"
              aria-haspopup="true"
              aria-expanded={menuOpen}
            >
              {initials}
            </div>

            {menuOpen && (
              <div className="dropdown-menu" role="menu" aria-label="Profile Options">
                <div onClick={() => { navigate("/dashboard"); setMenuOpen(false); }} tabIndex={0} role="menuitem">
                  Dashboard
                </div>
                <div onClick={() => { navigate("/courses"); setMenuOpen(false); }} tabIndex={0} role="menuitem">
                  Courses
                </div>
                <div onClick={() => { navigate("/profile"); setMenuOpen(false); }} tabIndex={0} role="menuitem">
                  Profile
                </div>
                <div className="logout" onClick={handleLogout} tabIndex={0} role="menuitem">
                  Logout
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
