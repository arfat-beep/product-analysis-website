import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Header;