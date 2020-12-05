import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.profileLinkRef = React.createRef();
    this.profileSettingsLinkRef = React.createRef();
    this.signupLinkRef = React.createRef();
    this.loginLinkRef = React.createRef();
  }

  componentDidMount() {
    const profileLink = this.profileLinkRef.current;
    const profileSettingsLink = this.profileSettingsLinkRef.current;
    const signupLink = this.signupLinkRef.current;
    const loginLink = this.loginLinkRef.current;
    profileLink.classList.add("hidden");
    profileSettingsLink.classList.add("hidden");
    signupLink.classList.remove("hidden");
    loginLink.classList.remove("hidden");
  }

  componentDidUpdate() {
    const profileLink = this.profileLinkRef.current;
    const profileSettingsLink = this.profileSettingsLinkRef.current;
    const signupLink = this.signupLinkRef.current;
    const loginLink = this.loginLinkRef.current;
    if (!this.props.isLoggedIn) {
      profileLink.classList.add("hidden");
      profileSettingsLink.classList.add("hidden");
      signupLink.classList.remove("hidden");
      loginLink.classList.remove("hidden");
    } else {
      profileLink.classList.remove("hidden");
      profileSettingsLink.classList.remove("hidden");
      signupLink.classList.add("hidden");
      loginLink.classList.add("hidden");
    }
  }

  render() {
    const currentUser = this.props.currentUser;
    console.log(currentUser);
    return (
      <nav className="navbar navbar-expand-md">
        <Link to="/" className="navbar-brand" id="nav-text">
          ICON
        </Link>
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
            <li ref={this.profileLinkRef} className="nav-item">
              <Link to={`/user/${currentUser}`} className="nav-link" id="nav-text">
                Profile
              </Link>
            </li>
            <li ref={this.profileSettingsLinkRef} className="nav-item">
              <Link to={`/user/setting/${currentUser}`} className="nav-link" id="nav-text">
                Settings
              </Link>
            </li>
            <li ref={this.signupLinkRef} className="nav-item">
              <Link to="/user/new" className="nav-link" id="nav-text">
                SIGNUP
              </Link>
            </li>
            <li ref={this.loginLinkRef} className="nav-item">
              <Link to="/user/login" className="nav-link" id="nav-text">
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
