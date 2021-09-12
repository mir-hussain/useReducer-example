import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>useReducer</Link>
        </li>
        <li>
          <Link to='/example-one'>Example One</Link>
        </li>
        <li>
          <Link to='/example-two'>Example Two</Link>
        </li>
        <li>
          <Link to='/example-three'>Example Three</Link>
        </li>
        <li>
          <Link to='/example-four'>Example Four</Link>
        </li>
        <li>
          <Link to='/example-five'>Example Five</Link>
        </li>
        <li>
          <Link to='/example-six'>Example Six</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
