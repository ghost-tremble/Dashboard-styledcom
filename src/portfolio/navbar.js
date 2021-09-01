import React from "react";
import { Link } from "react-router-dom";
//import Link

const Navbar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/Page1">Home</Link>
        </li>
        <li>
          <Link to="/Page2">Build</Link>
        </li>

        <li>
          <Link to="/Page3">Design</Link>
        </li>
        <li>
          <Link to="/Page4">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
