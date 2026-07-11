import React from "react";
import { useContext } from "react";
import { Link } from "react-router";
import { authorisationContext } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(authorisationContext);

  return (
    <nav>
      {isAuthenticated ? (
        <Link to="/logout">Logout</Link>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
