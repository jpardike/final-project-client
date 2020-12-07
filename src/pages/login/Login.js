import React from "react";
import UserModel from "../../models/user";

import "./login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  handleLoginInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLoginFormSubmit = (event) => {
    event.preventDefault();
    UserModel.login(this.state.email).then((data) => {
      console.log(data);
      this.props.changeUser(data.user._id);
      this.props.history.push(`/user/feed/${data.user._id}`);
    });
  };

  render() {
    return (
      <div className="row p-0 m-0 justify-content-center align-items-center text-center login-form-container">
        <form className="p-4 login-form" onSubmit={this.handleLoginFormSubmit}>
          <h2 className="mb-5">Login</h2>
          <div className="row p-0 m-0 justify-content-center">
            <div className="col">
              <label className="mb-4" htmlFor="email">
                Email
              </label>
            </div>
            <div className="col">
              <input
                className="mb-4"
                onChange={this.handleLoginInputChange}
                value={this.state.email}
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="row p-0 m-0 justify-content-center">
            <div className="col">
              <label className="mb-5" htmlFor="password">Password</label>
            </div>
            <div className="col">
              <input className="mb-5" type="password" name="password" />
            </div>
          </div>
          <div className="row p-0 m-0 justify-content-center">
            <input value="Login" type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
