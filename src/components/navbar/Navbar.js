import React from "react";

import './navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md">
        <a className="navbar-brand" id="nav-text" href="#">
          ICON
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            {/* <li>
              <form className="form-inline">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                />
              </form>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" id="nav-text" href="#">
                SIGNUP
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="nav-text" id="nav-text" href="#">
                LOGIN
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
