import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <NavLink to="dashboard">Dashboard</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <NavLink to="faq">Faq</NavLink>
      <NavLink to="about">About</NavLink>
    </div>
  );
};

export default Navbar;
