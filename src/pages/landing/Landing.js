import React from "react";
import UserModel from "../../models/user";

import "./landing.css";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        username: "",
        email: "",
        password: "",
        location: "",
    };
  }

  handleSignupInputChange = (event) => {
    this.setState({ [event.target.name]: [event.target.value]} );
  };

  handleSignupFormSubmit = (event) => {
    event.preventDefault();

    UserModel.create(this.state)
      .then((data) => {
        this.props.history.push('/feed')
      })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md text-center">COMPANY LOGO</div>
        <div className="col-md text-center">
          <div>Brief description of site</div>
          <div>
            <button
              className="btn"
              data-toggle="modal"
              data-target="#signupModal"
            >
              SIGNUP
            </button>
            <button
              className="btn"
              data-toggle="modal"
              data-target="#loginModal"
            >
              LOGIN
            </button>
          </div>
        </div>
        <div class="modal" id="signupModal" tabIndex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Signup</h5>
              </div>
              <div class="modal-body">
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
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <input
                      value="Signup"
                      type="submit"
                      class="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="modal" id="loginModal" tabIndex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Login</h5>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
