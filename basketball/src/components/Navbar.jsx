import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "../App";

const Navbar = () => {
  const location = useLocation();

  // Check if the current pathname is not "/drugastrana"
  const shouldShowNavbar = location.pathname !== "/drugastrana";

  // Render the Navbar only if shouldShowNavbar is true
  return shouldShowNavbar ? (
    <div className="navbar">
      <h1>
        <Link to="/drugastrana">Basketball videos 🏀</Link>
      </h1>
    </div>
  ) : null;
};

export default Navbar;

