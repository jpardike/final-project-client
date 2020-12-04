import React from "react";
import {Link} from 'react-router-dom';
import UserModel from "../../models/user";

import "./landing.css";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     name: "",
    //     username: "",
    //     email: "",
    //     password: "",
    //     location: "",
    // };
  }

  // handleSignupInputChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value} );
  // };

  // handleSignupFormSubmit = (event) => {
  //   event.preventDefault();
  //   const modal = this.signupModalRef.current;
  //   UserModel.create(this.state)
  //     .then((data) => {
  //       this.props.history.push('/feed');

  //       modal.classList.add("hidden")
  //     })
  // }

  render() {
    console.log(this.signupModalRef);
    return (
      <div className="row">
        <div className="col-md text-center">COMPANY LOGO</div>
        <div className="col-md text-center">
          <div>Brief description of site</div>
          <div>
            <Link to="/user/new" className="btn">SIGNUP</Link>
            <Link to="/user/login" className="btn">LOGIN</Link>
          </div>
        </div>
        {/* <div className="modal" id="signupModal" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Signup</h5>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSignupFormSubmit}>
                  <div className="row justify-content-center">
                    <div className="col text-center">
                      <label htmlFor="name">Name</label>
                      <input
                        onChange={this.handleSignupInputChange}
                        value={this.state.name}
                        type="text"
                        name="name"
                      />
                      <label htmlFor="username">Username</label>
                      <input
                        onChange={this.handleSignupInputChange}
                        value={this.state.username}
                        type="text"
                        name="username"
                      />
                      <label htmlFor="email">Email</label>
                      <input
                        onChange={this.handleSignupInputChange}
                        value={this.state.email}
                        type="email"
                        name="email"
                      />
                      <label htmlFor="password">Password</label>
                      <input
                        onChange={this.handleSignupInputChange}
                        value={this.state.password}
                        type="password"
                        name="password"
                      />
                      <label htmlFor="location">Location</label>
                      <input
                        onChange={this.handleSignupInputChange}
                        value={this.state.location}
                        type="text"
                        name="location"
                      />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <input
                      value="Signup"
                      type="submit"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="modal" id="loginModal" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Landing;
