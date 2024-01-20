import React from "react";
import { Link } from 'react-router-dom';
import "../App";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        <Link to="/drugastrana">Basketball videos 🏀</Link>
      </h1>
    </div>
  );
};

export default Navbar;
