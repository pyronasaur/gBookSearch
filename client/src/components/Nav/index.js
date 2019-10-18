import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link 
          to="/saved" 
          className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link active"}>
          Saved
        </Link>
        </li>
        <li className="nav-item">
        <Link
          to="/search"
          className={window.location.pathname === "/search" ? "nav-link active" : "nav-link active"}>
          Search
        </Link>
      </li>
    </ul>
    
      

      

    </nav>
  );
}

export default Nav;
