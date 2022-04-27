import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-contact">Add Contact</Link>
          </li>
          {/* <li>
        <Link to="/edit-contact/:id">Edit Contact</Link>
      </li> */}
        </ul>
      </nav>
    </>
  );
};
export default Layout;
