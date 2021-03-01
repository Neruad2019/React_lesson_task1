import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-around">
      <a className="navbar-brand" href="/">
        E-Shopping
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="dropdown form-inline" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Register
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              RUS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              ENG
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
