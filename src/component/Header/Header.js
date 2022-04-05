import { XIcon, MenuAlt2Icon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [navValue, setNavValue] = useState(false);
  return (
    <nav>
      <div className="icon-container">
        {navValue ? (
          <XIcon
            onClick={() => setNavValue(!navValue)}
            style={{ width: "20px", height: "20px" }}
          />
        ) : (
          <MenuAlt2Icon
            onClick={() => setNavValue(!navValue)}
            style={{ width: "20px", height: "20px" }}
          />
        )}
      </div>
      <div
        className="nav-link"
        style={navValue ? { top: "6px" } : { top: "-590px" }}
      >
        <Link onClick={() => setNavValue(!navValue)} to="/">
          Home
        </Link>
        <Link onClick={() => setNavValue(!navValue)} to="/reviews">
          Reviews
        </Link>
        <Link onClick={() => setNavValue(!navValue)} to="/dashboard">
          Dashboard
        </Link>
        <Link onClick={() => setNavValue(!navValue)} to="/blogs">
          Blogs
        </Link>
      </div>
    </nav>
  );
};

export default Header;
