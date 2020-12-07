import React from "react";
import UserModel from "../../models/user";

import "./newUser.css";

class NewUser extends React.Component {
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
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignupFormSubmit = (event) => {
    event.preventDefault();
    UserModel.create(this.state).then((data) => {
      this.props.changeUser(data.users._id);
      this.props.history.push(`/user/feed/${data.users._id}`);
    });
  };

  render() {
    return (
      <div className="row p-0 m-0 justify-content-center align-items-center text-center sign-in-form-container">
        <form className="p-4 login-form" onSubmit={this.handleSignupFormSubmit}>
          <h2 className="mb-5">Sign Up</h2>
          <div className="row p-0 m-0 align-items-center justify-content-center">
            <div className="col-5">
              <label className="mb-4" htmlFor="name">
                Name
              </label>
            </div>
            <div className="col-5">
              <input
                className="mb-4"
                onChange={this.handleSignupInputChange}
                value={this.state.name}
                type="text"
                name="name"
              />
            </div>
          </div>
          <div className="row p-0 m-0 align-items-center justify-content-center">
            <div className="col-5">
              <label className="mb-4" htmlFor="username">
                Username
              </label>
            </div>
            <div className="col-5">
              <input
                className="mb-4"
                onChange={this.handleSignupInputChange}
                value={this.state.username}
                type="text"
                name="username"
              />
            </div>
          </div>
          <div className="row p-0 m-0 align-items-center justify-content-center">
            <div className="col-5">
              <label className="mb-4" htmlFor="email">
                Email
              </label>
            </div>
            <div className="col-5">
              <input
                className="mb-4"
                onChange={this.handleSignupInputChange}
                value={this.state.email}
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="row p-0 m-0 align-items-center justify-content-center">
            <div className="col-5">
              <label className="mb-4" htmlFor="password">
                Password
              </label>
            </div>
            <div className="col-5">
              <input
                className="mb-4"
                onChange={this.handleSignupInputChange}
                value={this.state.password}
                type="password"
                name="password"
              />
            </div>
          </div>
          <div className="row p-0 m-0 align-items-center justify-content-center">
            <div className="col-5">
              <label className="mb-5" htmlFor="location">Location</label>
            </div>
            <div className="col-5">
              <input
                className="mb-5"
                onChange={this.handleSignupInputChange}
                value={this.state.location}
                type="text"
                name="location"
              />
            </div>
          </div>
          <div className="row p-0 m-0 justify-content-center">
            <input value="Signup" type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewUser;
