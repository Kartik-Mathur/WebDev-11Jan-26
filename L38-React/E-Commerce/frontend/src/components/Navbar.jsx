import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { authorisationContext } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { logout, isAuthenticated } = useContext(authorisationContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyApp</Link>
      </div>

      <div className="navbar-links">
        {isAuthenticated ? (
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        ) : (
          <>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link signup-link" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;