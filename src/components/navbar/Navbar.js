import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
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

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav ml-auto">
          <li>
            <form className="form-inline">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
              />
            </form>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              SIGNUP
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              LOGIN
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
