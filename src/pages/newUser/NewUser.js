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
      this.props.changeUser(data.users);
    });
    this.props.history.push(`/user/feed/${this.state.username}`);
  };

  render() {
    return (
      <div>
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
            <input value="Signup" type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewUser;
